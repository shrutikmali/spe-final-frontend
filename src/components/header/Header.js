import React from "react";
import "./header.css";

const Header = ({ handleUpload, getText }) => {

	return (
		<div className="header-root">
			<div className="header-title"><p>Handwriting recognition</p></div>
				<div className="header-btns">
					<input id="file-upload" type="file" style={{display: "none"}} accept="image/*" onChange={handleUpload} max={1}/>
					<label htmlFor="file-upload" className="btn upload-btn">Upload</label>
					<button className="btn convert-btn" onClick={getText}>Convert</button>
				</div>
		</div>
	);
}

export default Header;