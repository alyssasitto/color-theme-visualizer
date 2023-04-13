import { useEffect, useMemo, useState } from "react";

import colors from "../../data/colors";

import { v4 as uuidv4 } from "uuid";

require("./Colors.css");

const Colors = () => {
	const [alertArr, setAlertArr] = useState([]);

	function isHexcodeLight(color) {
		const hex = color.replace("#", "");
		const c_r = parseInt(hex.substring(0, 0 + 2), 16);
		const c_g = parseInt(hex.substring(2, 2 + 2), 16);
		const c_b = parseInt(hex.substring(4, 4 + 2), 16);
		const brightness = (c_r * 299 + c_g * 587 + c_b * 114) / 1000;
		return brightness > 155;
	}

	const handleClick = (color) => {
		navigator.clipboard.writeText(color);

		const alert = "Copied to clipboard";

		setAlertArr((current) => [alert, ...current]);

		console.log("THIS IS THE ALERT ARRAY", alertArr);
	};

	useEffect(() => {
		if (alertArr.length > 0) {
			setTimeout(() => {
				setAlertArr((current) => current.slice(1));
			}, 3000);
		}
	}, [alertArr]);

	console.log("THIS IS THE ALERT ARRAY", alertArr);

	const colorsDiv = useMemo(
		() => (
			<div className="themes">
				{colors.map((el) => {
					return (
						<div key={uuidv4()} className="theme">
							{el.map((color) => {
								const result = isHexcodeLight(color);

								return (
									<div
										key={uuidv4()}
										onClick={() => handleClick(color)}
										className={`single-color ${result ? "light" : "dark"}`}
										style={{ backgroundColor: color }}
									>
										<span>{color}</span>
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		),
		[]
	);

	return (
		<div className="themes-container padding-helper">
			<h1>Striking Color Palettes</h1>
			<p>
				Browse through our diverse collection of color palettes and select the
				one that perfectly fits your website!
			</p>

			{colorsDiv}

			<div className="alerts">
				{alertArr.length > 0 &&
					alertArr.map((el) => {
						return <p>{el}</p>;
					})}
			</div>
		</div>
	);
};

export default Colors;
