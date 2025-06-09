import type { VariantProps } from 'class-variance-authority'

import type { ComponentProps } from 'react'
import { buttonVariants } from '@mono-kit/ui/int-ui'
import { cn } from '@mono-kit/ui/lib/utils.ts'
import { cva } from 'class-variance-authority'
import { ChevronDown } from 'lucide-react'

export const splitButtonVariants = cva(
  'cursor-pointer border box-border rounded  min-w-[4.5rem] outline-primary focus-visible:outline-2 -outline-offset-1 disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground disabled:border-muted dark:disabled:bg-muted dark:disabled:text-muted-foreground dark:disabled:border-muted',
  {
    variants: {
      variant: {
        secondary: 'bg-grey14 hover:border-grey8 active:border-grey7 active:bg-grey13 dark:bg-transparent dark:hover:border-grey7 dark:active:bg-grey2  dark:text-grey12 ',
        primary: 'outline-offset-1 bg-primary text-primary-foreground border-primary hover:bg-blue3 hover:border-blue3 active:bg-blue2 active:border-blue2 dark:hover:bg-blue5 dark:hover:border-blue5 dark:active:bg-blue4 dark:active:border-blue4',
      },
      size: {
        default: '',
        slim: '',
      },
    },
    defaultVariants: {
      variant: 'secondary',
      size: 'default',
    },
  },
)
const splitButtonIconVariants = cva('border-l pl-1 p-[0.3125rem] inline-block text-grey7 group-disabled:pointer-events-none group-disabled:border-grey11 group-disabled:dark:border-grey6', {
  variants: {
    variant: {
      secondary: 'border-grey9 dark:border-grey5 group-hover:border-grey8 group-hover:dark:border-grey7 group-hover:disabled:border-grey11',
      primary: 'border-blue7 dark:border-blue9 text-grey14 ',
    },
  },
  defaultVariants: {
    variant: 'secondary',
  },
})
interface SplitButtonProps extends ComponentProps<'button'>, VariantProps<typeof splitButtonVariants> {

}
export function SplitButton(props: SplitButtonProps) {
  const { variant, size, children, className, ...restProps } = props
  return (
    <button
      data-slot="button"
      className={cn('group', splitButtonVariants({ variant, size, className }), 'flex items-center')}
      {...restProps}
    >
      <span className={cn('', buttonVariants({ variant, size }), 'pointer-events-none bg-transparent border-none group-disabled:text-grey8 group-disabled:dark:text-grey8')}>
        {children}
      </span>
      <span className={cn('', splitButtonIconVariants({ variant }), 'group-disabled:text-grey8')}>
        <ChevronDown size={16} />
      </span>
    </button>
  )
}
