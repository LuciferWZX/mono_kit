import type { NodeProps } from '@xyflow/react'
import type { ComponentProps } from 'react'
import { isEqual } from '@mono-kit/lib'
import { cn } from '@mono-kit/ui/lib/utils'
import { memo } from 'react'

interface NodeDecorationProps extends ComponentProps<'div'> {
  nodeProps: NodeProps
}
export const NodeDecoration = memo((props: NodeDecorationProps) => {
  const { className, nodeProps, ...rest } = props
  return <div className={cn('p-2 rounded-md', className)} {...rest} />
}, (prev, next) => {
  const { positionAbsoluteX: _x, positionAbsoluteY: _y, ...restPrev } = prev.nodeProps
  const { positionAbsoluteX: _x2, positionAbsoluteY: _y2, ...restNext } = next.nodeProps
  return isEqual(restPrev, restNext)
})
