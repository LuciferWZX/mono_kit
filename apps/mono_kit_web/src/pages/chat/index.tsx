import { FolderCog, useTheme } from '@mono-kit/ui/components'
import { Banner, Button, ComboBox, InputField, SplitButton } from '@mono-kit/ui/int-ui'

// 生成20条options数据，包含分组
const _mockOptions = [
  {
    type: 'group',
    value: 'tier1',
    label: '一线城市',
    children: [
      { value: 'beijing', label: '北京' },
      { value: 'shanghai', label: '上海' },
      { value: 'guangzhou', label: '广州' },
      { value: 'shenzhen', label: '深圳' },
    ],
  },
  {
    type: 'group',
    value: 'tier2',
    label: '二线城市',
    children: [
      { value: 'hangzhou', label: '杭州' },
      { value: 'nanjing', label: '南京' },
      { value: 'wuhan', label: '武汉' },
      { value: 'chengdu', label: '成都' },
      { value: 'xian', label: '西安' },
      { value: 'tianjin', label: '天津' },
      { value: 'chongqing', label: '重庆' },
      { value: 'suzhou', label: '苏州' },
    ],
  },
  {
    type: 'group',
    value: 'tier3',
    label: '三线城市',
    children: [
      { value: 'qingdao', label: '青岛' },
      { value: 'dalian', label: '大连' },
      { value: 'ningbo', label: '宁波' },
      { value: 'xiamen', label: '厦门' },
      { value: 'fuzhou', label: '福州' },
      { value: 'jinan', label: '济南' },
      { value: 'hefei', label: '合肥' },
      { value: 'zhengzhou', label: '郑州' },
    ],
  },
]
function ChatPage() {
  const { toggleTheme } = useTheme()
  return (
    <div className="overflow-auto p-20 relative">
      <div className="bg-card rounded border-border border flex flex-col gap-2 p-6">
        <div className="flex items-center gap-2">
          <Banner />
        </div>
      </div>
      <div className="bg-card rounded border-border border p-6 mt-10">
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
          <InputField
            actions={
              [
                { key: 'file', icon: <FolderCog />, onClick: (event) => {
                  event.stopPropagation()
                  console.warn('点击了icon')
                } },
              ]
            }
          />
          <InputField placeholder="mniha" aria-invalid />
          <InputField value="Text" disabled={true} />
          <InputField placeholder="请输入" disabled={true} aria-invalid />
        </div>
      </div>
      <div className="bg-card rounded border-border border flex flex-col gap-2 p-6 mt-10">
        <div className="flex items-center gap-2">
          <ComboBox placeholder="你好" options={_mockOptions} />
        </div>
      </div>

    </div>
  )
}
export default ChatPage
