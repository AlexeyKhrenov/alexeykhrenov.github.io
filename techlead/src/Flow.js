import { ReactFlow, Handle, Background, Panel } from '@xyflow/react';
 
import '@xyflow/react/dist/style.css';

function CustomNode({ data }) {
	if (data.isGreen){
		return (
			<div>Green</div>
		)
	}
  return (
    <div>
      <Handle type="target" position="top" />
      <div onClick={() => alert(`Node: ${data.label}`)}>{data.label}</div>
      <Handle type="source" position="bottom" />
	  {data.isGreen ?? <div>Green</div>}
    </div>
  );
}
 
const initialNodes = [
	{ id: '1', position: { x: 100, y: 100}, data: { label: "As techlead" } },
	{ id: '2', position: { x: 300, y: 200}, data: { label: "TECH" } },
	{ id: '3', position: { x: 300, y: 300}, data: { label: "PRODUCT" } },
	{ id: '4', position: { x: 300, y: 400}, data: { label: "PEOPLE" } },
	{ id: '5', position: { x: 300, y: 500}, data: { label: "PROCESSES" } },
];
const initialEdges = [
	{ id: 'e1-2', source: '1', target: '2' },
	{ id: 'e1-3', source: '1', target: '3' },
	{ id: 'e1-4', source: '1', target: '4' },
	{ id: 'e1-5', source: '1', target: '5' }
];
 
export default function Flow() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} nodeTypes={{custom : CustomNode}}>
	  <Panel position="top-left">top-left</Panel>
	  </ReactFlow>
    </div>
  );
}
