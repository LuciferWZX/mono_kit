import type { OptionType } from '@mono-kit/ui/types'
import type { ComponentProps } from 'react'
import {
  DropdownMenu as BaseDropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@mono-kit/ui/base/dropdown-menu'
import { cn, isDivider, isGroup } from '@mono-kit/ui/lib/utils'
import { useCallback } from 'react'

export type DropdownMenuOptions = OptionType
interface DropdownMenuProps extends ComponentProps<typeof BaseDropdownMenu> {
  asChild?: boolean
  contentProps?: Omit<ComponentProps<typeof DropdownMenuContent>, 'children'>
  options?: DropdownMenuOptions[]
}
function DropdownMenu(props: DropdownMenuProps) {
  const { children, asChild, contentProps, options, ...restProps } = props
  const renderOptions = useCallback((_options: DropdownMenuOptions[]) => {
    return _options.map((option, index) => {
      if (isDivider(option)) {
        return (
          <DropdownMenuSeparator key={index} />
        )
      }
      if (isGroup(option)) {
        return (
          <DropdownMenuGroup key={option.value}>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className={cn('ui_default py-1 px-2 focus:bg-blue11 dark:focus:bg-blue2 data-[state=open]:bg-blue11 dark:data-[state=open]:bg-blue2')}>
                {option.render ? option.render(option) : (option.label ?? option.value)}
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent sideOffset={12} className={cn('bg-grey14 dark:bg-grey2')}>
                  {renderOptions(option.children)}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
        )
      }
      return (
        <DropdownMenuItem className={cn('ui_default py-1 px-2 focus:bg-blue11 dark:focus:bg-blue2')} key={option.value}>
          {option.render ? option.render(option) : <span>{option.label ?? option.value}</span>}
        </DropdownMenuItem>
      )
    })
  }, [])
  return (
    <BaseDropdownMenu {...restProps}>
      <DropdownMenuTrigger asChild={asChild}>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent {...contentProps} className="border-grey9 dark:border-grey3 bg-grey14 dark:bg-grey2 py-2 px-3">
        {options && renderOptions(options)}
      </DropdownMenuContent>
    </BaseDropdownMenu>
  )
}
export default DropdownMenu
