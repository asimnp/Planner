const TodoDetail = ({ todo }) => {
  return (
    <>
      {todo.is_completed ? (
        ""
      ) : (
        <li>
          <div>{todo.title}</div>
        </li>
      )}
    </>
  );
};

export default TodoDetail;
