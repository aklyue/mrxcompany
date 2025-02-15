import React from "react";
import Router from "./Router";
import "swiper/css";
import "./styles/main.scss";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
