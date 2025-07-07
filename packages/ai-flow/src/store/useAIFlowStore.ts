import type { Edge, Node, OnConnect, OnEdgesChange, OnNodesChange } from '@xyflow/react'

import { addEdge, applyEdgeChanges, applyNodeChanges } from '@xyflow/react'

import { create } from 'zustand'

export interface AIFlowState {
  nodes: Node[]
  edges: Edge[]
  onNodesChange: OnNodesChange<Node>
  onEdgesChange: OnEdgesChange
  onConnect: OnConnect
  setNodes: (nodes: Node[]) => void
  setEdges: (edges: Edge[]) => void
}
// this is our useStore hook that we can use in our components to get parts of the store and call actions
export const useAIFlowStore = create<AIFlowState>((set, get) => ({
  nodes: [],
  edges: [],
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    })
  },
  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    })
  },
  onConnect: (connection) => {
    set({
      edges: addEdge(connection, get().edges),
    })
  },
  setNodes: (nodes) => {
    set({ nodes })
  },
  setEdges: (edges) => {
    set({ edges })
  },
}))
