import type { OptionDividerType, OptionGroupType, OptionType } from '@mono-kit/ui/types'
import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function isDivider(option: OptionType): option is OptionDividerType {
  return 'type' in option && option.type === 'divider'
}
export function isGroup(option: OptionType): option is OptionGroupType {
  return 'type' in option && option.type === 'group'
}
