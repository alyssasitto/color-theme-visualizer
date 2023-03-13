require("./Transaction.css");

const Transaction = ({ transaction }) => {
	return (
		<div className="transaction">
			<div>
				<p className="date">{transaction.date}</p>
				<p>{transaction.business}</p>
			</div>
			<div>
				<p>{transaction.transactionType}</p>
				<p>{transaction.businessType}</p>
				<p className="extra-bold transaction-amount">
					{transaction.transaction}
				</p>
			</div>
		</div>
	);
};

export default Transaction;
