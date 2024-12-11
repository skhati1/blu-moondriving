
import ImageOne from "../../assets/home/07.jpg";
import ImageTwo from "../../assets/home/02.jpg";
import ImageThree from "../../assets/home/03.jpg";
import ImageFour from "../../assets/home/04.jpg";
import './servicespreview.css'

export default function ServicesPreview() {
    return (
        <>
            <h2>Our Services</h2>
            <div className="servicesPreview">
                <div className="card">
                    <img src={ImageOne} alt="Basic Course" />
                    <div className="container">
                        <h4><b>Basic Course</b></h4>
                        <ul>
                            <li>30 Hour Classroom Session</li>
                            <li>6 Hour Behind The Wheel</li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <img src={ImageTwo} alt="Advance Course" />
                    <div className="container">
                        <h4><b>Advance Course</b></h4>
                        <ul>
                            <li>30 Hour Classroom Session</li>
                            <li>8 Hour Behind The Wheel</li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <img src={ImageThree} alt="Premium Course" />
                    <div className="container">
                        <h4><b>Premium Course</b></h4>
                        <ul>
                            <li>30 Hour Classroom Session</li>
                            <li>10 Hour Behind The Wheel</li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <img src={ImageFour} alt="Refresher Courses" />
                    <div className="container">
                        <h4><b>Refresher Course</b></h4>
                        <ul>
                            <li>Hourly In-Car Sessions Only</li>
                        </ul>
                        (2, 4, 6, 8 or 10 Hours)
                    </div>
                </div>
            </div>
        </>
    )
}