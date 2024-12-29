import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"
import './menu.css'
import './header.css'

export default function Header() {
	const [isPopUpMenuVisible, setIsPopUpMenuVisible] = useState(false)

	const toggleMenu = () => {
		setIsPopUpMenuVisible(!isPopUpMenuVisible)
	}

	const hideMenu = () => {
		setIsPopUpMenuVisible(false)
	}

	const getLinks = (isMobile: boolean): React.ReactNode => {
		const items: { link: string, name: string, isExternalLink: boolean }[] =
			[
				{ link: "/", name: "Home", isExternalLink: false },
				{ link: "/about", name: "About Us", isExternalLink: false },
				{ link: "/services", name: "Services", isExternalLink: false },
				{ link: "/resources", name: "Resources", isExternalLink: false },
				{ link: "/faq", name: "FAQ", isExternalLink: false },
				{ link: "https://www.tdsm.app/CentralizeAdmin/Login/Login?encID=biWqhzALcig_EQUAL_", name: "Admin", isExternalLink: true },
				{ link: "/contact", name: "Contact", isExternalLink: false },
			]

		return (
			<>
				{items.map(({ link, name, isExternalLink }) => {
					if (!isExternalLink) return (
						<NavLink
							key={name}
							to={link}
							onClick={hideMenu}>{name}{isMobile ? <br /> : <></>}
						</NavLink>

					)
					return (
						<Link key={name} to={link} target="_blank" rel="noopener noreferrer">
							{name}{isMobile ? <br /> : <></>}
						</Link>
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
					<a href="/" className="logoName logoFont">Blu-Moon Driving School</a>
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