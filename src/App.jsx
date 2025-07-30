import React from "react";
import { TodoProvider } from "./contexts/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { useTodo } from "./contexts/TodoContext";

const TodoList = () => {
  const { todos } = useTodo();
  return (
    <div className="mt-6 w-full max-w-xl mx-auto">
      {todos.length > 0 ? (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <p className="text-center text-gray-500">No todos available</p>
      )}
    </div>
  );
};

const App = () => {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-6">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
          📝 My Todo List
        </h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;