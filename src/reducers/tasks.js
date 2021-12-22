const tasks = (state = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          day: action.day,
          reminder: action.reminder,
        },
      ];
    case "TOGGLE_TASK":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, reminder: !todo.reminder } : todo
      );
    case "DELETE_TASK":
      return state.filter((todo) => todo.id !== action.id && todo);
    default:
      return state;
  }
};

export default tasks;
