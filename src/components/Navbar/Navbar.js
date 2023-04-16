import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

require("./Navbar.css");

const Navbar = () => {
	const [navActive, setNavActive] = useState(false);

	if (navActive) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "visible";
	}

	const openNav = () => {
		setNavActive(true);
	};

	const closeNav = () => {
		setNavActive(false);
	};

	return (
		<nav className="main-nav padding-helper">
			<Link to="/">
				<img
					src="images/palette.png"
					className="palette-icon"
					alt="Paint palette icon"
				/>
			</Link>

			<div className="nav-btns">
				{navActive ? (
					<button onClick={closeNav}>
						<img src="images/exit.svg" className="nav-btn" alt="Exit icon" />
					</button>
				) : (
					<button onClick={openNav}>
						<img src="images/menu.svg" className="nav-btn" alt="Menu icon" />
					</button>
				)}
			</div>

			<ul className={navActive ? "active" : ""}>
				<li onClick={closeNav}>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/colors" onClick={closeNav}>
						Colors
					</Link>
				</li>
				<li>
					<Link to="/tester" onClick={closeNav}>
						Tester
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
