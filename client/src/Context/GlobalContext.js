import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

// Initial state
const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
};

// Actions
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

// Create context
const GlobalContext = createContext();

// Context provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parsed = JSON.parse(data);
      dispatch({ type: "SET_USER", payload: parsed.user });
    }
  }, []);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook for consuming
export const useGlobalContext = () => useContext(GlobalContext);
