import type { ComponentProps } from 'react'

import { Input } from '@mono-kit/ui/base/input'

import { Label } from '@mono-kit/ui/base/label'
import { Switch } from '@mono-kit/ui/base/switch'
import { useTheme } from '@mono-kit/ui/components'
import { SearchIcon } from '@mono-kit/ui/icon/lucide'
import { cn } from '@mono-kit/ui/lib/utils'
import { useId, useState } from 'react'

interface FlowHeaderProps extends ComponentProps<'header'> {
}
export function FlowHeader(props: FlowHeaderProps) {
  const { className, ...rest } = props
  const id = useId()
  const { theme, toggleTheme } = useTheme()
  const [checked, setChecked] = useState<boolean>(theme === 'dark')

  const handleThemeToggle = (isDark: boolean) => {
    setChecked(isDark)
    toggleTheme()
  }

  return (
    <header className={cn('border-b px-4 md:px-6', className)} {...rest}>
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="relative flex-1">
          <Input
            id={`input-${id}`}
            className="peer h-8 w-full max-w-xs ps-8 pe-2"
            placeholder="Search..."
            type="search"
          />
          <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 peer-disabled:opacity-50">
            <SearchIcon size={16} />
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Theme mode */}
          <div className="inline-flex items-center gap-2 max-md:hidden">
            <Label htmlFor={`switch-${id}`} className="text-sm font-medium">
              主题
            </Label>
            <Switch
              id={`switch-${id}`}
              checked={checked}
              onCheckedChange={handleThemeToggle}
              className="h-5 w-8 [&_span]:size-4 data-[state=checked]:[&_span]:translate-x-3 data-[state=checked]:[&_span]:rtl:-translate-x-3"
              aria-label="Toggle theme"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
