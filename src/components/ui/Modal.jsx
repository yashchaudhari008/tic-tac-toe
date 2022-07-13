import React from "react";
import "./Modal.css";

export default function Modal({ isModalOpen, closeModal, heading, children }) {
	const modalContentRef = React.useRef();
	React.useEffect(() => {
		const handleClickOutside = (e) =>
			modalContentRef.current &&
			!modalContentRef.current.contains(e.target) &&
			closeModal();
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [closeModal]);
	return isModalOpen ? (
		<div className="modal">
			<div ref={modalContentRef} className="modal-content">
				<h1 className="heading">{heading}</h1>
				{children}
			</div>
		</div>
	) : null;
}
