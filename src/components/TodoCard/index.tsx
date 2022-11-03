import * as React from "react";
import { MdDelete } from "react-icons/md";

const TodoCard = () => {
  return (
    <div className="relative p-4 bg-white rounded-lg border">
      <p className="text-xl font-bold text-clip">Title</p>
      <p className="text-sm text-clip">Description</p>
      <button className="absolute bg-gray-300 -bottom-5 -right-3 p-3 w-30 h-30 rounded-full">
        <MdDelete />
      </button>
    </div>
  );
};

export default TodoCard;
