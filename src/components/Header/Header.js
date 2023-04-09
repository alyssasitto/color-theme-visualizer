import { Link } from "react-router-dom";

require("./Header.css");

const Header = () => {
	return (
		<header className="padding-helper">
			<h1>Find the perfect theme for you</h1>
			<p>
				With our no-cost platform, you have the ability to discover and
				experiment with the ideal theme that perfectly suits your website.
			</p>

			<Link to="/tester" className="test-theme-btn">
				Test theme
			</Link>

			<img src="images/header-img.jpeg" />
		</header>
	);
};

export default Header;
