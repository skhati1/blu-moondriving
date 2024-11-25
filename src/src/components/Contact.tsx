
function Contact() {
    return(
        <>
            <section id="footer">
						<div className="inner">
							<h2 className="major">Contact Us</h2>
							<p>Ready to start your journey to becoming a confident driver? Join Blu-Moon Driving
								School today and let us help you achieve the freedom that comes with driving!</p>
							<form method="post" action="#">
								<div className="fields">
									<div className="field">
										<label htmlFor="name">First Name</label>
										<input type="text" name="name" id="name" />
									</div>
									<div className="field">
										<label htmlFor="name">Last Name</label>
										<input type="text" name="name" id="name" />
									</div>
									<div className="field">
										<label htmlFor="email">Email</label>
										<input type="email" name="email" id="email" />
									</div>
									<div className="field">
										<label htmlFor="phone">Phone</label>
										<input type="tel" name="phone" id="phone" />
									</div>
									<div className="field">
										<label htmlFor="message">Message</label>
										<textarea name="message" id="message" rows={4}></textarea>
									</div>
								</div>
								<ul className="actions">
									<li><input type="submit" value="Send Message" /></li>
								</ul>
							</form>
							<ul className="contact">
								<a target="_blank" href="https://maps.app.goo.gl/AAdaxTL36GmRVzUn9"><li className="icon solid fa-home">
									Blu-Moon Driving School<br />
									8950 Old Annapolis Road #115<br />
									Columbia, MD 21045
								</li>
							</a>
								<li className="icon solid fa-phone">(443) 276-0761</li>
								<li className="icon solid fa-envelope"><a href="#">admin@blumoondriving.com</a></li>
								<li className="icon brands fa-facebook-f"><a href="#">facebook.com/untitled-tld</a></li>
							</ul>
							<ul className="copyright">
								<li>&copy; Blu-Moon Driving Inc. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
							</ul>
						</div>
					</section>
        </>
    )
}

export default Contact