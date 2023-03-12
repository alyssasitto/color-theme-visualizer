require("./ColorTheme.css");

const ColorTheme = ({ palette }) => {
	return (
		<div onClick={() => console.log(palette)} className="palette">
			<div style={{ backgroundColor: palette.lightest }}></div>
			<div style={{ backgroundColor: palette.light }}></div>
			<div style={{ backgroundColor: palette.medium }}></div>
			<div style={{ backgroundColor: palette.mediumDark }}></div>
			<div style={{ backgroundColor: palette.dark }}></div>
		</div>
	);
};

export default ColorTheme;
