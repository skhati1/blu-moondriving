import Content from "../components/layout/Content/Content";
//import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import ServicesPreview from "../components/ServicesPreview/ServicesPreview";
import Features, { FeaturesPropItem } from "../components/Features/Features";
import { NavLink } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage";

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
					<ServicesPreview />
					<br />
				</Content>
				<Content>
					<h2 className="major">Why Blu-Moon?</h2>
					<Features items={aboutUsFeatures} />
				</Content>
				<Content>


					<p style={{ textAlign: "center" }}>Ready to start your journey to becoming a confident driver? Join Blu-Moon Driving
						School today and let us help you achieve the freedom that comes with driving!
						<br /><br />
						<button className="primary"><NavLink to="/register">Register</NavLink></button>
					</p>
				</Content>
			</section>
		</AnimatedPage>
	)
}