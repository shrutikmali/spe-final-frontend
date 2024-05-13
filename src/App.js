import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Upload from "./components/upload/Upload";
import Conversion from "./components/conversion/Conversion";

const App = () => {
  return (
    <div className="root">
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <div className="app-upload"><Upload /></div>
        <div className="app-convert"><Conversion /></div>
      </div>
    </div>
  );
}

export default App;