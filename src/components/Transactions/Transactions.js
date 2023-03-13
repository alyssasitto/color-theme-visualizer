import Transaction from "../Transaction/Transaction";

import transactionData from "../../data/transactionData";

require("./Transactions.css");

const Transactions = () => {
	return (
		<section className="transactions">
			<h2>Latest Transactions</h2>
			{transactionData.map((el) => {
				return <Transaction transaction={el} />;
			})}
		</section>
	);
};

export default Transactions;
