import type { MockItem } from './mock'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useCallback, useEffect, useState } from 'react'
import { generateItems } from './mock'

export function useMockData() {
  const [items, setItems] = useState<MockItem[]>([])
  const [currentPage, setCurrentPage] = useState<number | undefined>(undefined)
  const queryClient = useQueryClient()

  const {
    // 查询状态参数
    isPending, // 首次加载状态：true 表示正在执行第一次查询，false 表示已完成或未开始
    isError, // 错误状态：true 表示查询出错，false 表示查询成功或未开始
    data, // 查询结果数据：成功时返回数据，失败时为 undefined
    error, // 错误信息：查询失败时的错误对象，成功时为 null
    isFetching, // 获取状态：true 表示正在获取数据（包括重新获取），false 表示空闲
    refetch, // 重新获取函数：调用此函数可以手动重新执行查询
  } = useQuery<{ page: number, items: MockItem[] }>({
    queryKey: ['mock-data'], // 使用固定的 queryKey
    queryFn: () => { // 查询函数：使用 currentPage 状态
      return generateItems(currentPage)
    },
    // enabled: false, // 是否启用自动查询：false 表示不会自动执行，需要手动触发
  })

  // 当 data 获取成功时，设置 items
  useEffect(() => {
    if (data) {
      console.warn({ items: data.items })
      setItems(prev => [...prev, ...data.items])
      setCurrentPage(data.page)
    }
  }, [data])

  // 重新请求
  const handleRefetch = () => {
    refetch()
  }

  const fetchPrevPage = useCallback(async () => {
    if (!currentPage) {
      return
    }

    const prevPage = currentPage - 1
    if (prevPage < 0)
      return
    console.warn('prevPage', prevPage)

    // 直接调用 queryFn 获取数据，而不是通过 refetch
    const newData = await generateItems(prevPage)
    setItems(prev => [...newData.items, ...prev])
    setCurrentPage(prevPage)
  }, [currentPage])

  // 清除缓存
  const handleInvalidate = () => {
    queryClient.invalidateQueries({ queryKey: ['mock-data'] })
  }

  // 设置缓存
  const handleSetData = (newData: MockItem[]) => {
    queryClient.setQueryData(['mock-data'], newData)
  }

  // 追加数据到缓存
  const handleAppendData = (newData: MockItem[]) => {
    const currentData = queryClient.getQueryData<MockItem[]>(['mock-data']) || []
    queryClient.setQueryData(['mock-data'], [...currentData, ...newData])
  }

  // 删除缓存
  const handleRemoveQuery = () => {
    queryClient.removeQueries({ queryKey: ['mock-data'] })
  }

  return {
    items,
    setItems,
    data,
    isPending,
    isError,
    error,
    isFetching,
    page: currentPage,
    // 手动调用方法
    refetch: handleRefetch,
    fetchPrevPage,
    invalidate: handleInvalidate,
    setData: handleSetData,
    appendData: handleAppendData,
    removeQuery: handleRemoveQuery,
  }
}
