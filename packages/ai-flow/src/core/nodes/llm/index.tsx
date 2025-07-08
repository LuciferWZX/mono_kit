import type { Node, NodeProps } from '@xyflow/react'
import { NodeDecoration } from '../../../components'
import LLMContent from './content'
import type { LLMNodeType } from '../../../types/llm'

function LLMNode(props: NodeProps<Node<LLMNodeType>>) {
  return (
    <NodeDecoration nodeProps={props}>
      <LLMContent nodeData={props.data} />
    </NodeDecoration>
  )
}

export default LLMNode
