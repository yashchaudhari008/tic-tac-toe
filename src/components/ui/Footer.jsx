import React, { useState } from "react";
import screenfull from "screenfull";
import "./Footer.css";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";

const isInStandaloneMode = () =>
	(window.matchMedia('(display-mode: standalone)').matches)
	|| (window.navigator.standalone)
	|| document.referrer.includes('android-app://');

export default function Footer() {
	const [isFullscreen, setFullscreen] = useState(screenfull.isFullscreen);
	const handleFullscreen = () => {
		setFullscreen((old) => !old);
		screenfull.toggle();
	};
	return (
		<>
			{!isInStandaloneMode() && (
				<div className="quickSettings">
					{screenfull.isEnabled &&
						(!isFullscreen ? (
							<MdFullscreen onClick={handleFullscreen} />
						) : (
							<MdFullscreenExit onClick={handleFullscreen} />
						))}
				</div>
			)}
			<div id="footer">
				Made with ❤️ by Yash Chaudhari |{" "}
				<a href="https://github.com/yashchaudhari008/tic-tac-toe">Github</a>
			</div>
		</>
	);
}
