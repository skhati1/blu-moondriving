import Banner from "../components/Banner/Banner";
import Content from "../components/layout/Content/Content";
//import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import ServicesPreview from "../components/ServicesPreview/ServicesPreview";

export default function Index() {
	return (
		<>
			<section id="wrapper">
			<Hero />
				<Content>
					<ServicesPreview />
				</Content>
			</section>
		</>
	)
}