import type { BaseNodeType, NodeEnumType } from './index'

export interface LLMNodeType extends BaseNodeType<NodeEnumType.LLM> {
  model: string // 模型名称
  temperature: number // 温度
  max_tokens: number // 最大token
  top_p: number //
  frequency_penalty: number // 频率惩罚
  presence_penalty: number // 存在惩罚

}
