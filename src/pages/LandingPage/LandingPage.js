import BalanceCard from "../../components/BalanceCard/BalanceCard";
import BudgetCard from "../../components/BudgetCard/BudgetCard";
import BankCards from "../../components/BankCards/BankCards";
import Transactions from "../../components/Transactions/Transactions";
import CashBackSection from "../../components/CashBackSection/CashBackSection";

require("./LandingPage.css");

const LandingPage = () => {
	return (
		<div>
			<div className="container mr-ml-helper">
				<BalanceCard />
				<CashBackSection />
			</div>
			<BankCards />
			<div className="container mr-ml-helper">
				<Transactions />
				<BudgetCard />
			</div>

			<footer>Built and Designed by Alyssa Sitto</footer>
		</div>
	);
};

export default LandingPage;
