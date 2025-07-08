import type { ComponentProps } from 'react'
import { isEqual } from '@mono-kit/lib'
import { Handle, Position } from '@xyflow/react'
import { memo } from 'react'
import type { LLMNodeType } from '../../../types/llm'

interface LLMContentProps extends ComponentProps<'div'> {
  nodeData: LLMNodeType
}
export const LLMContent = memo((props: LLMContentProps) => {
  const { nodeData } = props
  console.warn('[LLM:nodeData]', nodeData)

  return (
    <div>
      LLMContent
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  )
}, (prev, next) => {
  return isEqual(prev.nodeData, next.nodeData)
})

export default LLMContent
