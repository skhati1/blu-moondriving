import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
import './contact.css'

function Contact() {

	const { register, formState: { errors }, handleSubmit } = useForm();

	const [isEnabled, setIsEnabled] = useState(true)
	const [sendText, setSendText] = useState("Send Message")

	const form = useRef(null);

	const sendEmail = () => {
		setSendText("Sending");

		if (form.current == null) {
			console.log("Bad form - canceling send")
			return;
		}

		emailjs.sendForm('service_2ir4frr', 'template_y0mve7t', form.current, 'WAE7NVW3Q3SHB4U-h')
			.then((result) => {
				console.log(result.text);
				setSendText("Sent!")
				setIsEnabled(false);
			}, (error) => {
				console.log(error.text);
				setSendText("Failed to Send!")
				setIsEnabled(false);
			});
	};
	return (
		<>
			<section id="footer">
				<div className="inner">
					<form ref={form} onSubmit={handleSubmit(sendEmail)}>
						<div className="fields">
							<div className="field">
								<label htmlFor="name">First Name</label>
								<input type="text" id="firstName" {...register("firstName", { required: true, maxLength: 20 })} aria-invalid={errors.firstName ? "true" : "false"} />
								{errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}
							</div>
							<div className="field">
								<label htmlFor="name">Last Name</label>
								<input type="text" id="lastName"  {...register("lastName", { required: true, maxLength: 20 })} aria-invalid={errors.lastName ? "true" : "false"} />
								{errors.lastName?.type === 'required' && <p role="alert">Last name is required</p>}
							</div>
							<div className="field">
								<label htmlFor="email">Email</label>
								<input type="email" id="email" {...register("email", { required: true })} aria-invalid={errors.email ? "true" : "false"} />
								{errors.email?.type === 'required' && <p role="alert">Email is required</p>}
							</div>
							<div className="field">
								<label htmlFor="phone">Phone</label>
								<input type="tel" id="phone" />
							</div>
							<div className="field">
								<label htmlFor="message">Message</label>
								<textarea id="message" rows={4} {...register("message", { required: true })} aria-invalid={errors.message ? "true" : "false"} ></textarea>
								{errors.message?.type === 'required' && <p role="alert">Message is required</p>}
							</div>
						</div>
						<ul className="actions">
							<li><input type="submit" value={sendText} disabled={!isEnabled} /></li>
						</ul>
					</form>
					<ul className="contact">
						<a target="_blank" href="https://www.google.com/maps/dir//8950+Old+Annapolis+Rd+%23115,+Columbia,+MD+21045/@39.2276379,-76.8228984,16z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89b7e0010101722b:0x40f6cc566b32910d!2m2!1d-76.8228984!2d39.2276379!3e0?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"><li className="icon solid fa-home">
							Blu-Moon Driving School<br />
							8950 Old Annapolis Road #115<br />
							Columbia, MD 21045
						</li>
						</a>
						<li className="icon solid fa-phone"><a href="tel://14432760761/">(443) 276-0761</a></li>
						<li className="icon solid fa-envelope"><a href="mailto:blumoondriving@gmail.com">blumoondriving@gmail.com</a></li>
						<li className="icon brands fa-facebook-f"><a href="#">facebook.com/blumoondriving</a></li>
					</ul>
				</div>
			</section>
		</>
	)
}

export default Contact