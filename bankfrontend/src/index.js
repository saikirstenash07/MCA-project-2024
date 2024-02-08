import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import App1 from "./App1";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
    {/* <App1/> */}
  </BrowserRouter>
);
