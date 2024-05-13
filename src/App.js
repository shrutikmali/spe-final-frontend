import React from "react";
import "./App.css";
import Header from "./components/header/Header";

const App = () => {
  return (
    <div className="root">
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <div className="upload-root"></div>
        <div className="convert-root"></div>
      </div>
    </div>
  );
}

export default App;