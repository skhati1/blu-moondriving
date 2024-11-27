import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
	const [isMenuVisible, setIsMenuVisible] = useState(false)

	const toggleMenu = () => {
		setIsMenuVisible(!isMenuVisible)
	}

	return (
		<>
			<header id="header" className="">
				<h1><a href="/">Blu-Moon Driving School</a></h1>
				<nav>
					<a href="#" className="small" onClick={toggleMenu}>Menu</a>
				</nav>
				{isMenuVisible ?
					<div className="modal">
						<div className="modal-content" onClick={toggleMenu}>
							<div>
								<NavLink to="/" onClick={toggleMenu}>Home</NavLink><br />
								<NavLink to="/services" onClick={toggleMenu}>Services</NavLink><br />
								<NavLink to="/resources" onClick={toggleMenu}>Resources</NavLink><br />
								<NavLink to="/faq" onClick={toggleMenu}>FAQ</NavLink>
							</div>
							<button className="small" onClick={toggleMenu}>Close</button>
						</div>
					</div>
					:
					''
				}
			</header>

		</>
	)
}