import type { ComponentProps } from 'react'
import { Button } from '@mono-kit/ui/base/button'
import { XIcon } from '@mono-kit/ui/icon/lucide'
import { cn } from '@mono-kit/ui/lib/utils'

interface CloseButtonProps extends ComponentProps<typeof Button> {

}
export function CloseButton(props: CloseButtonProps) {
  const { className, ...rest } = props
  return (
    <Button
      variant="default"
      size="icon"
      className={cn('absolute rounded-full', className)}
      {...rest}
    >
      <XIcon className="w-4 h-4" />
    </Button>
  )
}
