import { useState } from "react";
import { useSelector } from "react-redux";

require("./HexCodes.css");

const HexCodes = () => {
	const theme = useSelector((state) => state.theme.value);

	const [alert, setAlert] = useState("");

	const copyColor = (color) => {
		navigator.clipboard.writeText(color);

		setAlert("Copied to clipboard!");

		setTimeout(function () {
			setAlert("");
		}, 1000);
	};

	return (
		<div className="hex-container">
			<div className="colors">
				<button onClick={() => copyColor(theme.lightest)}>
					<img src="images/clipboard.svg" />
					<p>{theme.lightest}</p>
				</button>
				<button onClick={() => copyColor(theme.light)}>
					<img src="images/clipboard.svg" />
					<p>{theme.light}</p>
				</button>
				<button onClick={() => copyColor(theme.medium)}>
					<img src="images/clipboard.svg" />
					<p>{theme.medium}</p>
				</button>
				<button onClick={() => copyColor(theme.mediumDark)}>
					<img src="images/clipboard.svg" />
					<p>{theme.mediumDark}</p>
				</button>
				<button onClick={() => copyColor(theme.dark)}>
					<img src="images/clipboard.svg" />
					<p>{theme.dark}</p>
				</button>
			</div>

			{alert && <p className="alert">{alert}</p>}
		</div>
	);
};

export default HexCodes;
