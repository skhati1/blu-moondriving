import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"
import './menu.css'
import './header.css'

export default function Header() {
	const [isPopUpMenuVisible, setIsPopUpMenuVisible] = useState(false)

	const showMenu = () => {
		setIsPopUpMenuVisible(true)
	}

	const toggleMenu = () => {
		setIsPopUpMenuVisible(!isPopUpMenuVisible)
	}

	const hideMenu = () => {
		setIsPopUpMenuVisible(false)
	}

	const getLinks = (isMobile: boolean): React.ReactNode => {
		const items: { link: string, name: string }[] =
			[
				{ link: "/", name: "Home" },
				{ link: "/about", name: "About Us" },
				{ link: "/services", name: "Services" },
				{ link: "/resources", name: "Resources" },
				{ link: "/faq", name: "FAQ" },
				{ link: "/admin", name: "Admin" },
				{ link: "/contact", name: "Contact" },
			]

			return (
				<>
					{items.map(({ link, name }) => {
						return (
							<>
								<NavLink
									to={link}
									onClick={hideMenu}>{name}
								</NavLink>
								{isMobile ? <br /> : <></>}
							</>
						)
					})}
				</>
		)
	}

	return (
		<>
			<header id="header">
				<span className="headerSpan">
					<img src={logo} alt="Blu-Moon Driving Logo" className="logoHeaderImage" />
					<a href="/" className="logoName poppins-medium">Blu-Moon Driving School</a>
					<br />
				</span>
				<nav className="desktopMenu">
					{getLinks(false)}
				</nav>
				<nav className="mobileMenu">
					<a href="#" className="small" onClick={toggleMenu}>
						<span className="icon solid fa-bars"></span>
					</a>
				</nav>

				{isPopUpMenuVisible ?
					<div className="modal">
						<div className="modal-content" onClick={hideMenu}>
							<div>
								{getLinks(true)}
							</div>
							<button className="small closebutton" onClick={hideMenu}>Close</button>
						</div>
					</div>
					: <></>}

			</header>
		</>
	)
}