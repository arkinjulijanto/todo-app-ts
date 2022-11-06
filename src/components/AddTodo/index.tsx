import * as React from "react";
import { MdAdd } from "react-icons/md";
import { useAppDispatch } from "../../store/hooks";
import { addTodo } from "../../store/slices/todo";

const AddTodo = () => {
  const dispatch = useAppDispatch();
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [form, setForm] = React.useState({ title: "", description: "" });

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleValueTextAreaChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddClick = () => {
    dispatch(addTodo(form));
    setForm({ title: "", description: "" });
    setIsExpanded(false);
  };

  const expand = () => {
    setIsExpanded(true);
  };

  return (
    <div className="container p-4 sm:p-0 w-full md:max-w-md mx-auto mt-4">
      <div className="relative">
        {isExpanded && (
          <input
            className="w-full border-0 p-4 text-lg outline-none transition-all ease-in delay-300 font-bold"
            type="text"
            placeholder="Title"
            value={form.title}
            name="title"
            onChange={handleValueChange}
          />
        )}
        <textarea
          className={`${
            isExpanded ? "rounded-b-lg" : "rounded-lg"
          } w-full border-0 p-4 outline-none resize-none`}
          name="description"
          placeholder="Take a note..."
          onClick={expand}
          value={form.description}
          rows={isExpanded ? 3 : 1}
          onChange={handleValueTextAreaChange}
        />
        <button
          onClick={handleAddClick}
          className="absolute bg-gray-300 -bottom-5 -right-3 p-3 w-30 h-30 rounded-full hover:bg-gray-400"
        >
          <MdAdd />
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
