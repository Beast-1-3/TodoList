export const getLocalTodos = () => {
  const saved = localStorage.getItem("todos");
  return saved ? JSON.parse(saved) : [];
};

export const setLocalTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
