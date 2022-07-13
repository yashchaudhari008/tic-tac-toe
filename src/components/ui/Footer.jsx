import React, { useState } from "react";
import screenfull from "screenfull";
import "./Footer.css";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";

export default function Footer() {
	const [isFullscreen, setFullscreen] = useState(screenfull.isFullscreen);
	const handleFullscreen = () => {
		setFullscreen((old) => !old);
		screenfull.toggle();
	};
	return (
		<>
			<div className="quickSettings">
				{screenfull.isEnabled &&
					(!isFullscreen ? (
						<MdFullscreen onClick={handleFullscreen} />
					) : (
						<MdFullscreenExit onClick={handleFullscreen} />
					))}
			</div>
			<div id="footer">
				Made with ❤️ by madOverGames |{" "}
				<a href="https://github.com/madOverGames/tic-tac-toe">Github</a>
			</div>
		</>
	);
}
