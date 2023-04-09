import Purpose from "../Purpose/Purpose";

import purposeData from "../../data/purposeData";

require("./PurposeSection.css");

const PurposeSection = () => {
	return (
		<div className="purpose-container padding-helper">
			<h2>Why should you care about the colors in your website?</h2>
			<div className="purpose-section">
				{purposeData.map((el) => {
					return <Purpose purpose={el} key={el.title} />;
				})}
			</div>
		</div>
	);
};

export default PurposeSection;
