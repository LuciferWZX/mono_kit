import { AIFlow } from '@mono-kit/ai-flow'
import { useTheme } from '@mono-kit/ui/components'

function WorkflowPage() {
  const { theme } = useTheme()
  console.warn('theme', theme)
  return (
    <div className="h-screen w-screen">
      <AIFlow theme={theme === 'system' ? 'light' : theme} />
    </div>
  )
}

export default WorkflowPage
