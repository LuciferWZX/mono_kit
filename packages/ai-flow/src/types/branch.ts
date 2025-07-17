import type { BaseNodeType, NodeEnumType } from './index'

export enum BranchOperator {
  EQUAL = '=', // 等于
  NOT_EQUAL = '!=', // 不等于
  GREATER_THAN = '>', // 大于
  LESS_THAN = '<', // 小于
  GREATER_THAN_OR_EQUAL = '>=', // 大于等于
  LESS_THAN_OR_EQUAL = '<=', // 小于等于
  CONTAINS = 'contains', // 包含
  NOT_CONTAINS = 'not_contains', // 不包含
  STARTS_WITH = 'starts_with', // 以...开头
  ENDS_WITH = 'ends_with', // 以...结尾
  IS_EMPTY = 'is_empty', // 为空
  IS_NOT_EMPTY = 'is_not_empty', // 不为空
}
export interface IBranchConditionExpression {
  type: 'expression'
  expression: IBranchConditionExpression
}
export interface IBranchConditionCode {
  type: 'code'
  code: string
}
export type IBranchCondition = IBranchConditionExpression | IBranchConditionCode
export interface IBranch {
  id: string // 分支id
  name: string // 分支名称
  description: string // 分支描述
  conditions: IBranchCondition[] // 条件
}
export interface BranchFormData {
  branches: IBranch[]
}
export interface BranchNodeType extends BaseNodeType<NodeEnumType.BRANCH, BranchFormData>, Record<string, unknown> {
  type: NodeEnumType.BRANCH
}
