import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import TodoList from "./component/TodoList";
import { Button } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
