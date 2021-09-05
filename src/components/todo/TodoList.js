import { useContext } from "react";

import { TodoContext } from "../../contexts/TodoContext";
import TodoDetail from "./TodoDetail";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  console.log(todos);
  return (
    <ul>
      {todos.map((todo) => (
        <TodoDetail todo={todo} key={todo.id}></TodoDetail>
      ))}
    </ul>
  );
};

export default TodoList;
