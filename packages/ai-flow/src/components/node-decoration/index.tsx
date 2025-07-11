import type { FlowNodeType } from '@mono-kit/ai-flow/types/llm'
import type { Node, NodeProps } from '@xyflow/react'
import type { ComponentProps } from 'react'
import { isEqual } from '@mono-kit/lib'
import { cn } from '@mono-kit/ui/lib/utils'
import { memo } from 'react'
import { NodeDecorationHeader } from './header'

interface NodeDecorationProps extends ComponentProps<'div'> {
  nodeProps: NodeProps<Node<FlowNodeType>>
}
export const NodeDecoration = memo((props: NodeDecorationProps) => {
  const { className, nodeProps, children, ...rest } = props
  return (
    <div
      className={cn(
        'p-2 border rounded-md bg-card w-60 min-h-40',
        {
          'border-primary': nodeProps.selected,
        },
        className,
      )}
      {...rest}
    >
      <NodeDecorationHeader icon={nodeProps.data.icon} title={nodeProps.data.name} />
      {children}
    </div>
  )
}, (prev, next) => {
  const { positionAbsoluteX: _x, positionAbsoluteY: _y, ...restPrev } = prev.nodeProps
  const { positionAbsoluteX: _x2, positionAbsoluteY: _y2, ...restNext } = next.nodeProps
  return isEqual(restPrev, restNext)
})
