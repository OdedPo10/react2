import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import pointer from "./components/pointer";
import Buttons from "./components/buttons";
import Targil04 from "./components/targil04";
import Movies from "./components/movies";
import counter from "./components/counter";
import Counters from "./components/counters";
import ToDoList from "./components/toDoList";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToDoList/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
