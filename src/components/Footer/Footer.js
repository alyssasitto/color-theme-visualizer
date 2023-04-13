import { Link } from "react-router-dom";

require("./Footer.css");

const Footer = () => {
	return (
		<footer>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/colors">Colors</Link>
					</li>
					<li>
						<Link to="/tester">Tester</Link>
					</li>
				</ul>
			</nav>

			<small>Designed and Built by Alyssa Sitto</small>
		</footer>
	);
};

export default Footer;
