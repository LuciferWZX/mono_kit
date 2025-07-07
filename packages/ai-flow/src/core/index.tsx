import { cn } from '@mono-kit/ui/lib/utils'
import { ReactFlow, ReactFlowProvider } from '@xyflow/react'
import { useAIFlowStore } from '../store/useAIFlowStore'
import { BackgroundView } from './config-view/BackgroundView'
import { ControlsView } from './config-view/ControlsView'
import { FlowHeader } from './flow-header'
import { VariablePanel } from './variable-view/VariablePanel'
import '@xyflow/react/dist/style.css'
import '@mono-kit/ui/styles/globals.css'
import './index.css'

interface AIFlowProps {
  className?: string
  classes?: {
    header?: string
    container?: string
  }
  theme?: 'light' | 'dark'
}
function AIFlow(props: AIFlowProps) {
  const { className, theme, classes } = props
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useAIFlowStore()

  return (

    <ReactFlowProvider>
      <div className={cn('flex flex-col size-full', className)}>
        <FlowHeader className={classes?.header} />
        <ReactFlow
          className={cn('flex-1', classes?.container)}
          colorMode={theme}
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <BackgroundView />
          <ControlsView />
          <VariablePanel />
        </ReactFlow>
      </div>
    </ReactFlowProvider>

  )
}
export default AIFlow
