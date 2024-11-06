import { EditorNode } from "@/types/nodes";
import { Handle, Position } from "@xyflow/react";

const NodeBase = ({ data }: EditorNode) => {
  const { colour, bgColour, text, icon: Icon } = data;

  return (
    <>
      <div
        className="border-2 rounded-lg flex items-center justify-center bg-white w-60"
        style={{
          borderColor: colour,
        }}
      >
        <div
          className="p-2 border-r-2 rounded-l-lg flex"
          style={{
            backgroundColor: bgColour,
            borderColor: colour,
          }}
        >
          <Icon
            style={{
              color: colour,
            }}
            size={48}
          />
        </div>
        <h1 className="flex flex-1 font-bold text-lg pl-4">{text}</h1>
      </div>
      <Handle type="source" position={Position.Right} className="w-3 h-3" />
      <Handle type="target" position={Position.Left} className="w-3 h-3" />
    </>
  );
};

export default NodeBase;
