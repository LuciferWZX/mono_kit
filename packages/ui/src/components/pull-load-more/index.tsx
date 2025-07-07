import { throttle } from '@mono-kit/lib'
import { ScrollArea } from '@mono-kit/ui/base/scroll-area'
import { useCallback, useEffect, useRef, useState } from 'react'

interface PullLoadMoreProps<T> {
  items: T[]
  className?: string
  renderItem: (item: T) => React.ReactNode
  loadMore?: () => Promise<void>
  /**
   * 节流时间（毫秒）
   * @default 300
   */
  throttleTime?: number
}

export function PullLoadMore<T>(props: PullLoadMoreProps<T>) {
  const { items, renderItem, className, loadMore, throttleTime = 300 } = props
  const viewportRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const isFirstLoad = useRef(true)

  // 只在第一次加载时滚动到底部
  useEffect(() => {
    if (isFirstLoad.current && viewportRef.current && items.length > 0) {
      viewportRef.current.scrollTop = viewportRef.current.scrollHeight
      isFirstLoad.current = false
    }
  }, [items])

  // 阻止滚动到最顶部
  const preventScrollToTop = useCallback(() => {
    if (!viewportRef.current)
      return

    const { scrollTop } = viewportRef.current
    if (scrollTop <= 1) {
      viewportRef.current.scrollTop = 1
    }
  }, [])

  // 阻止键盘滚动到顶部
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!viewportRef.current)
      return

    const { scrollTop } = viewportRef.current

    // 阻止向上箭头键和Page Up键滚动到顶部
    if ((event.key === 'ArrowUp' || event.key === 'PageUp') && scrollTop <= 1) {
      event.preventDefault()
      viewportRef.current.scrollTop = 1
    }

    // 阻止Home键滚动到顶部
    if (event.key === 'Home' && scrollTop <= 1) {
      event.preventDefault()
      viewportRef.current.scrollTop = 1
    }
  }, [])

  // 使用节流处理滚动事件
  const handleScroll = useCallback(
    throttle(() => {
      if (!viewportRef.current || !loadMore || isLoading)
        return

      const { scrollTop } = viewportRef.current
      if (scrollTop <= 100) {
        setIsLoading(true)
        loadMore().then().catch((err) => {
          console.error('[加载更多失败]', err)
        }).finally(() => {
          setIsLoading(false)
        })
      }
    }, throttleTime),
    [loadMore, isLoading, throttleTime],
  )

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport)
      return

    // 添加滚动事件监听器来阻止滚动到顶部
    viewport.addEventListener('scroll', preventScrollToTop)
    viewport.addEventListener('scroll', handleScroll)

    // 添加键盘事件监听器
    viewport.addEventListener('keydown', handleKeyDown)

    return () => {
      viewport.removeEventListener('scroll', preventScrollToTop)
      viewport.removeEventListener('scroll', handleScroll)
      viewport.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleScroll, preventScrollToTop, handleKeyDown])

  return (
    <ScrollArea type="always" viewportRef={viewportRef} className={className}>
      {isLoading && <div className="h-20 bg-red-500">加载更多</div>}
      {items.map(renderItem)}
    </ScrollArea>
  )
}
