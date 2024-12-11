import Banner from "../components/Banner/Banner";
import ImageOne from "../assets/home/07.jpg";
import ImageTwo from "../assets/home/02.jpg";
import ImageThree from "../assets/home/03.jpg";
import ImageFour from "../assets/home/04.jpg";

export default function Services() {
	return (
		<>
        <Banner />
			<section id="wrapper">
				<section id="one" className="wrapper spotlight style1">
					<div className="inner">
					<a className="image"><img src={ImageOne} alt="driving image 1"></img></a>
						<div className="content">
							<h2 className="major">Basic Course</h2>
							<p><em>30 Hour classroom & 6 Hour Behind-The-Wheel Lesson</em><br />This course
								Meets the Minimum Educational Requirements as mandated by Motor Vehicle
								Administration of Maryland for a new Driver to obtain the provisional license
								plus 2 Additional hours of driving practice to gain defensive driving skills to
								strengthen the Learner’s Confidence.</p>
						</div>
					</div>
				</section>
				<section id="two" className="wrapper alt spotlight style2">
					<div className="inner">
					<a className="image"><img src={ImageTwo} alt="driving image 1"></img></a>
						<div className="content">
							<h2 className="major">Advanced Course </h2>
							<p><em>30 Hour classroom & 8 Hour Behind-The-Wheel Lesson</em><br/>This course
								Meets the Minimum Educational Requirements as mandated by Motor Vehicle
								Administration of Maryland for a new Driver to obtain the provisional license
								plus 2 Additional hours of driving practice to gain defensive driving skills to
								strengthen the Learner’s Confidence.</p>
						</div>
					</div>
				</section>

				<section id="three" className="wrapper spotlight style3">
					<div className="inner">
					<a className="image"><img src={ImageThree} alt="driving image 1"></img></a>
						<div className="content">
							<h2 className="major">Premium Course </h2>
							<p><em>30 Hour classroom & 10 Hour Behind-The-Wheel Lesson</em><br/>This course
								Meets the Minimum Educational Requirements as mandated by Motor Vehicle
								Administration of Maryland for a new Driver to obtain the provisional license
								plus 4 Extra hours of driving practice to gain defensive driving skills to
								strengthen the Learner’s Confidence. And more, it helps a learner to develop
								safe driving habits in different types of road conditions, including residential,
								urban, rural and even highway traffic.</p>
						</div>
					</div>
				</section>

				<section id="three" className="wrapper alt spotlight style2">
					<div className="inner">
					<a className="image"><img src={ImageFour} alt="driving image 1"></img></a>
						<div className="content">
							<h2 className="major">Refresher Course</h2>
							<p><em>Practice Hours Only</em><br />Haven’t driven in a while? Our
								refresher course will help you regain driving confidence, update your skills, and
								keep you safe on today’s roads.</p>
						</div>
					</div>
				</section>
			</section>
		</>
	)
}