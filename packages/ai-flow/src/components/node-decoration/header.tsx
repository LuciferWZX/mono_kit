import type { ComponentProps } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@mono-kit/ui/base/avatar'
import { Input } from '@mono-kit/ui/base/input'
import { cn } from '@mono-kit/ui/lib/utils'
import { useNodeId } from '@xyflow/react'
import { memo, useState } from 'react'
import { FlowManager } from '../../instance/flow-manager'

interface NodeDecorationHeaderProps extends ComponentProps<'div'> {
  icon?: string
  title?: string
}
export const NodeDecorationHeader = memo((props: NodeDecorationHeaderProps) => {
  const { className, icon, title, ...rest } = props
  const [isEditing, setIsEditing] = useState(false)
  const nodeId = useNodeId()
  return (
    <header className={cn('w-full flex items-center gap-2 overflow-auto', className)} {...rest}>
      <Avatar className="size-6 rounded-sm">
        <AvatarImage src={icon} />
        <AvatarFallback>{title?.slice(0, 2)}</AvatarFallback>
      </Avatar>
      {isEditing
        ? (
            <Input
              autoFocus={true}
              onBlur={(e) => {
                setIsEditing(false)
                FlowManager.updateNodeName(nodeId, e.target.value)
              }}
              defaultValue={title}
              placeholder="请输入名称"
              className="nodrag p-1 shadow-none border-none focus-visible:ring-0 "
            />
          )
        : (
            <div
              onDoubleClick={() => setIsEditing(true)}
              className="flex-1 min-w-0 h-9 text-sm p-1 flex items-center"
            >
              <span className="truncate">{title}</span>
            </div>
          )}
    </header>
  )
})
