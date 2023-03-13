require("./BankCard.css");

const BankCard = ({ card }) => {
	return (
		<div className={"bank-card " + card.shorthand}>
			<div className="fb-helper">
				<div>
					<h3>{card.name}</h3>
					<p>{card.cardNumber}</p>
				</div>
				<img src={card.img} />
			</div>
			<div className="fb-helper">
				<p className="balance bold">{card.balance}</p>
				<img className="ellipsis" src="images/ellipsis.svg" />
			</div>
		</div>
	);
};

export default BankCard;
