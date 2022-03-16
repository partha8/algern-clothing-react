import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { makeServer } from "./server";
import { StateProvider } from "./context/StateProvider";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
