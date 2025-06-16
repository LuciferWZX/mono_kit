import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps, CSSProperties, ReactNode } from 'react'
import { ToolbarButton } from '@mono-kit/ui/int-ui'
import { cn } from '@mono-kit/ui/lib/utils.ts'
import { cva } from 'class-variance-authority'
import { cloneElement, isValidElement } from 'react'

export const inputVariants = cva(
  'flex gap-2 border border-grey9 dark:border-grey5 focus-within:border-primary dark:focus-within:border-primary bg-grey14 dark:bg-grey2 rounded ui_default py-[0.3125rem] px-2 text-grey1 dark:text-grey12 focus-within:outline-primary focus-within:outline-2 focus-within:-outline-offset-[0.0625rem] aria-invalid:border-2 aria-invalid:-outline-offset-2 aria-invalid:border-red9 focus-within:aria-invalid:outline-red4 dark:focus-within:aria-invalid:outline-red6 dark:aria-invalid:border-red2',
  {
    variants: {},
    defaultVariants: {},
  },
)
export interface InputFieldAction {
  key: string
  icon: ReactNode
  onClick?: ComponentProps<'button'>['onClick']
  disabled?: boolean
  className?: string
}
interface InputFieldProps extends ComponentProps<'input'>, VariantProps<typeof inputVariants> {
  actions?: InputFieldAction[] | ReactNode
  styles?: {
    input?: CSSProperties
    box?: CSSProperties
  }
  classes?: {
    input?: string
  }
}
export function InputField(props: InputFieldProps) {
  const { className, disabled, actions, styles, classes, ...restProps } = props
  const ariaInvalid = disabled === true ? undefined : props['aria-invalid']
  return (
    <div
      className={cn(
        inputVariants(),
        'disabled:border-grey11 disabled:bg-grey13 disabled:text-grey8 dark:disabled:border-grey5 disabled:border-1 dark:disabled:text-grey7',
        className,
      )}
      aria-invalid={ariaInvalid}
      style={styles?.box}
    >
      <input
        disabled={disabled}
        data-slot="input"
        className={cn('outline-none', classes?.input)}
        style={styles?.input}
        {...restProps}
        aria-invalid={ariaInvalid}
      />
      {Array.isArray(actions)
        ? (
            actions.map((action) => {
              return (
                <ToolbarButton key={action.key} disabled={disabled || action.disabled} size="slim" tabIndex={-1} onClick={action.onClick}>
                  {isValidElement(action.icon)
                    ? cloneElement(action.icon, {
                        className: cn((action.icon.props as any).className, 'size-3.5'),
                      } as any)
                    : action.icon}
                </ToolbarButton>
              )
            })
          )
        : (
            actions
          )}
    </div>
  )
}
