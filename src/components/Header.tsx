import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"

export default function Header() {
	const [isMenuVisible, setIsMenuVisible] = useState(false)

	const toggleMenu = () => {
		setIsMenuVisible(!isMenuVisible)
	}

	return (
		<>
			<header id="header" className="">
				<h1>
					<img src={logo} alt="Blu-Moon Driving Logo" width={80} height={80} />
					<a href="/" className="logoName poppins-medium">Blu-Moon Driving School</a>
					<br/>
				</h1>
				<nav>

					<div>
						<NavLink to="/" onClick={toggleMenu}>Home</NavLink>
						<NavLink to="/services" onClick={toggleMenu}>Services</NavLink>
						<NavLink to="/resources" onClick={toggleMenu}>Resources</NavLink>
						<NavLink to="/faq" onClick={toggleMenu}>FAQ</NavLink>
						<NavLink to="/admin" onClick={toggleMenu}>Login</NavLink>
						<NavLink to="/contact" onClick={toggleMenu}>Contact Us</NavLink>
					</div>
				</nav>
				{/* <nav>
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
				} */}
			</header>

		</>
	)
}