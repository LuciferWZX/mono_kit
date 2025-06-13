import type { OptionType } from '@mono-kit/ui/types'
import { InputField } from '@mono-kit/ui/int-ui'
import { ChevronDown } from 'lucide-react'
import { useRef } from 'react'

interface ComboBoxProps {
  // 可以添加props定义
}

// 生成20条options数据，包含分组
const mockOptions: OptionType[] = [
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

export function ComboBox(_props: ComboBoxProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <InputField
      ref={inputRef}
      value={inputValue}
      onChange={handleInputChange}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      onKeyDown={handleKeyDown}
      classes={{ input: 'py-[0.3125rem] px-2 w-30' }}
      className="p-0"
      actions={(
        <span
          className="inline-flex border-l p-[0.3125rem] text-grey7 dark:grey10 cursor-pointer"
          onMouseDown={handleActionsMouseDown}
        >
          <ChevronDown size={16} />
        </span>
      )}
    />
  )
}
