require("./BudgetCard.css");

const BudgetCard = () => {
	return (
		<section className="budget-card">
			<h2>Create a budget</h2>
			<p className="mb-helper">
				Manage your spending with a smart monthly budget.
			</p>

			<div className="data-bars">
				<span className="bar bar-1"></span>
				<span className="bar bar-2"></span>
				<span className="bar bar-3"></span>
				<span className="bar bar-4"></span>
			</div>

			<div>
				<p className="recommended">Recommended budget</p>
				<p className="bold">$1,028</p>
			</div>

			<button className="btn dark-btn">Start budgeting</button>
		</section>
	);
};

export default BudgetCard;
