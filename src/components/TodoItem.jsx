import { useTodo } from '../contexts/TodoContext';
import { useState } from 'react';

const TodoItem = ({ todoObj }) => {
  const {
    toggleComplete,
    deleteTodo,
    updateTodo,
    addSubtask,
    toggleSubtask,
  } = useTodo();
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(todoObj.todo);
  const [newSubtask, setNewSubtask] = useState('');

  const handleUpdate = () => {
    updateTodo(todoObj.id, newText);
    setEditing(false);
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4 w-full">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={todoObj.completed}
            onChange={() => toggleComplete(todoObj.id)}
          />
          {editing ? (
            <input
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              onBlur={handleUpdate}
              onKeyDown={(e) => e.key === 'Enter' && handleUpdate()}
              className="border border-gray-300 rounded px-2"
            />
          ) : (
            <span
              className={`text-lg font-medium ${
                todoObj.completed ? 'line-through text-gray-500' : ''
              }`}
              onDoubleClick={() => setEditing(true)}
            >
              {todoObj.todo}
            </span>
          )}
        </div>
        <button
          className="text-red-600 hover:text-red-800"
          onClick={() => deleteTodo(todoObj.id)}
        >
          Delete
        </button>
      </div>

      {todoObj.dueDate && (
        <p className="text-sm text-gray-500 mb-2">
          Due: {new Date(todoObj.dueDate).toLocaleDateString()}
        </p>
      )}

      <div className="pl-6 space-y-1">
        {todoObj.subtasks.map((sub) => (
          <div key={sub.id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={sub.completed}
              onChange={() => toggleSubtask(todoObj.id, sub.id)}
            />
            <span
              className={`${
                sub.completed ? 'line-through text-gray-400' : ''
              }`}
            >
              {sub.title}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-2 flex gap-2">
        <input
          className="border px-2 py-1 rounded w-full"
          value={newSubtask}
          onChange={(e) => setNewSubtask(e.target.value)}
          placeholder="Add subtask"
        />
        <button
          className="px-3 py-1 bg-green-500 text-white rounded"
          onClick={() => {
            addSubtask(todoObj.id, newSubtask);
            setNewSubtask('');
          }}
        >
          ➕
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
