import React from "react";
import "./Header.css";
import { AiFillSetting } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Modal from "./Modal";
import Button from "./Button";

export default function Header() {
	const [settings, toggleSettings] = React.useState(false);
	return (
		<>
			<div id="header">
				<div className="button">
					<AiFillSetting onClick={() => toggleSettings(true)} />
				</div>
				<div className="button">
					<MdClose onClick={() => window.history.back()} />
				</div>
			</div>
			<Modal open={settings} toggle={toggleSettings}>
				<h1 style={{ textAlign: "center", fontSize: "3rem" }}>Settings</h1>
				<Button
					buttonText="cancel"
					onClickHandler={() => toggleSettings(false)}
				/>
			</Modal>
		</>
	);
}
