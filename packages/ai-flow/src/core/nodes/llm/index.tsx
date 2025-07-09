import type { Node, NodeProps } from '@xyflow/react'
import type { LLMNodeType } from '../../../types/llm'
import { NodeDecoration } from '../../../components'
import LLMContent from './content'

function LLMNode(props: NodeProps<Node<LLMNodeType>>) {
  return (
    <NodeDecoration nodeProps={props}>
      <LLMContent nodeData={props.data} id={props.id} />
    </NodeDecoration>
  )
}

export default LLMNode
