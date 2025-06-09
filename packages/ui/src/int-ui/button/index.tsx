import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { cn } from '@mono-kit/ui/lib/utils.ts'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'cursor-pointer border box-border rounded  min-w-[4.5rem] outline-primary focus-visible:outline-2 -outline-offset-1 disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground disabled:border-muted dark:disabled:bg-muted dark:disabled:text-muted-foreground dark:disabled:border-muted',
  {
    variants: {
      variant: {
        secondary: 'bg-grey14 hover:border-grey8 active:border-grey7 active:bg-grey13 dark:bg-transparent dark:hover:border-grey7 dark:active:bg-grey2  dark:text-grey12 ',
        primary: 'outline-offset-1 bg-primary text-primary-foreground border-primary hover:bg-blue3 hover:border-blue3 active:bg-blue2 active:border-blue2 dark:hover:bg-blue5 dark:hover:border-blue5 dark:active:bg-blue4 dark:active:border-blue4',
      },
      size: {
        default: 'py-[0.3125rem] px-3.5',
        slim: 'py-[0.1875rem] px-3.5',
      },
    },
    defaultVariants: {
      variant: 'secondary',
      size: 'default',
    },
  },
)
export interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}
export function Button(props: ButtonProps) {
  const { className, asChild = false, variant, size, ...restProps } = props
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      data-slot="button"
      className={cn('', buttonVariants({ variant, size, className }))}
      {...restProps}
    />
  )
}
