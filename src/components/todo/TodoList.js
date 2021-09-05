import { useContext } from "react";

import { TodoContext } from "../../contexts/TodoContext";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  console.log(todos);
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default TodoList;
