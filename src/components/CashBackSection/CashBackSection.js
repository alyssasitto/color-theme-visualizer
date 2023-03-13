import CashBackCard from "../CashBackCard/CashBackCard";
import cashBackData from "../../data/cashBackData";

require("./CashBackSection.css");

const CashBackSection = () => {
	return (
		<section className="cash-back-section">
			{cashBackData.map((el) => {
				return <CashBackCard business={el} />;
			})}
		</section>
	);
};

export default CashBackSection;
