import Content from "../components/layout/Content/Content";
import logo from "../assets/logo.png"
import '../assets/about-us.css'
import AnimatedPage from "../components/AnimatedPage";

export default function AboutUs() {
    return (
        <AnimatedPage>
            <Content>
                <h1 className="major">About Us</h1>
                <div className="aboutContainer">
                    <p className="aboutText">We are dedicated to empowering new drivers with the skills, confidence, and
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
                    <img src={logo} alt="Blu-Moon Driving School Logo" className="logoImage" />
                </div>
            </Content>
        </AnimatedPage>
    )
}