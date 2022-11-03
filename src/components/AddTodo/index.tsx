import * as React from "react";
import { MdAdd } from "react-icons/md";

const AddTodo = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const expand = () => {
    setIsExpanded(true);
  };

  return (
    <div className="container p-4 sm:p-0 w-full mx-auto mt-4">
      <form className="relative">
        {isExpanded && (
          <input
            className="w-full border-0 p-4 outline-none transition-all ease-in delay-300"
            type="text"
            placeholder="Title"
          />
        )}
        <textarea
          className={`${isExpanded ? 'rounded-b-lg' : 'rounded-lg' } w-full border-0 p-4 outline-none resize-none`}
          name="content"
          placeholder="Take a note..."
          onClick={expand}
          rows={isExpanded ? 3 : 1}
        />
        <button className="absolute bg-gray-300 bottom-0 right-0 p-3 w-30 h-30 rounded-full">
            <MdAdd />
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
