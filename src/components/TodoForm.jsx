import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TodoForm = () => {
  const { addTodo } = useTodo();
  const [todo, setTodo] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;
    const newTodo = {
      id: Date.now(),
      todo,
      completed: false,
      dueDate: dueDate ? dueDate.toISOString().split("T")[0] : null,
      priority,
    };
    addTodo(newTodo);
    setTodo("");
    setDueDate(null);
    setPriority("Medium");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow-md flex flex-col sm:flex-row items-center gap-4"
    >
      <input
        type="text"
        placeholder="Enter a todo..."
        className="flex-1 p-2 border border-gray-300 rounded w-full sm:w-auto"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <DatePicker
        selected={dueDate}
        onChange={(date) => setDueDate(date)}
        placeholderText="Due Date"
        className="p-2 border border-gray-300 rounded bg-white text-black w-full sm:w-auto"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="p-2 border border-gray-300 rounded bg-white text-black w-full sm:w-auto"
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
