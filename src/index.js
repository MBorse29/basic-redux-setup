import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { createStore, combineReducers } from "redux";
import { Provider, connect } from "react-redux";

// Action creators
const setValue = payload => ({
  type: "SET_VALUE",
  payload
});

//Reducer
const reducer = (state = 0, action) => {
  if (action.type === "SET_VALUE") {
    return parseInt(state, 10) + 10;
  }
  return state;
};

const store = createStore(combineReducers({ value: reducer }));

function App({ setValue, value }) {
  return (
    <div>
      <div>{value}</div>
      <br />
      <div className="App">Hi there!</div>
      <br />
      <button
        onClick={() => {
          setValue();
        }}
      >
        Click me
      </button>
    </div>
  );
}

App = connect(
  state => ({ ...state }),
  { setValue }
)(App);

function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
