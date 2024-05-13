import React from "react";
import "./header.css";

const Header = () => {
	return (
		<div className="header-root">
			<div className="header-title"><p>Handwriting recognition</p></div>
				<div className="header-btns">
					<button className="btn upload-btn">Upload</button>
					<button className="btn convert-btn">Convert</button>
				</div>
		</div>
	);
}

export default Header;