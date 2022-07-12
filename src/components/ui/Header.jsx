import React from "react";
import "./Header.css";
import { AiFillSetting } from "react-icons/ai";
import { MdClose } from "react-icons/md";

export default function Header() {
	return (
		<>
			<div id="header">
				<div class="button">
					<AiFillSetting />
				</div>
				<div class="button">
					<MdClose onClick={() => window.history.back()} />
				</div>
			</div>
		</>
	);
}
