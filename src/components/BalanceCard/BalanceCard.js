require("./BalanceCard.css");

const BalanceCard = () => {
	return (
		<section className="balance-card">
			<div className="acct-num">
				<h1 className="small mb-helper">Main account</h1>
				<p className="card-num bold">5634 0982 3925 0192</p>
			</div>

			<div className="funds">
				<p className="small mb-helper">Available funds</p>
				<p className="total-balance extra-bold">
					<span>$</span>23,019.02
				</p>
			</div>

			<div className="btns">
				<button className="btn dark-btn">Transfer money</button>
				<button className="btn light-btn">Link accounts</button>
			</div>
		</section>
	);
};

export default BalanceCard;
