import { ScrollArea } from '@mono-kit/ui/base/scroll-area'
import { useNodeStore } from '../../../store/useNodeStore'
import { NodeListItemBox } from './NodeListItemBox'

export function NodesListContent() {
  const nodeList = useNodeStore(state => state.nodeList)

  return (
    <ScrollArea type="always" className="h-full px-2">
      <div className="h-[1900px]">
        <div className="grid grid-cols-2 gap-2">
          {nodeList.map(item => (
            <NodeListItemBox key={item.data.id} data={item} />
          ))}
        </div>
      </div>
    </ScrollArea>
  )
}
