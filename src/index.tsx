import React from "react";
import ReactDOM from "react-dom";

import Home from "./app/views/Home.view";
import ContextProvider from "./app/utils/context";
import reportWebVitals from "./reportWebVitals";

import "./index.scss";

const target = document.getElementById("draw");

if (target) {
  ReactDOM.render(
    <React.StrictMode>
      <ContextProvider>
        <Home />
      </ContextProvider>
    </React.StrictMode>,
    target
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
