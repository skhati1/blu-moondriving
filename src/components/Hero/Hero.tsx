import './hero.css'
//import { GENERIC_ENROLLMENT } from '../../assets/links'

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-text">
                <h1>Your Journey to Safe Driving Starts Now!</h1>
                <p className="whitest-font">
                    <a href="tel://14432516427/"><span className="icon solid fa-building button small"> Office: (443) 276-0761</span> </a>
                    &nbsp;&nbsp; 
                    <a href="tel://14432516427/"><span className="icon solid fa-phone button small"> Cell: (443) 251-6427</span></a>
                </p>
            </div>
        </div>
    )
    //
    //<a href={GENERIC_ENROLLMENT} target="_blank" rel="noopener noreferrer">
    //<button className="heroAction">Register Now</button>
    //</a>
}