import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { cn } from '@mono-kit/ui/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'

export const toolbarButtonVariants = cva(
  'text-grey8 dark:text-grey7 rounded-[0.1875rem] hover:bg-grey12 dark:hover:bg-grey3 active:bg-grey11 dark:active:bg-grey5 outline-none',
  {
    variants: {
      variant: {
        secondary: '',
        primary: '',
      },
      size: {
        default: '',
        slim: 'size-4 p-[0.0625rem]',
      },
    },
    defaultVariants: {
      variant: 'secondary',
      size: 'default',
    },
  },
)
interface ToolbarButtonProps extends ComponentProps<'button'>, VariantProps<typeof toolbarButtonVariants> {
  asChild?: boolean
}
export function ToolbarButton(props: ToolbarButtonProps) {
  const { className, asChild = false, variant, size, type = 'button', ...restProps } = props
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      data-slot="button"
      className={cn('', toolbarButtonVariants({ variant, size, className: cn('disabled:cursor-not-allowed disabled:hover:bg-transparent dark:disabled:hover:bg-transparent', className) }))}
      type={type}
      {...restProps}
    />
  )
}
