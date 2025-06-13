import type { OptionType } from '@mono-kit/ui/types'
import type { ComponentProps } from 'react'
import {
  Select as BaseSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@mono-kit/ui/base/select'
import { cn, isDivider, isGroup } from '@mono-kit/ui/lib/utils'
import { useCallback } from 'react'

interface SelectProps extends ComponentProps<typeof BaseSelect> {
  asChild?: boolean
  noStyle?: boolean
  classes?: {
    trigger?: string
    content?: string
    item?: string
    group?: string
    label?: string
  }
  options?: OptionType[]
  placeholder?: string
}

export function Select(props: SelectProps) {
  const {
    children,
    asChild,
    noStyle,
    classes,
    options,
    placeholder = '请选择...',
    ...restProps
  } = props

  const renderOptions = useCallback((_options: OptionType[]) => {
    return _options.map((option) => {
      if (isDivider(option)) {
        return null // Select组件不支持分隔符，跳过
      }

      if (isGroup(option)) {
        return (
          <SelectGroup key={option.value} className={classes?.group}>
            <SelectLabel className={classes?.label}>
              {option.render ? option.render(option) : (option.label ?? option.value)}
            </SelectLabel>
            {renderOptions(option.children)}
          </SelectGroup>
        )
      }

      return (
        <SelectItem
          key={option.value}
          value={option.value}
          className={cn('ui_default py-1 px-2 focus:bg-blue11 dark:focus:bg-blue2', classes?.item)}
        >
          {option.render ? option.render(option) : (option.label ?? option.value)}
        </SelectItem>
      )
    })
  }, [classes])

  return (
    <BaseSelect {...restProps}>
      <SelectTrigger
        className={cn('outline-none', classes?.trigger)}
        noStyle={noStyle}
        asChild={asChild}
      >
        {children ?? <SelectValue placeholder={placeholder} />}
      </SelectTrigger>
      <SelectContent
        className={cn('border-grey9 dark:border-grey3 bg-grey14 dark:bg-grey2', classes?.content)}
        position="popper"
        sideOffset={4}
        avoidCollisions={false}
      >
        {options ? renderOptions(options) : children}
      </SelectContent>
    </BaseSelect>
  )
}

export default Select
