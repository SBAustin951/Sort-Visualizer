import React from "react";
import Sort from "./Sort/Sort";
import Toolbar from "./Toolbar/Toolbar";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Toolbar />
      <Sort />
    </div>
  );
}

export default App;
