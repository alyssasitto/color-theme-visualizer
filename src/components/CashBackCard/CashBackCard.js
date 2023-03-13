require("./CashBackCard.css");

const CashBackCard = ({ business }) => {
	return (
		<div className="cash-back-card">
			<h3 className="business mb-helper">{business.business}</h3>
			<img src={business.img} />
			<p className="cash-back">{business.cashBack} Cash Back</p>
			<button>
				<img src="images/plus.svg" /> <p>Activate</p>
			</button>
		</div>
	);
};

export default CashBackCard;
