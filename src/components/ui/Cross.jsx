export default function Cross(stroke, multiplier) {
	return (
		<svg
			width="15.36vmin"
			height="15.36vmin"
			viewBox="0 0 93 94"
			fill="none"
			style={{ transform: `scale(${multiplier})` }}
			xmlns="http://www.w3.org/2000/svg"
		>
			<line
				y1="-7.5"
				x2="115.465"
				y2="-7.5"
				transform="matrix(0.702297 -0.711884 0.694246 0.719738 11.3077 93.3107)"
				stroke={stroke}
				strokeWidth="15"
			/>
			<line
				y1="-7.5"
				x2="114.83"
				y2="-7.5"
				transform="matrix(0.698281 0.715823 -0.698283 0.715822 3.90002 11.1128)"
				stroke={stroke}
				strokeWidth="15"
			/>
		</svg>
	);
}
