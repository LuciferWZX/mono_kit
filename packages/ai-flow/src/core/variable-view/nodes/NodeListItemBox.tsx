import type { NodeListItem } from '../../../store/useNodeStore'
import { Avatar, AvatarFallback, AvatarImage } from '@mono-kit/ui/base/avatar'
import { Tooltip, TooltipContent, TooltipTrigger } from '@mono-kit/ui/base/tooltip'
import { Info } from '@mono-kit/ui/icon/lucide'
import { useRef } from 'react'

interface NodeListItemProps {
  data: NodeListItem
}
export function NodeListItemBox(props: NodeListItemProps) {
  const { data } = props
  const dragRef = useRef<HTMLDivElement>(null)

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    // 设置拖拽数据
    event.dataTransfer.setData('application/reactflow', JSON.stringify(data.data))
    event.dataTransfer.effectAllowed = 'move'

    // 创建自定义拖动预览
    if (dragRef.current) {
      const dragImage = dragRef.current.cloneNode(true) as HTMLElement
      dragImage.style.position = 'absolute'
      dragImage.style.top = '-1000px'
      dragImage.style.left = '-1000px'
      dragImage.style.opacity = '0.8'
      dragImage.style.pointerEvents = 'none'
      dragImage.style.zIndex = '9999'

      // 确保拖动预览保持原有的样式
      dragImage.className = dragRef.current.className

      document.body.appendChild(dragImage)
      event.dataTransfer.setDragImage(dragImage, 0, 0)

      // 在拖动结束后移除预览元素
      setTimeout(() => {
        if (document.body.contains(dragImage)) {
          document.body.removeChild(dragImage)
        }
      }, 0)
    }
  }

  return (
    <div
      ref={dragRef}
      className="flex gap-1 p-2 border bg-card rounded-md select-none cursor-grab active:cursor-grabbing hover:bg-accent/50 transition-colors"
      draggable
      onDragStart={handleDragStart}
    >
      <Avatar className="size-6 rounded-sm">
        <AvatarImage src={data.data.icon} />
        <AvatarFallback>
          {data.data.name.charAt(0)}
        </AvatarFallback>
      </Avatar>
      <div className="flex gap-1 items-start">
        <label>{data.data.name}</label>
        <Tooltip>
          <TooltipTrigger>
            <Info size={14} />
          </TooltipTrigger>
          <TooltipContent>{data.data.description}</TooltipContent>
        </Tooltip>
      </div>
    </div>
  )
}
