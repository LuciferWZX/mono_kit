import type { HTMLAttributes, ReactNode } from 'react'
import { isString } from '@mono-kit/lib/utils/is'
import { cn } from '@mono-kit/ui/lib/utils'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ScrollArea } from '../../base/scroll-area'

export interface InfiniteScrollProps extends Omit<HTMLAttributes<HTMLDivElement>, 'dir'> {
  /**
   * 是否正在加载更多数据
   */
  loading?: boolean
  /**
   * 是否还有更多数据
   */
  hasMore?: boolean
  /**
   * 触发加载更多的回调函数
   */
  onLoadMore?: () => void | Promise<void>
  /**
   * 距离底部多少像素时触发加载更多
   * @default 200
   */
  threshold?: number
  /**
   * 加载中显示的内容
   */
  loadingContent?: ReactNode | string
  /**
   * 没有更多数据时显示的内容
   */
  noMoreContent?: ReactNode | string
  /**
   * 节流时间（毫秒）
   * @default 1000
   */
  throttleTime?: number
  /**
   * 是否在内容不足时自动加载更多
   * @default true
   */
  autoLoadMore?: boolean
}

export function InfiniteScroll({
  children,
  className,
  loading = false,
  hasMore = true,
  onLoadMore,
  threshold = 200,
  loadingContent = '加载中...',
  noMoreContent = '没有更多数据了',
  throttleTime = 1000,
  autoLoadMore = true,
  ...props
}: InfiniteScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isNearBottom, setIsNearBottom] = useState(false)
  const lastLoadTimeRef = useRef<number>(0)
  const loadingRef = useRef(loading)
  const userScrolledRef = useRef(false)

  loadingRef.current = loading

  const checkShouldLoadMore = useCallback(() => {
    if (!containerRef.current || loadingRef.current || !hasMore)
      return false

    const { scrollTop, scrollHeight, clientHeight } = containerRef.current
    const distanceToBottom = scrollHeight - scrollTop - clientHeight
    if (distanceToBottom <= threshold && hasMore) {
      return true
    }
    const now = Date.now()
    const timeThresholdMet = now - lastLoadTimeRef.current >= throttleTime

    // 如果内容高度小于或等于容器高度，且允许自动加载更多
    if ((scrollHeight <= clientHeight) && autoLoadMore) {
      if (timeThresholdMet) {
        lastLoadTimeRef.current = now
        return true
      }
      return false
    }

    // 正常滚动触发的情况
    if (distanceToBottom <= threshold && userScrolledRef.current && timeThresholdMet) {
      lastLoadTimeRef.current = now
      return true
    }

    return false
  }, [threshold, hasMore, throttleTime, autoLoadMore])

  const checkScrollPosition = useCallback(() => {
    if (checkShouldLoadMore()) {
      setIsNearBottom(true)
    }
    else {
      setIsNearBottom(false)
    }
  }, [checkShouldLoadMore])
  useEffect(() => {
    const container = containerRef.current
    if (!container)
      return

    const handleScroll = () => {
      userScrolledRef.current = true
      requestAnimationFrame(checkScrollPosition)
    }

    container.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)

    // 内容更新后检查一次滚动位置
    requestAnimationFrame(checkScrollPosition)

    return () => {
      container.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [checkScrollPosition, children])

  useEffect(() => {
    if (isNearBottom && !loading && hasMore && onLoadMore) {
      void onLoadMore()
    }
  }, [isNearBottom, loading, hasMore, onLoadMore])

  return (
    <ScrollArea
      viewportRef={containerRef}
      type="always"
      className={cn('relative h-full overflow-auto', className)}
      {...props}
    >
      {children}
      {loading && (
        isString(loadingContent)
          ? (
              <div className="flex items-center justify-center p-4">
                {loadingContent}
              </div>
            )
          : (
              loadingContent
            )
      )}
      {!hasMore && !loading && (
        isString(noMoreContent)
          ? (
              <div className="flex items-center justify-center p-4 text-gray-500">
                {noMoreContent}
              </div>
            )
          : (
              noMoreContent
            )
      )}
    </ScrollArea>
  )
}
