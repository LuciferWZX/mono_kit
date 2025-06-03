import type { ReactNode } from 'react'
import { cn } from '@mono-kit/ui/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '../../base/avatar'

export interface ChatItemProps {
  /**
   * 是否为机器人消息
   */
  isBot?: boolean
  /**
   * 头像URL
   */
  avatarUrl?: string
  /**
   * 发送时间
   */
  timestamp: string | Date
  /**
   * 消息内容
   */
  content: ReactNode
  /**
   * 额外的操作按钮
   */
  actions?: ReactNode
  /**
   * 自定义类名
   */
  className?: string
}

export function ChatItem({
  isBot = false,
  avatarUrl,
  timestamp,
  content,
  actions,
  className,
}: ChatItemProps) {
  const formattedTime = typeof timestamp === 'string'
    ? timestamp
    : timestamp.toLocaleString()

  return (
    <div className={cn('group mb-6 last:mb-0', className)}>
      <div className="mb-1 text-center">
        <span className="text-xs text-gray-400">{formattedTime}</span>
      </div>
      <div
        className={cn(
          'flex items-start gap-3',
          isBot ? 'flex-row' : 'flex-row-reverse',
        )}
      >
        <Avatar className="h-8 w-8">
          {avatarUrl && <AvatarImage src={avatarUrl} alt="avatar" />}
          <AvatarFallback>{isBot ? 'B' : 'U'}</AvatarFallback>
        </Avatar>
        <div className="relative max-w-[70%]">
          <div
            className={cn(
              'rounded-lg p-3',
              isBot
                ? 'bg-gray-100'
                : 'bg-blue-500 text-white',
            )}
          >
            {content}
          </div>
          <div
            className={cn(
              'invisible absolute -top-8 flex items-center gap-2 rounded-md bg-white p-1 shadow-lg transition-all group-hover:visible',
              isBot ? 'left-0' : 'right-0',
            )}
          >
            {actions}
          </div>
        </div>
      </div>
    </div>
  )
}
