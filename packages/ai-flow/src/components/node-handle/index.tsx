import type { ComponentProps } from 'react'
import { cn } from '@mono-kit/ui/lib/utils'
import { Handle, Position, useNodeId } from '@xyflow/react'
import { useMemo } from 'react'
import { useAIFlowStore } from '../../store/useAIFlowStore'

function useHandle(id: string) {
  const edges = useAIFlowStore(state => state.edges)
  const isConnected = useMemo(() => {
    return edges.some(edge => edge.sourceHandle === id || edge.targetHandle === id)
  }, [edges, id])
  return isConnected
}
interface NodeHandleProps extends ComponentProps<typeof Handle> {

}
export function NodeHandle(props: NodeHandleProps) {
  const { className, ...rest } = props
  const isConnected = useHandle(rest.id || '')

  return (
    <Handle
      className={cn(
        'transition-transform duration-150 ',
        {
          '!h-6 !rounded-xs': [Position.Left, Position.Right].includes(rest.position),
          'is_connected': isConnected,
        },
        className,
      )}
      {...rest}
    />
  )
}
