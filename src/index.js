import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

// Action creators
const setValue = payload => ({
  type: "SET_VALUE",
  payload
});

//Reducer
const reducer = (state = 0, action) => {
  if (action.type === "SET_VALUE") {
    return action.payload;
  }
  return state;
};

const store = createStore(reducer);

function App(props) {
  console.log(props);
  return (
    <div>
      <div className="App">Hi there!</div>
    </div>
  );
}

App = connect(state => ({ ...state }))(App);

function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
