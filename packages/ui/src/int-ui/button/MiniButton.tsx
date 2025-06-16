import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { cn } from '@mono-kit/ui/lib/utils'
import { cva } from 'class-variance-authority'

export const miniButtonVariants = cva(
  'inline-flex rounded-full size-4 items-center justify-center cursor-pointer outline-none focus-within:ring-1 focus-within:ring-primary ',
  {
    variants: {
      variant: {
        default: 'text-gray6 dark:text-gray11 hover:bg-gray7/10  dark:hover:bg-gray8/[0.13]',
        primary: '',

      },

    },
    defaultVariants: {
      variant: 'default',
    },
  },
)
interface MiniButtonProps extends ComponentProps<'button'>, VariantProps<typeof miniButtonVariants> {}
export function MiniButton(props: MiniButtonProps) {
  const { variant, className, children, ...rest } = props
  return (
    <button className={cn('', miniButtonVariants({ variant, className }))} {...rest}>
      {children}
    </button>
  )
}
