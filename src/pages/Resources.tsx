import Content from "../components/layout/Content/Content";
import RookieDriverLog from "../assets/forms/Rookie Driver BTW Log.pdf"
import DriversManual from "../assets/forms/DriversManual.pdf"
import BluMoonPolicy from "../assets/forms/Blu-MoonPolicy.pdf"
import AnimatedPage from "../components/AnimatedPage";

export default function Resources() {
	return (
		<AnimatedPage>
			<Content>
				<h1 className="major">Resources</h1>
				<ul className="alt">
					<li>
						<a href="https://mva.maryland.gov/drivers/Pages/non-compliant-drivers-licenses.aspx"
							target="_blank">
							Licensing Procedure of Undocumented Immigrants
						</a>
					</li>

					<li>
						<a href="https://mymva.maryland.gov/TAP/IND/_/" target="_blank">
							How to Schedule Driver’s License Test in MD </a>
					</li>


					<li>
						<a href={DriversManual} target="_blank">
							Maryland Drivers’ Manual </a>
					</li>


					<li>
						<a href="https://mva.maryland.gov/Documents/prepare-for-noncom-driving-test.pdf" target="_blank">
							How to Prepare for Your Skills / “Behind‐the‐Wheel” Test for a
							Non‐commercial Class C Driver’s License in MD </a>
					</li>


					<li>
						<a href="https://mva.maryland.gov/Documents/RD-006.pdf" target="_blank">
							Rookie Driver - New Driver &amp; Coach Practice Guide </a>
					</li>


					<li>
						<a href="https://mva.maryland.gov/drivers/Pages/rookie-driver-tutorial-intro.aspx" target="_blank">
							Maryland Online Driver Test Tutorial </a>
					</li>


					<li>
						<a href="https://mva.maryland.gov/drivers/Pages/rookie-driver-licensing-system.aspx" target="_blank">
							Rookie Driver Graduated Licensing System in MD </a>
					</li>

					<li>
						<a href="https://www.desomd.com/RookieDriver/StudentWorkbookAnswerGuide.pdf" target="_blank">
							Student Workbook – Maryland Driver Education Curriculum </a>
					</li>

					<li>
						<a href="https://mva.maryland.gov/Documents/Parents-You-Hold-The-Keys-To-Your-Teens-Driving.pdf" target="_blank">
							Parents You Hold The Keys – Tips to the Parents </a>
					</li>
				</ul>

				<p>

				</p>
				<h3 className="major">Forms & Documents</h3>

				<ul className="alt">
					<li>
						<a href={BluMoonPolicy} target="_blank">
							Blu-Moon Policy
						</a>
					</li>
					<li>
						<a href="https://mva.maryland.gov/Documents/DL-300.pdf" target="_blank">
							MVA - Learner's Permit - Form #DL-300
						</a>
					</li>
					<li>
						<a href={RookieDriverLog} target="_blank">
							Rookie Driver BTW Log
						</a>
					</li>
				</ul></Content>
		</AnimatedPage>
	)
}