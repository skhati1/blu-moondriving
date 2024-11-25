import { NavLink } from "react-router-dom";

export default function Header() {
	return (
		<>
			<header id="header" className="">
				<h1><a href="/">Blu-Moon Driving School</a></h1>
				<nav>
					<a href="#menu">Menu</a>
				</nav>

				<nav id="menu">
					<div className="inner">
						<h2>Menu</h2>
						<ul className="links">
							<li><NavLink to="/">Home</NavLink></li>
							<li><NavLink to="/services">Services</NavLink></li>
							<li><NavLink to="/resources">Resources</NavLink></li>
							<li><NavLink to="/faq">FAQ</NavLink></li>
							<li><NavLink to="#">Admin</NavLink></li>
						</ul>
						<a href="#" className="close">Close</a>
					</div>
				</nav>
			</header>

		</>
	)
}