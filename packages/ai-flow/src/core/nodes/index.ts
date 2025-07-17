import { NodeEnumType } from '../../types'
import BranchNode from './branch'
import TurboEdge from './edges/TurboEdge'
import LLMNode from './llm'

export const NODE_TYPES = {
  [NodeEnumType.LLM]: LLMNode,
  [NodeEnumType.BRANCH]: BranchNode,
}
export const NODE_EDGES = {
  turbo: TurboEdge,
}
