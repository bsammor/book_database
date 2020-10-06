import React, { createContext, useReducer } from "react";

const initialState = {
  loginToken: null,
  user: {
    name: "User",
    role: "guest",
  },
  loggedIn: false,
  books: [],
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "login":
        return {
          ...state,
          user: action.payload.user,
          loginToken: action.payload.token,
          loggedIn: true,
        };
      case "logout":
        return {
          ...state,
          loginToken: null,
          user: {
            name: "User",
            role: "guest",
          },
          loggedIn: false,
        };
      case "setBooks":
        var books = action.payload.books;
        return {
          books,
        };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
