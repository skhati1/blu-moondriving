import ImageOne from "../assets/home/07.jpg";
import ImageTwo from "../assets/home/02.jpg";
import ImageThree from "../assets/home/03.jpg";
import ImageFour from "../assets/home/04.jpg";
import Content from "../components/layout/Content/Content";
import AnimatedPage from "../components/AnimatedPage";
import { 
    BASIC_PACKAGE_PRICE,
    ADVANCE_PACKAGE_PRICE,
    PREMIUM_PACKAGE_PRICE,
    REFRESHER_PACKAGE_PRICE,
	BASIC_ENROLLMENT,
	ADVANCE_ENROLLMENT,
	PREMIUM_ENROLLMENT,
	REFRESHER_ENROLLMENT
} from "../assets/links"

export default function Services() {
	const features = [
		{
			id: "one",
			classes: "wrapper spotlight style1",
			image: ImageOne,
			imageAlt: "driving image 1",
			title: "Basic Course",
			subtitle: "30 Hour classroom & 6 Hour Behind-The-Wheel Lesson",
			description: "This course meets the Minimum Educational Requirements as mandated by Motor Vehicle Administration of Maryland for a new Driver to obtain the provisional license.",
			linkUrl: BASIC_ENROLLMENT,
			price: BASIC_PACKAGE_PRICE
		},
		{
			id: "two",
			classes: "wrapper alt spotlight style2",
			image: ImageTwo,
			imageAlt: "driving image 2",
			title: "Advanced Course",
			subtitle: "30 Hour classroom & 8 Hour Behind-The-Wheel Lesson",
			description: "This course Meets the Minimum Educational Requirements as mandated by Motor Vehicle Administration of Maryland for a new Driver to obtain the provisional license plus 2 Additional hours of driving practice to gain defensive driving skills to strengthen the Learner’s confidence.",
			linkUrl: ADVANCE_ENROLLMENT,
			price: ADVANCE_PACKAGE_PRICE
		},
		{
			id: "three",
			classes: "wrapper spotlight style3",
			image: ImageThree,
			imageAlt: "driving image 3",
			title: "Premium Course",
			subtitle: "30 Hour classroom & 10 Hour Behind-The-Wheel Lesson",
			description: "This course Meets the Minimum Educational Requirements as mandated by Motor Vehicle Administration of Maryland for a new Driver to obtain the provisional license plus 4 Extra hours of driving practice to gain defensive driving skills to strengthen the Learner’s Confidence. And more, it helps a learner to develop safe driving habits in different types of road conditions, including residential, urban, rural and even highway traffic.",
			linkUrl: PREMIUM_ENROLLMENT,
			price: PREMIUM_PACKAGE_PRICE
		},
		{
			id: "three",
			classes: "wrapper alt spotlight style2",
			image: ImageFour,
			imageAlt: "driving image 4",
			title: "Refresher Course",
			subtitle: "Practice Hours Only",
			description: "Haven’t driven in a while? Our refresher course will help you regain driving confidence, update your skills, and keep you safe on today’s roads.",
			linkUrl: REFRESHER_ENROLLMENT,
			price: REFRESHER_PACKAGE_PRICE
		}
	]
	return (
		<AnimatedPage>
			<Content>
				<h1 className="major">Services</h1>
			</Content>
			<section>
				{features.map((item) => {
					return (
						<section key={item.title} id={item.title} className={item.classes}>
							<div className="inner">
								<a className="image"><img src={item.image} alt={item.imageAlt}></img></a>
								<div className="content">
									<h2 className="major">{item.title}</h2>
									<p><em>{item.subtitle}</em><br />
										{item.description}
									</p>
									Price <span className="price">${item.price}</span><br /><br />
									<a href={item.linkUrl} target="_blank" className="special">Register Now</a>
									<br />
								</div>
							</div>
						</section>
					)
				})}
			</section>
			<br /><br /><br />
		</AnimatedPage>
	)
}