import cardData from "../../data/cardData";
import BankCard from "../BankCard/BankCard";

require("./BankCards.css");

const BankCards = () => {
	console.log(cardData);
	return (
		<section className="bank-cards mr-ml-helper">
			{cardData.map((el) => {
				return <BankCard card={el} />;
			})}
		</section>
	);
};

export default BankCards;
