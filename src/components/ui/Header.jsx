import React from "react";
import "./Header.css";
import { AiFillSetting } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Modal from "./Modal";
import Button from "./Button";

export default function Header() {
	const [isSettingsMenuOpen, setSettingsMenuOpen] = React.useState(false);
	const closeSettingsMenu = () => setSettingsMenuOpen(false);
	const saveSetttings = () => {
		//Save New Settings
		closeSettingsMenu();
	};
	return (
		<>
			<div id="header">
				<div className="button">
					<AiFillSetting onClick={() => setSettingsMenuOpen(true)} />
				</div>
				<div className="button">
					<MdClose onClick={() => window.history.back()} />
				</div>
			</div>
			<Modal
				isModalOpen={isSettingsMenuOpen}
				closeModal={closeSettingsMenu}
				heading={"Settings"}
			>
				<div>
					<Button buttonText={"Cancel"} onClickHandler={closeSettingsMenu} />
					<Button buttonText={"Save"} onClickHandler={saveSetttings} />
				</div>
			</Modal>
		</>
	);
}
