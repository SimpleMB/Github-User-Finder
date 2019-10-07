import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT, CLEAR_ALERT } from "../types";

const AlertState = props => {
  const initialState = {
    alert: null
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (msg, type) => {
    msg === null
      ? dispatch({ type: CLEAR_ALERT })
      : dispatch({ type: SET_ALERT, payload: { msg, type } });
  };

  return (
    <AlertContext.Provider value={{ alert: state.alert, setAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
