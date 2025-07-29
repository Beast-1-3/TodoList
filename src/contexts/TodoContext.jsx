import { createContext, useContext, useState } from 'react';

export const TodoContext = createContext();

export const useTodo = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo, dueDate) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        todo,
        completed: false,
        dueDate,
        subtasks: [],
      },
    ]);
  };

  const updateTodo = (id, newTodo) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, todo: newTodo } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addSubtask = (todoId, subtaskTitle) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === todoId
          ? {
              ...todo,
              subtasks: [
                ...todo.subtasks,
                {
                  id: Date.now(),
                  title: subtaskTitle,
                  completed: false,
                },
              ],
            }
          : todo
      )
    );
  };

  const toggleSubtask = (todoId, subtaskId) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === todoId
          ? {
              ...todo,
              subtasks: todo.subtasks.map((subtask) =>
                subtask.id === subtaskId
                  ? { ...subtask, completed: !subtask.completed }
                  : subtask
              ),
            }
          : todo
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleComplete,
        addSubtask,
        toggleSubtask,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
