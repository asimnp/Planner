import { useContext, useState } from "react";
import { TodoContext } from "../../contexts/TodoContext";

const TodoForm = () => {
  const { dispatch } = useContext(TodoContext);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", todo: { title } });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add todo"
        value={title}
        required
        autoFocus
      />
      <input type="submit" value="Add Todo" />
    </form>
  );
};

export default TodoForm;
