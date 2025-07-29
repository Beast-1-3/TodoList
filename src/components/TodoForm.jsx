import { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TodoForm = () => {
  const [todo, setTodo] = useState('');
  const [dueDate, setDueDate] = useState(null);
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === '') return;

    addTodo(todo, dueDate);
    setTodo('');
    setDueDate(null);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-4 mb-6">
      <input
        type="text"
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter a todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <div className="relative w-full md:w-auto">
        <DatePicker
          selected={dueDate}
          onChange={(date) => setDueDate(date)}
          placeholderText="dd/mm/yyyy"
          className="w-full text-black px-2 py-2 border border-gray-400 rounded-md"
          calendarClassName="!absolute z-50"
        />
      </div>

      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
