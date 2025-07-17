import type { ComponentProps } from 'react'
import type { BranchNodeType } from '../../../types/branch'
import { isEqual } from '@mono-kit/lib'
import { Handle, Position } from '@xyflow/react'
import { memo } from 'react'
import { NodeHandle } from '../../../components'
import BranchForm from './form'

interface BranchContentProps extends ComponentProps<'div'> {
  nodeData: BranchNodeType
}
export const BranchContent = memo((props: BranchContentProps) => {
  const { nodeData, id } = props
  console.warn('[Branch:nodeData]', nodeData)

  return (
    <div>
      <BranchForm />
      <NodeHandle id={`${id}-target`} type="target" position={Position.Left} />
      <NodeHandle id={`${id}-source`} type="source" position={Position.Right} />
    </div>
  )
}, (prev, next) => {
  return isEqual(prev.nodeData, next.nodeData)
})

export default BranchContent
