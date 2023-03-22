import { useDispatch } from "react-redux";
import { setTheme } from "../../features/Theme";

require("./ColorTheme.css");

const ColorTheme = ({ palette, index, setThemeIndex }) => {
	const dispatch = useDispatch();
	return (
		<div
			onClick={() => {
				setThemeIndex(index);
				dispatch(setTheme(palette));
			}}
			className="palette"
		>
			<div style={{ backgroundColor: palette.lightest }}></div>
			<div style={{ backgroundColor: palette.light }}></div>
			<div style={{ backgroundColor: palette.medium }}></div>
			<div style={{ backgroundColor: palette.mediumDark }}></div>
			<div style={{ backgroundColor: palette.dark }}></div>
		</div>
	);
};

export default ColorTheme;
