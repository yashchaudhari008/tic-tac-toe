import React from "react";
import "./Modal.css";
function useOutsideAlerter(ref) {}

export default function Modal({ open, toggle, children }) {
	const modalContentRef = React.useRef();
	React.useEffect(() => {
		const handleClickOutside = (e) =>
			modalContentRef.current &&
			!modalContentRef.current.contains(e.target) &&
			toggle(false);
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [modalContentRef]);
	return open ? (
		<div id="myModal" class="modal">
			<div ref={modalContentRef} class="modal-content">
				{children}
			</div>
		</div>
	) : null;
}
