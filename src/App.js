import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Upload from "./components/upload/Upload";
import Conversion from "./components/conversion/Conversion";

const App = () => {

  const SERVER_ADDRESS = "http://handwriting-recogniser-service.com";

  const [file, setFile] = useState(null);
	const [imageURL, setImageURL] = useState(null);
  const [text, setText] = useState("The text in image will appear here");
  const [saveImage, setSaveImage] = useState(false);

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

	const handleUpload = (e) => {
    if(e.target.files.length === 0) {
      return;
    }
		const file = e.target.files[0];
    if(!file.type.includes("image/")) {
      alert("Only image files are allowed");
      return;
    }
		const url = URL.createObjectURL(file);
		setFile(file);
		setImageURL(url);
	}

  const getText = async () => {
    if(file === null) {
      alert("Please upload a file");
      return;
    }
    const img64 = await toBase64(file);
    const body = {
      img: img64,
      saveImage,
    };
    
    await fetch(`${SERVER_ADDRESS}/recognise`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => setText(data.text))
    .catch(err => alert("Error in decoding"));
  }

  return (
    <div className="root">
      <div className="header">
        <Header handleUpload={handleUpload}  getText={getText} />
      </div>
      <div className="body">
        <div className="app-upload"><Upload imageURL={imageURL} handleUpload={handleUpload} saveImage={saveImage} setSaveImage={setSaveImage} /></div>
        <div className="app-convert"><Conversion text={text} /></div>
      </div>
    </div>
  );
}

export default App;