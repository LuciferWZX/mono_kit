import type { Node, NodeProps } from '@xyflow/react'
import type { BranchNodeType } from '../../../types/branch'
import { NodeDecoration } from '../../../components'
import BranchContent from './content'

function BranchNode(props: NodeProps<Node<BranchNodeType>>) {
  return (
    <NodeDecoration nodeProps={props}>
      <BranchContent nodeData={props.data} id={props.id} />
    </NodeDecoration>
  )
}

export default BranchNode
