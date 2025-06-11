import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { cn } from '@mono-kit/ui/lib/utils.ts'
import { cva } from 'class-variance-authority'

export const inputVariants = cva(
  'border border-grey9 dark:border-grey5 bg-grey14 dark:bg-grey2 rounded ui_default py-[0.3125rem] px-2 text-grey1 dark:text-grey12 outline-primary focus-visible:outline-2 -outline-offset-[0.0625rem] aria-invalid:border-2 aria-invalid:-outline-offset-2 aria-invalid:border-red9 focus:aria-invalid:outline-red4 dark:focus:aria-invalid:outline-red6 dark:aria-invalid:border-red2',
  {
    variants: {},
    defaultVariants: {},
  },
)
interface InputFieldProps extends ComponentProps<'input'>, VariantProps<typeof inputVariants> {

}
export function InputField(props: InputFieldProps) {
  const { className, disabled, ...restProps } = props
  return (
    <input disabled={disabled} data-slot="input" className={cn('', inputVariants(), 'disabled:border-grey11 disabled:bg-grey13 disabled:text-grey8 dark:disabled:border-grey5 disabled:border-1 dark:disabled:text-grey7', className)} {...restProps} aria-invalid={disabled === true ? undefined : props['aria-invalid']} />
  )
}
