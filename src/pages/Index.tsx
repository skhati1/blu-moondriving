import Content from "../components/layout/Content/Content";
//import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Features, { FeaturesPropItem } from "../components/Features/Features";
import AnimatedPage from "../components/AnimatedPage";
import ImageOne from "../assets/home/07.jpg";
import ImageTwo from "../assets/home/02.jpg";
import ImageThree from "../assets/home/03.jpg";
import ImageFour from "../assets/home/04.jpg";
import { 
    BASIC_PACKAGE_PRICE,
    ADVANCE_PACKAGE_PRICE,
    PREMIUM_PACKAGE_PRICE,
    REFRESHER_PACKAGE_PRICE,
	BASIC_ENROLLMENT,
	ADVANCE_ENROLLMENT,
	PREMIUM_ENROLLMENT,
	REFRESHER_ENROLLMENT,
	GENERIC_ENROLLMENT
} from "../assets/links"
import '../assets/servicespreview.css'

export default function Index() {

	const aboutUsFeatures: FeaturesPropItem[] =
		[{
			title: "Experienced & Dedicated Instructor(s)",
			description: "Our team is trained to provide patient, clear, and thorough instruction for drivers at any experience level.",
			image: null
		},
		{
			title: "Flexible Scheduling",
			description: "We understand that everyone has a busy schedule. That’s why we offer convenient lesson times to fit your lifestyle.",
			image: null
		},
		{
			title: "Modern Techniques",
			description: "We stay updated on the latest driving techniques and best practices, ensuring that you learn what’s most relevant and effective.",
			image: null
		},
		{
			title: "Focus on Safety",
			description: "At Blu-Moon, safety is our top priority. We not only prepare you for your test but also help you become a defensive and responsible driver for life.",
			image: null
		}]

	return (
		<AnimatedPage>
			<section id="wrapper">
				<Hero />
				<Content>
				<h2>Our Services</h2>
            <div className="servicesPreview">
                <div className="services-card">
                    <img src={ImageOne} alt="Basic Course" />
                    <div className="services-container">
                        <h3><b>Basic Course</b></h3>
                        <ul>
                            <li>30 Hour Classroom Session</li>
                            <li>6 Hour Behind The Wheel</li>
                        </ul><br />
                        Price <span className="price">${BASIC_PACKAGE_PRICE}</span><br /><br />
                        <a href={BASIC_ENROLLMENT} target="_blank" className="special">Register</a>
                    </div>
                </div>
                <div className="services-card">
                    <img src={ImageTwo} alt="Advance Course" />
                    <div className="services-container">
                        <h3><b>Advance Course</b></h3>
                        <ul>
                            <li>30 Hour Classroom Session</li>
                            <li>8 Hour Behind The Wheel</li>
                        </ul><br />
                        Price <span className="price">${ADVANCE_PACKAGE_PRICE}</span><br /><br />
                        <a href={ADVANCE_ENROLLMENT} target="_blank" className="special">Register</a>
                    </div>
                </div>
                <div className="services-card">
                    <img src={ImageThree} alt="Premium Course" />
                    <div className="services-container">
                        <h3><b>Premium Course</b></h3>
                        <ul>
                            <li>30 Hour Classroom Session</li>
                            <li>10 Hour Behind The Wheel</li>
                        </ul><br />
                        Price <span className="price">${PREMIUM_PACKAGE_PRICE}</span><br /><br />
                        <a href={PREMIUM_ENROLLMENT} target="_blank" className="special">Register</a>
                    </div>
                </div>
                <div className="services-card">
                    <img src={ImageFour} alt="Refresher Courses" />
                    <div className="services-container">
                        <h3><b>Refresher Course</b></h3>
                        <ul>
                            <li>Hourly In-Car Sessions Only</li>
                            <li>2, 4, 6, 8 or 10 Hours</li>
                        </ul><br />
                        Price <span className="price">${REFRESHER_PACKAGE_PRICE}</span> (each 2 hour session)<br /><br />
                        <a href={REFRESHER_ENROLLMENT} target="_blank" className="special">Register</a>
                    </div>
                </div>
            </div>
					<br />
				</Content>
				<Content>
					<h2 className="major">Why Blu-Moon?</h2>
					<Features items={aboutUsFeatures} />
				</Content>
				<Content>
					<p style={{ textAlign: "center" }}>Ready to start your journey to becoming a confident driver? Join Blu-Moon Driving
						School today and let us help you achieve the freedom that comes with driving!
						<br />
						<br />
						<button className="primary"><a href={GENERIC_ENROLLMENT}>Register</a></button>
					</p>
				</Content>
			</section>
		</AnimatedPage>
	)
}