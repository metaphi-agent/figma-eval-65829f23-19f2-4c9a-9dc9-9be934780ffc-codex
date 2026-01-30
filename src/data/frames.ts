export type FrameSpec = {
  id: string
  name: string
  nodeId: string
  imagePath: string
}

export const frames: FrameSpec[] = [
  { id: 'bar-basic', name: 'Bar / Bar-Basic', nodeId: '809:4500', imagePath: './ground_truth/frames/bar-basic.png' },
  { id: 'bar-basic-1', name: 'Bar / Bar-Basic-1', nodeId: '817:126125', imagePath: './ground_truth/frames/bar-basic-1.png' },
  { id: 'verticalbar-basic', name: 'Bar / VerticalBar-Basic', nodeId: '809:171764', imagePath: './ground_truth/frames/verticalbar-basic.png' },
  { id: 'verticalbar-basic-1', name: 'Bar / VerticalBar-Basic-1', nodeId: '809:376319', imagePath: './ground_truth/frames/verticalbar-basic-1.png' },
  { id: 'bar-cylinder', name: 'Bar / Bar-Cylinder', nodeId: '809:54844', imagePath: './ground_truth/frames/bar-cylinder.png' },
  { id: 'bar-cube', name: 'Bar / Bar-Cube', nodeId: '809:129616', imagePath: './ground_truth/frames/bar-cube.png' },
  { id: 'defaultpalette', name: 'Bar / DefaultPalette', nodeId: '809:4793', imagePath: './ground_truth/frames/defaultpalette.png' },
  {
    id: '800freechartexample',
    name: 'Bar / 800FreeChartExample',
    nodeId: '809:4814',
    imagePath: './ground_truth/frames/800freechartexample.png',
  },
  {
    id: '800freechartexample-1',
    name: 'Bar / 800FreeChartExample-1',
    nodeId: '834:10229',
    imagePath: './ground_truth/frames/800freechartexample-1.png',
  },
  { id: 'line-bar-basic', name: 'Line / Bar-Basic', nodeId: '809:221300', imagePath: './ground_truth/frames/line-bar-basic.png' },
  {
    id: 'line-bar-basic-1',
    name: 'Line / Bar-Basic-1',
    nodeId: '817:144228',
    imagePath: './ground_truth/frames/line-bar-basic-1.png',
  },
  { id: 'barline-basic', name: 'Bar&Line / Bar-Basic', nodeId: '814:1448', imagePath: './ground_truth/frames/barline-basic.png' },
  {
    id: 'barline-basic-1',
    name: 'Bar&Line / Bar-Basic-1',
    nodeId: '817:168187',
    imagePath: './ground_truth/frames/barline-basic-1.png',
  },
  { id: 'pie', name: 'Pie / Pie', nodeId: '815:19966', imagePath: './ground_truth/frames/pie.png' },
  { id: 'pie-1', name: 'Pie / Pie-1', nodeId: '817:103804', imagePath: './ground_truth/frames/pie-1.png' },
  { id: 'radar', name: 'Radar / Pie', nodeId: '816:50836', imagePath: './ground_truth/frames/radar.png' },
  { id: 'radar-1', name: 'Radar / Pie-1', nodeId: '817:113432', imagePath: './ground_truth/frames/radar-1.png' },
  { id: 'scatter', name: 'Scatter / Pie', nodeId: '816:83507', imagePath: './ground_truth/frames/scatter.png' },
  { id: 'scatter-1', name: 'Scatter / Pie-1', nodeId: '817:122193', imagePath: './ground_truth/frames/scatter-1.png' },
  {
    id: 'example-427321190',
    name: 'Example / Frame 427321190',
    nodeId: '816:101517',
    imagePath: './ground_truth/frames/example-427321190.png',
  },
  {
    id: 'example-427321191',
    name: 'Example / Frame 427321191',
    nodeId: '817:165900',
    imagePath: './ground_truth/frames/example-427321191.png',
  },
]

export function getFrameById(id: string) {
  return frames.find((f) => f.id === id)
}

