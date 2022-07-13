import React from "react";
import "./Header.css";
import { AiFillSetting } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Modal from "./Modal";
import Button from "./Button";

export default function Header({ gameState, setGameState }) {
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
					<MdClose
						onClick={
							gameState === 0
								? () => window.history.back()
								: () => setGameState(0)
						}
					/>
				</div>
			</div>
			<Modal
				isModalOpen={isSettingsMenuOpen}
				closeModal={closeSettingsMenu}
				heading={"Settings"}
			>
				<div>
					<Button
						buttonText={"Cancel"}
						onClickHandler={closeSettingsMenu}
						smallBtn={true}
					/>
					<Button
						buttonText={"Save"}
						onClickHandler={saveSetttings}
						smallBtn={true}
					/>
				</div>
			</Modal>
		</>
	);
}
