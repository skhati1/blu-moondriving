import './footer.css'

export default function Footer() {
    return (
        <p>
            <div className="callBar">
                <h2>Questions? Call Now - <a href="tel://14432760761/">(443) 276-0761</a></h2>
            </div>
            <div className="footerLinks">
                <ul>
                    <li className="icon solid fa-home"><a target="_blank" href="https://www.google.com/maps/dir//8950+Old+Annapolis+Rd+%23115,+Columbia,+MD+21045/@39.2276379,-76.8228984,16z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89b7e0010101722b:0x40f6cc566b32910d!2m2!1d-76.8228984!2d39.2276379!3e0?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D">&nbsp;&nbsp;8950 Old Annapolis Road Ste #115, Columbia, MD 21045</a></li>
                    <li className="icon solid fa-phone">&nbsp;&nbsp;<a href="tel://14432760761/">(443) 276-0761</a></li>
                    <li className="icon solid fa-envelope">&nbsp;&nbsp;<a href="mailto:blumoondriving@gmail.com">blumoondriving@gmail.com</a></li>
                    <li className="icon brands fa-facebook-f">&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.facebook.com/profile.php?id=61571385867371">Facebook Page</a></li>
                </ul>

            </div>
            <ul className="copyright">
                <li>&copy; Blu-Moon Driving Inc. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
        </p>
    )
}