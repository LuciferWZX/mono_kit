import { Background, BackgroundVariant } from '@xyflow/react'

export function BackgroundView() {
  return <Background bgColor="var(--background)" color="var(--border)" variant={BackgroundVariant.Dots} />
}
