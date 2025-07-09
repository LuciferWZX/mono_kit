import { NodeEnumType } from '../../types'
import TurboEdge from './edges/TurboEdge'
import LLMNode from './llm'

export const NODE_TYPES = {
  [NodeEnumType.LLM]: LLMNode,
}
export const NODE_EDGES = {
  turbo: TurboEdge,
}
