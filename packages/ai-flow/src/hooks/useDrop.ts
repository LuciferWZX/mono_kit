import type { BaseNodeType } from '../types'
import { useReactFlow } from '@xyflow/react'
import { useCallback } from 'react'
import { FlowManager } from '../instance/flow-manager'
import { useAIFlowStore } from '../store/useAIFlowStore'

export function useDrop() {
  const { screenToFlowPosition } = useReactFlow()
  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const data = event.dataTransfer.getData('application/reactflow')
    try {
      const node = JSON.parse(data) as BaseNodeType
      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      })
      console.warn('position', position)
      const newNode = FlowManager.generateNode(node, position)
      if (newNode) {
        useAIFlowStore.setState(state => ({
          nodes: [...state.nodes, newNode],
        }))
      }
      console.warn('node', node)
    }
    catch (error) {
      console.error('[drag-parse-node-error]', error)
    }
  }, [screenToFlowPosition])
  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }, [])
  return {
    handleDrop,
    handleDragOver,
  }
}
