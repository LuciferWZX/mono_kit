import type { Edge, IsValidConnection } from '@xyflow/react'
import { cn } from '@mono-kit/ui/lib/utils'
import { ReactFlow, ReactFlowProvider } from '@xyflow/react'
import { Line } from '../components'
import { useCore } from '../hooks/useCore'
import { useDrop } from '../hooks/useDrop'
import { useAIFlowStore } from '../store/useAIFlowStore'
import { BackgroundView } from './config-view/BackgroundView'
import { ControlsView } from './config-view/ControlsView'
import MiniMapView from './config-view/MiniMapView'
import { FlowHeader } from './flow-header'
import { NODE_EDGES, NODE_TYPES } from './nodes'
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
  const { handleDrop, handleDragOver } = useDrop()
  const { isValidConnection } = useCore()
  return (
    <div className={cn('flex flex-col size-full', className)}>

      <FlowHeader className={classes?.header} />
      <div className="flex-1 relative">
        <VariablePanel />
        <ReactFlow
          nodeTypes={NODE_TYPES}
          edgeTypes={NODE_EDGES}
          onDrop={handleDrop}
          isValidConnection={isValidConnection as IsValidConnection<Edge>}
          defaultEdgeOptions={{
            type: 'turbo',
          }}
          onDragOver={handleDragOver}
          className={cn('', classes?.container)}
          colorMode={theme}
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          proOptions={{
            hideAttribution: true,
          }}
          fitViewOptions={{
            padding: 0.1,
            includeHiddenNodes: false,
            minZoom: 0.5,
            maxZoom: 1.5,
          }}
        >
          <Line />
          <BackgroundView />
          <ControlsView />
          <MiniMapView />
        </ReactFlow>
      </div>
    </div>

  )
}
function withProvider(Component: React.ComponentType<any>) {
  return (props: any) => {
    return (
      <ReactFlowProvider>
        <Component {...props} />
      </ReactFlowProvider>
    )
  }
}
export default withProvider(AIFlow)
