import { useState, createContext } from "react";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Read book", is_completed: false },
    { id: 2, title: "Buy milk", is_completed: true },
  ]);
  return (
    <TodoContext.Provider value={{ todos }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
