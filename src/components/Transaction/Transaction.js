require("./Transaction.css");

const Transaction = ({ transaction }) => {
	return (
		<div className="transaction">
			<div>
				<p className="date">{transaction.date}</p>
				<p className="bold">{transaction.business}</p>
			</div>
			<div className="flex-helper">
				<p className="extra-bold transaction-amount">
					{transaction.transaction}
				</p>
				<p className="view-details">View details</p>
			</div>
		</div>
	);
};

export default Transaction;
