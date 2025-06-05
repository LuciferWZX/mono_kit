import { useTheme } from '@mono-kit/ui/components'
import { Button } from '@mono-kit/ui/int-ui'

function ChatPage() {
  const { toggleTheme } = useTheme()
  return (
    <div className="overflow-auto p-20 relative">
      <Button className="absolute right-4 top-4" onClick={toggleTheme}>切换主题</Button>
      <Button>Button</Button>
      <Button className="mx-2" disabled={true}>disabled Button</Button>
      <Button className="mx-2" variant="primary" disabled={true}>disabled primary</Button>
      <Button className="mx-2" variant="primary">primary</Button>
      <div className="mt-20">
        <Button size="slim">Button</Button>
        <Button className="mx-2" size="slim" variant="primary">Button</Button>
      </div>
    </div>
  )
}
export default ChatPage
