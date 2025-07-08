import { NodeEnumType } from '../../types'
import LLMNode from './llm'

const NODE_TYPES = {
  [NodeEnumType.LLM]: LLMNode,
}

export default NODE_TYPES
