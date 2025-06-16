import type { OptionType } from '@mono-kit/ui/types'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@mono-kit/ui/base/hover-card'
import { InputField } from '@mono-kit/ui/int-ui'
import { cn } from '@mono-kit/ui/lib/utils'
import { ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

interface ComboBoxProps<T = any> {
  // 可以添加props定义
  options?: OptionType[]
  placeholder?: string
  value?: T
  onChange?: (value: T) => void
  className?: string
}

export function ComboBox(props: ComboBoxProps) {
  const { options, placeholder, value, onChange, className } = props
  const inputRef = useRef<HTMLInputElement>(null)
  const [open, setOpen] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const handleActionsMouseDown = (e: React.MouseEvent) => {
    e.preventDefault() // 防止触发blur事件
    inputRef.current?.focus()
    setOpen(prevOpen => !prevOpen)
    setIsFocused(true)
  }

  // 处理输入框聚焦和失焦
  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
    setOpen(false)
  }

  // 处理选项选择
  const handleOptionSelect = (option: OptionType) => {
    if ('value' in option && onChange) {
      onChange(option.value)
      setOpen(false)
    }
  }

  // 添加键盘事件处理：只在输入框聚焦时生效
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isFocused)
        return

      if (event.key === 'Escape' && open) {
        setOpen(false)
      }
      else if (event.key === 'ArrowDown' && !open) {
        event.preventDefault()
        setOpen(true)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, isFocused])

  return (
    <HoverCard open={open}>
      <HoverCardTrigger asChild={true}>
        <InputField
          ref={inputRef}
          placeholder={placeholder}
          value={value}
          classes={{ input: 'py-[0.3125rem] px-2 w-30' }}
          className={cn('p-0 gap-0', className)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          actions={(
            <span
              className="inline-flex border-l p-[0.3125rem] text-grey7 dark:grey10 cursor-pointer"
              onMouseDown={handleActionsMouseDown}
            >
              <ChevronDown size={16} />
            </span>
          )}
        />
      </HoverCardTrigger>
      <HoverCardContent>
        {options?.map((option, index) => {
          // 处理分隔符类型
          if ('type' in option && option.type === 'divider') {
            return <div key={`divider-${index}`} className="border-t my-1" />
          }

          // 处理分组类型
          if ('type' in option && option.type === 'group') {
            return (
              <div key={option.value}>
                <div className="font-semibold px-2 py-1 text-sm text-gray-500">
                  {option.label}
                </div>
                {option.children?.map((child, childIndex) => (
                  <div
                    key={`${option.value}-${childIndex}`}
                    className="px-4 py-1 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleOptionSelect(child)}
                  >
                    {child.label || child.value}
                  </div>
                ))}
              </div>
            )
          }

          // 处理普通选项
          return (
            <div
              key={option.value}
              className="px-2 py-1 cursor-pointer hover:bg-gray-100"
              onClick={() => handleOptionSelect(option)}
            >
              {option.label || option.value}
            </div>
          )
        })}
      </HoverCardContent>
    </HoverCard>
  )
}
