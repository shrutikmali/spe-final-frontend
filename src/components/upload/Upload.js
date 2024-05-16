import React from "react";
import "./upload.css";

const Upload = ({ imageURL, handleUpload, saveImage, setSaveImage }) => {

  const handleDragEnter = (e) => {
    e.stopPropagation();
    e.preventDefault();
  }
  
  const handleDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  }

  const handleDrop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const dt = e.dataTransfer;
    const files = dt.files;
    let obj = {
      target: {
        files: files
      }
    }
    handleUpload(obj);
  }

  const toggleSaveImage = (e) => {
    setSaveImage(!saveImage);
  }

  return (
    <div className="upload-root" onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDrop={handleDrop} >
      <div className="upload-hint-div">
        {!imageURL && <p className="upload-hint">Click on the Upload button to upload an image, or drag the file into this box</p>}
        {imageURL && <img alt="Uploaded file" src={imageURL} className="image-preview" />}
      </div>
      <div className="upload-consent">
        <input checked={saveImage} id="consent-checkbox" type="checkbox" onChange={toggleSaveImage} />
        <label htmlFor="consent-checkbox" >Allow us to store your image for improving our model</label>
      </div>
    </div>
  );
}

export default Upload;