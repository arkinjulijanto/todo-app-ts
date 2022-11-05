import * as React from "react";
import { MdAdd } from "react-icons/md";

const AddTodo = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const expand = () => {
    setIsExpanded(true);
  };

  return (
    <div className="container p-4 sm:p-0 w-full md:max-w-md mx-auto mt-4">
      <form className="relative">
        {isExpanded && (
          <input
            className="w-full border-0 p-4 text-lg outline-none transition-all ease-in delay-300 font-bold"
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
        <button className="absolute bg-gray-300 -bottom-5 -right-3 p-3 w-30 h-30 rounded-full hover:bg-gray-400">
            <MdAdd />
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
