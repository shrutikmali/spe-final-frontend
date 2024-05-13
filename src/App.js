import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Upload from "./components/upload/Upload";

const App = () => {
  return (
    <div className="root">
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <div className="app-upload"><Upload /></div>
        <div className="app-convert"></div>
      </div>
    </div>
  );
}

export default App;