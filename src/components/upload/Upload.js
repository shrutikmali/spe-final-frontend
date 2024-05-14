import React from "react";
import "./upload.css";

const Upload = ({ imageURL, handleUpload }) => {

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

  return (
    <div className="upload-root" onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDrop={handleDrop} >
      <div className="upload-hint-div">
        {!imageURL && <p className="upload-hint">Click on the Upload button to upload an image, or drag the file into this box</p>}
        {imageURL && <img alt="Uploaded file" src={imageURL} className="image-preview" />}
      </div>
    </div>
  );
}

export default Upload;