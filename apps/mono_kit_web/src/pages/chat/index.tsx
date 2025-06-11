import { useTheme } from '@mono-kit/ui/components'
import { Button, InputField, SplitButton } from '@mono-kit/ui/int-ui'

function ChatPage() {
  const { toggleTheme } = useTheme()
  return (
    <div className="overflow-auto p-20 relative">
      <div className="bg-card rounded border-border border p-6">
        <Button className="absolute right-4 top-4" onClick={toggleTheme}>切换主题</Button>
        <Button>Button</Button>
        <Button className="mx-2" disabled={true}>disabled Button</Button>
        <Button className="mx-2" variant="primary" disabled={true}>disabled primary</Button>
        <Button className="mx-2" variant="primary">primary</Button>
        <div className="mt-10">
          <Button size="slim">Button</Button>
          <Button className="mx-2" size="slim" variant="primary">Button</Button>
        </div>
      </div>
      <div className="bg-card rounded border-border border flex flex-col gap-2 p-6 mt-10">
        <div className="flex gap-2">
          <SplitButton

            options={
              [
                { value: 'force_push', label: '强制推送' },
                { value: 'commit', label: '提交' },
                { type: 'divider' },
                {
                  type: 'group',
                  value: 'setting',
                  label: '设置',
                  children: [
                    { value: 'language', label: '多语言' },
                    { value: 'theme', label: '主题' },
                  ],
                },
              ]
            }
          >
            Button
          </SplitButton>
          <SplitButton disabled={true}>
            disabled Button
          </SplitButton>
        </div>
        <div className="flex gap-2">
          <SplitButton variant="primary">
            primary Button
          </SplitButton>
          <SplitButton variant="primary" disabled={true}>
            disabled primary Button
          </SplitButton>
        </div>
      </div>
      <div className="bg-card rounded border-border border flex flex-col gap-2 p-6 mt-10">
        <div className="flex items-center gap-2">
          <InputField />
          <InputField aria-invalid />
          <InputField value="Text" disabled={true} />
          <InputField placeholder="请输入" disabled={true} aria-invalid />
        </div>
      </div>
    </div>
  )
}
export default ChatPage
