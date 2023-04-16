import { Link } from "react-router-dom";

require("./Header.css");

const Header = () => {
	return (
		<header className="padding-helper">
			<div>
				<h1>Find the perfect color scheme for you</h1>
				<p>
					With our no-cost platform, you have the ability to discover and
					experiment with the ideal color scheme that perfectly suits your
					website.
				</p>

				<Link to="/tester" className="test-theme-btn">
					Test color scheme
				</Link>
			</div>

			<img src="images/header-img.jpeg" />
		</header>
	);
};

export default Header;
