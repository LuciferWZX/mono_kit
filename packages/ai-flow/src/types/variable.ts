// 基本类型
export enum BaseVariableType {
  STRING = 'string', // 字符串
  NUMBER = 'number', // 数字
  BOOLEAN = 'boolean', // 布尔
  OBJECT = 'object', // 对象
  NULL = 'null', // 空
  UNDEFINED = 'undefined', // 未定义
  DATE = 'date', // 日期
}
export type FlowValueType<T = BaseVariableType> = T extends BaseVariableType.STRING ? string
  : T extends BaseVariableType.NUMBER ? number
    : T extends BaseVariableType.BOOLEAN ? boolean
      : T extends BaseVariableType.OBJECT ? Record<string, unknown>
        : T extends BaseVariableType.NULL ? null
          : T extends BaseVariableType.UNDEFINED ? undefined
            : T extends BaseVariableType.DATE ? Date
              : never

export enum FlowVariableCategory {
  USER = 'user', // 用户
  SYSTEM = 'system', // 系统
}
export interface FlowVariable<T = BaseVariableType> {
  type: T // 类型
  category: FlowVariableCategory // 分类
  id: string
  name: string
  description?: string
  isArray: boolean // 是否是数组
  value: FlowValueType<T> // 值
  defaultValue: FlowValueType<T> // 默认值
}
