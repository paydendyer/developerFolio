import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./containers/Main";

function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from V2</h1>
      </header>
    </div>
  );
}

export default App;