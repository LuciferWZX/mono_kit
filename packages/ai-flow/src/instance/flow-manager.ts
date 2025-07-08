import type { Node, XYPosition } from '@xyflow/react'
import type { BaseNodeType } from '../types'
import { nanoid } from '@mono-kit/lib/utils/nanoid'
import { match } from '@mono-kit/lib/utils/ts-pattern'
import { NodeEnumType } from '../types'

export class FlowManager {
  static generateNode = (baseNode: BaseNodeType, position: XYPosition): Node | null => {
    return match(baseNode).with({ type: NodeEnumType.LLM }, (llmNode) => {
      const { formData, type, ...rest } = llmNode
      return {
        id: nanoid(8),
        position,
        type,
        data: {
          ...rest,
          formData,
        },
      }
    }).otherwise(() => {
      console.warn('unsupported node type', baseNode)
      return null
    })
  }
}
