const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          day: action.day,
          reminder: action.reminder
        }
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, reminder: !todo.reminder } : todo
      );
    default:
      return state;
  }
};

export default todos;
