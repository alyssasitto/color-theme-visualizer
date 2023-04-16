import ThemeOption from "../ThemeOption/ThemeOption";

import themeOptionData from "../../data/themeOptionData";

require("./ThemeOptions.css");

const ThemeOptions = () => {
	return (
		<div className="theme-options-container padding-helper">
			<h2>Don't know which theme to use?</h2>
			<p className="mb-helper themes-p">
				There are various themes available to choose from depending on the
				desired mood for your website. Here are a few commonly used ones.
			</p>
			<div className="theme-options">
				{themeOptionData.map((el) => {
					return <ThemeOption option={el} />;
				})}
			</div>
		</div>
	);
};

export default ThemeOptions;
