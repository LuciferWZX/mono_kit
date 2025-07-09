import type { Connection, Node } from '@xyflow/react'
import { getOutgoers, useReactFlow } from '@xyflow/react'
import { useCallback } from 'react'

export function useCore() {
  const { getNodes, getEdges } = useReactFlow()
  const isValidConnection = useCallback(
    (connection: Connection) => {
      // we are using getNodes and getEdges helpers here
      // to make sure we create isValidConnection function only once
      const nodes = getNodes()
      const edges = getEdges()
      const target = nodes.find(node => node.id === connection.target)
      const hasCycle = (node: Node | undefined, visited = new Set()) => {
        if (!node || visited.has(node.id)) {
          return false
        }
        visited.add(node.id)

        for (const outgoer of getOutgoers(node, nodes, edges)) {
          if (outgoer.id === connection.source)
            return true
          if (hasCycle(outgoer, visited))
            return true
        }
      }

      if (target?.id === connection.source) {
        return false
      }
      return !hasCycle(target)
    },
    [getNodes, getEdges],
  )
  return {
    isValidConnection,
  }
}
