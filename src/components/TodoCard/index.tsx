import * as React from "react";
import { MdDelete } from "react-icons/md";
import { useAppDispatch } from "../../store/hooks";
import { deleteTodo } from "../../store/slices/todo";
import { IProps } from "./index.types";

const TodoCard: React.FC<IProps> = (props) => {
  const { item, index } = props;
  const dispatch = useAppDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteTodo(index));
  };

  return (
    <div className="relative p-4 bg-white rounded-lg border">
      <p className="text-xl font-bold text-clip">{item.title}</p>
      <p className="text-sm text-clip">{item.description}</p>
      <button
        className="absolute bg-gray-300 -bottom-5 -right-3 p-3 w-30 h-30 rounded-full hover:bg-gray-400"
        onClick={handleDeleteClick}
      >
        <MdDelete color="#DC5664" />
      </button>
    </div>
  );
};

export default TodoCard;
