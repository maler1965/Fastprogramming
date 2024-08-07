import React from "react";
import ReactDOM from "react-dom/client";
//import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

//import store from "./store/index.js";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
