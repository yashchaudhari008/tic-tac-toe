import React from "react";
import "./Header.css";
import { AiFillSetting } from "react-icons/ai";
import { MdClose } from "react-icons/md";

export default function Header() {
	return (
		<>
			<div id="header">
				<div className="button">
					<AiFillSetting />
				</div>
				<div className="button">
					<MdClose onClick={() => window.history.back()} />
				</div>
			</div>
		</>
	);
}
