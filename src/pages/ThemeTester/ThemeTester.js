import AddTheme from "../../components/AddTheme/AddTheme";
import ThemeMenu from "../../components/ThemeMenu/ThemeMenu";
import HexCodes from "../../components/HexCodes/HexCodes";

import BalanceCard from "../../components/BalanceCard/BalanceCard";
import BudgetCard from "../../components/BudgetCard/BudgetCard";
import BankCards from "../../components/BankCards/BankCards";
import Transactions from "../../components/Transactions/Transactions";
import CashBackSection from "../../components/CashBackSection/CashBackSection";

require("./ThemeTester.css");

const ThemeTester = () => {
	return (
		<div className="tester">
			<AddTheme />

			<ThemeMenu />
			<HexCodes />

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

export default ThemeTester;
