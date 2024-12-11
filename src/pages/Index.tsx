import Banner from "../components/Banner/Banner";
import Content from "../components/layout/Content";
import Contact from "../components/Contact/Contact"

export default function Index() {
	return (
		<>
			<section id="wrapper">
				<Banner title="" background="1" pageName="Home" />
				<Content>
					<p>Welcome to <strong>Blu-Moon Driving School</strong> where your journey to safe and confident
						driving begins!</p>
					<p>We are dedicated to empowering new drivers with the skills, confidence, and
						knowledge they need to be safe and responsible on the road. At Blu-Moon, we believe
						that driving is more than just a skill—it’s a commitment to safety, awareness, and
						respect for others.
						Our experienced and certified instructors provide personalized training designed to
						meet each student&#39;s unique needs and pace. Whether you&#39;re a beginner, a refresher,
						or someone preparing for a driving test, as we strictly follow the Drivers Ed curriculum
						by MVA Maryland, our Learner focused teaching covers essential skills in a structured
						and supportive way. From mastering the basics to navigating complex road situations,
						we’re here to guide you every step of the way.
					</p>
					<h3 className="major">Why Choose Blu-Moon Driving School?</h3>
					<ul>
						<li><b><i>Experienced &amp; Dedicated Instructor(s)</i></b>: Our team is trained to provide patient,
							clear, and thorough instruction for drivers at any experience level.</li>
						<li><b><i>Flexible Scheduling</i></b>: We understand that everyone has a busy schedule. That’s
							why we offer convenient lesson times to fit your lifestyle.</li>
						<li><b><i>Modern Techniques</i></b>: We stay updated on the latest driving techniques and best
							practices, ensuring that you learn what’s most relevant and effective.</li>
						<li><b><i>Focus on Safety</i></b>: At Blu-Moon, safety is our top priority. We not only prepare
							you for your test but also help you become a defensive and responsible driver
							for life.</li>
					</ul>
					<p>Ready to start your journey to becoming a confident driver? Join Blu-Moon Driving
						School today and let us help you achieve the freedom that comes with driving!</p>

					<Contact />
				</Content>
			</section>
		</>
	)
}