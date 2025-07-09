import type { ComponentProps } from 'react'
import type { LLMNodeType } from '../../../types/llm'
import { isEqual } from '@mono-kit/lib'
import { Handle, Position } from '@xyflow/react'
import { memo } from 'react'
import { NodeHandle } from '../../../components'

interface LLMContentProps extends ComponentProps<'div'> {
  nodeData: LLMNodeType
}
export const LLMContent = memo((props: LLMContentProps) => {
  const { nodeData, id } = props
  console.warn('[LLM:nodeData]', nodeData)

  return (
    <div>
      LLMContent
      <NodeHandle id={`${id}-target`} type="target" position={Position.Left} />
      <NodeHandle id={`${id}-source`} type="source" position={Position.Right} />
    </div>
  )
}, (prev, next) => {
  return isEqual(prev.nodeData, next.nodeData)
})

export default LLMContent
