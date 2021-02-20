import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import thunk from "redux-thunk";
import { BrowserRouter, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

// ///////////////////////////

/////////////INITIALIZE REDUCER///////////
let storeInit = {
  planets: null,
  check: false,
};
///////////Reducer////////////

let reducer = (state = storeInit, action) => {
  if (action.type === "ADD_PLANETS") {
    // console.log(action.data);
    let newState = { ...state };
    newState.planets = [...action.data];
    newState.check = !newState.check;
    state = { ...newState };
    return state;
  }
  if (action.type === "ADD_FAV") {
    // console.log(action.id);
    let newState = { ...state };
    let index = newState.planets.findIndex(val => {
      return val.id === action.id;
    });
    // console.log(index);
    newState.planets[index].isFavourite = !newState.planets[index].isFavourite;
    state.planets[index] = { ...newState.planets[index] };
    // console.log(state);
    return state;
  }
};

////////////////Create Store//////////
let store = createStore(reducer, applyMiddleware(thunk));
////////////////////

let app = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
ReactDOM.render(
  <React.StrictMode>{app}</React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
