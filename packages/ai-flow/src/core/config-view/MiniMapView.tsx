import { MiniMap } from '@xyflow/react'

function MiniMapView() {
  return <MiniMap className="border rounded" zoomable={true} pannable={true} nodeStrokeWidth={3} />
}

export default MiniMapView
