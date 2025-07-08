export enum NodeEnumType {
  LLM = 'llm',
  TTS = 'tts',
}
export interface BaseNodeType<T = NodeEnumType, D = Record<string, any>> {
  id: string // 节点id
  name: string // 节点名称
  type: T // 节点类型
  icon?: string // 图标
  description?: string // 描述
  formData?: D // 表单数据
}
