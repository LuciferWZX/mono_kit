import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { MiniButton } from '@mono-kit/ui/int-ui'
import { cn } from '@mono-kit/ui/lib/utils.ts'
import { cva } from 'class-variance-authority'
import { Info, X } from 'lucide-react'

export const bannerVariants = cva(
  'w-full flex gap-5 border-y border-blue10  bg-blue13 dark:border-blue3 dark:bg-blue1 py-[0.6875rem] px-3',
  {
    variants: {
      variant: {
        default: '',
        inline: '',
      },

    },
    defaultVariants: {
      variant: 'default',
    },
  },
)
export interface BannerProps extends ComponentProps<'div'>, VariantProps<typeof bannerVariants> {}
export function Banner(props: BannerProps) {
  const { variant, className, ...rest } = props
  return (
    <header className={cn('', bannerVariants({ variant, className }))} {...rest}>
      <div className="flex-1 flex gap-2">
        <Info className="text-blue7 dark:text-blue6" size={16} />
        <div className="flex-1">
          messages

        </div>
      </div>
      <MiniButton>
        <X size={16} />
      </MiniButton>
    </header>
  )
}
