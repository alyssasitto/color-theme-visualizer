import { Link } from "react-router-dom";

require("./CtaCard.css");

const CtaCard = () => {
	return (
		<section className="cta-card">
			<h2>
				Struggling to find the perfect color combination for your website?
			</h2>
			<p>
				Explore our wide range of color combinations that can help your website
				stand out from the rest.
			</p>

			<Link to="/colors">Find colors</Link>
		</section>
	);
};

export default CtaCard;
