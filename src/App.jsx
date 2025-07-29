import { TodoProvider } from './contexts/TodoContext';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import { useTodo } from './contexts/TodoContext';
import './App.css';

const TodoList = () => {
  const { todos } = useTodo();

  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todoObj={todo} />
      ))}
    </div>
  );
};

function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">📋 Todo App</h1>
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
