import { NavLink } from "react-router-dom";

export default function Header() {
	return (
		<>
			<header id="header" className="">
				<h1><a href="/">Blu-Moon Driving School</a></h1>

				<nav>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/services">Services</NavLink>
					<NavLink to="/resources">Resources</NavLink>
					<NavLink to="/faq">FAQ</NavLink>
				</nav>
				
			</header>

		</>
	)
}