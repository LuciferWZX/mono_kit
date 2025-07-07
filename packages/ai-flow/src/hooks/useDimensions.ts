import type { RefObject } from 'react'
import { useEffect, useRef } from 'react'
// 如果这在初始客户端渲染时很重要。
// 对于未测量的状态，返回 null 会更安全。
export function useDimensions(ref: RefObject<HTMLDivElement | null>) {
  const dimensions = useRef<{ width: number, height: number }>({ width: 0, height: 0 })
  useEffect(() => {
    if (ref.current) {
      dimensions.current = { width: ref.current.offsetWidth, height: ref.current.offsetHeight }
    }
  }, [ref])
  return dimensions.current
}
