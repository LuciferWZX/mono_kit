import type { BaseNodeType } from '../types'
import type { LLMNodeType } from '../types/llm'
import { create } from 'zustand'
import { useShallow } from 'zustand/shallow'
import { NodeEnumType } from '../types'

export interface NodeListItem {
  id: number
  disabled?: boolean
  data: BaseNodeType
}

interface NodeStoreState {
  nodeList: NodeListItem[]
}
const initialState: NodeStoreState = {
  nodeList: [
    {
      id: 1,
      data: {
        id: '0001',
        name: 'LLM',
        type: NodeEnumType.LLM,
        model: 'gpt-3.5-turbo',
        temperature: 0.5,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      } as LLMNodeType,
    },
  ],
}
export const useBaseUseNodeStore = create<NodeStoreState>(() => {
  return {
    ...initialState,
  }
})
export function useNodeStore<T>(selector: (state: NodeStoreState) => T) {
  return useBaseUseNodeStore(useShallow(selector))
}
