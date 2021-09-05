import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";

const TodoDetail = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);
  return (
    <>
      {todo.is_completed ? (
        ""
      ) : (
        <li onClick={dispatch({ type: "TODO_COMPLETE", id: todo.id })}>
          <div>{todo.title}</div>
        </li>
      )}
    </>
  );
};

export default TodoDetail;
