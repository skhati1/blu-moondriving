import AnimatedPage from "../components/AnimatedPage";
import Contact from "../components/Contact/Contact";
import Content from "../components/layout/Content/Content";

export default function ContactUs(){
    return (
        <AnimatedPage>
            <Content>
                <h1 className="major">Contact Us</h1>
                <span>We would love to hear from you. Please use the form or contact information below to reach out to us!</span>
                <Contact />
            </Content>
        </AnimatedPage>
    )
}