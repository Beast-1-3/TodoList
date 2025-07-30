// import React from "react";
import { useTodo } from "../contexts/TodoContext";
import PriorityTag from "./PriorityTag";

const TodoItem = ({ todo }) => {
  const { deleteTodo, toggleComplete } = useTodo();

  return (
    <div className="flex justify-between items-center bg-white shadow rounded px-4 py-2 mb-2">
      <div>
        <p
          className={`text-lg font-medium ${todo.completed ? "line-through text-gray-400" : "text-black"}`}
        >
          {todo.todo}
        </p>
        <div className="text-sm text-gray-500">
          {todo.dueDate && <span>📅 Due: {todo.dueDate}</span>} {" "}
          <PriorityTag priority={todo.priority} />
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => toggleComplete(todo.id)}
          className={`text-sm px-2 py-1 rounded font-semibold shadow ${todo.completed ? "bg-green-400 text-white" : "bg-gray-200 text-black"}`}
        >
          {todo.completed ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-sm px-2 py-1 rounded bg-red-500 text-white font-semibold shadow"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
