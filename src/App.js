import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Upload from "./components/upload/Upload";
import Conversion from "./components/conversion/Conversion";

const App = () => {

  const [file, setFile] = useState(null);
	const [imageURL, setImageURL] = useState(null);

	const handleUpload = (e) => {
		const file = e.target.files[0];
    if(!file.type.includes("image/")) {
      alert("Only image files are allowed");
      return;
    }
		const url = URL.createObjectURL(file);
		setFile(file);
		setImageURL(url);
	}

  return (
    <div className="root">
      <div className="header">
        <Header imageURL={imageURL} handleUpload={handleUpload}/>
      </div>
      <div className="body">
        <div className="app-upload"><Upload imageURL={imageURL} handleUpload={handleUpload} /></div>
        <div className="app-convert"><Conversion /></div>
      </div>
    </div>
  );
}

export default App;