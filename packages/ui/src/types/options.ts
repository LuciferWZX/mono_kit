import type { ReactNode } from 'react'

export interface BaseOptionType {
  label?: string
  value: string
  render?: (option: BaseOptionType) => ReactNode
}
export interface OptionDividerType {
  type: 'divider'
}
export interface OptionGroupType extends BaseOptionType {
  type: 'group'
  children: BaseOptionType[]
}

export type OptionType = BaseOptionType | OptionDividerType | OptionGroupType
