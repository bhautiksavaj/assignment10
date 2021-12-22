export const addTask = (text, day, reminder, userName) => ({
  type: "ADD_TASK",
  id: Math.floor(Math.random() * 10000) + 1,
  text,
  day,
  reminder,
  userName
});

export const toggleTask = (id) => ({
  type: "TOGGLE_TASK",
  id
});
export const deleteTask = (id) => ({
  type: "DELETE_TASK",
  id
});
export const login = (userName) => ({
  type: "LOGIN",
  userName
});

export const logout = () => ({
  type: "LOGIN"
});
