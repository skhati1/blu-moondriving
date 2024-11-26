import { NavLink } from "react-router-dom";

export default function Header() {
	return (
		<>
			<header id="header" className="">
				<h1><a href="/home">Blu-Moon Driving School</a></h1>

				<nav>
					<NavLink to="/home">Home</NavLink>
					<NavLink to="/services">Services</NavLink>
					<NavLink to="/resources">Resources</NavLink>
					<NavLink to="/faq">FAQ</NavLink>
					<NavLink to="/admin">Admin</NavLink>
				</nav>
				
			</header>

		</>
	)
}