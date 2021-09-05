export const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Math.random(),
          title: action.book.title,
          is_completed: false,
        },
      ];
    case "TODO_COMPLETE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};
