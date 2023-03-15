import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setThemesArr } from "../../features/ThemesArr";
import { setTheme } from "../../features/Theme";

require("./ThemeModal.css");

const ThemeModal = (props) => {
	const [lightest, setLightest] = useState("");
	const [light, setLight] = useState("");
	const [medium, setMedium] = useState("");
	const [mediumDark, setMediumDark] = useState("");
	const [dark, setDark] = useState("");
	const [err, setErr] = useState("");

	const dispatch = useDispatch();

	const themes = useSelector((state) => state.themesArr.value);

	const addTheme = () => {
		const hexCodeRegex = /^#[0-9A-F]{6}$/i;

		if (
			!hexCodeRegex.test(lightest) ||
			!hexCodeRegex.test(light) ||
			!hexCodeRegex.test(medium) ||
			!hexCodeRegex.test(mediumDark) ||
			!hexCodeRegex.test(dark)
		) {
			setErr("Please enter valid hex codes");
		} else {
			const theme = {
				lightest: lightest,
				light: light,
				medium: medium,
				mediumDark: mediumDark,
				dark: dark,
			};

			props.setShowModal(false);

			dispatch(setThemesArr(theme));
			dispatch(setTheme(theme));
		}
	};

	return (
		<div className="modal">
			<div>
				<label htmlFor="lightest-color">Very light:</label>
				<input
					type="text"
					name="lightest-color"
					placeholder="#EEEEEE"
					onChange={(e) => setLightest(e.target.value)}
				/>
			</div>

			<div>
				<label htmlFor="light-color">Light:</label>
				<input
					type="text"
					name="light-color"
					placeholder="#EEEEEE"
					onChange={(e) => setLight(e.target.value)}
				/>
			</div>

			<div>
				<label htmlFor="medium-color">Medium:</label>
				<input
					type="text"
					name="medium-color"
					placeholder="#EEEEEE"
					onChange={(e) => setMedium(e.target.value)}
				/>
			</div>

			<div>
				<label htmlFor="medium-color">Medium dark:</label>
				<input
					type="text"
					name="medium-color"
					placeholder="#EEEEEE"
					onChange={(e) => setMediumDark(e.target.value)}
				/>
			</div>

			<div>
				<label htmlFor="dark-color">Dark:</label>
				<input
					type="text"
					name="dark-color"
					placeholder="#EEEEEE"
					onChange={(e) => setDark(e.target.value)}
				/>
			</div>

			{err && <p className="err">{err}</p>}

			<button onClick={() => addTheme()} className="add-btn">
				Add theme
			</button>
		</div>
	);
};

export default ThemeModal;
