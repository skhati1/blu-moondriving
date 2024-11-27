import Banner from "../components/Banner";

export default function Services() {
	return (
		<>
			<Banner title="We offer a wide range of services to our new and existing Maryland drivers!" background="2"/>
			<section id="wrapper">
				<section id="one" className="wrapper spotlight style1">
					<div className="inner">
						<div className="content">
							<h2 className="major">Basic Course (30 Hour classNameroom & 6 Hour Behind-The-Wheel Lesson)</h2>
							<p>This course
								Meets the Minimum Educational Requirements as mandated by Motor Vehicle
								Administration of Maryland for a new Driver to obtain the provisional license
								plus 2 Additional hours of driving practice to gain defensive driving skills to
								strengthen the Learner’s Confidence.</p>
						</div>
					</div>
				</section>
				<section id="two" className="wrapper alt spotlight style2">
					<div className="inner">
						<div className="content">
							<h2 className="major">Advanced Course (30 Hour classNameroom & 8 Hour Behind-The-Wheel Lesson)</h2>
							<p>This course
								Meets the Minimum Educational Requirements as mandated by Motor Vehicle
								Administration of Maryland for a new Driver to obtain the provisional license
								plus 2 Additional hours of driving practice to gain defensive driving skills to
								strengthen the Learner’s Confidence.</p>
						</div>
					</div>
				</section>

				<section id="three" className="wrapper spotlight style3">
					<div className="inner">
						<div className="content">
							<h2 className="major">Premium Course (30 Hour classNameroom & 10 Hour Behind-The-Wheel Lesson)</h2>
							<p>This course
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
						<div className="content">
							<h2 className="major">Refresher Course (Practice Hours Only)</h2>
							<p>Haven’t driven in a while? Our
								refresher course will help you regain driving confidence, update your skills, and
								keep you safe on today’s roads.</p>
						</div>
					</div>
				</section>
			</section>
		</>
	)
}