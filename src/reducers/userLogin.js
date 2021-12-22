const initialState = { userName: "", isLoggedIn: false };

export const userLogin = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { userName: action.userName, isLoggedIn: true };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};
