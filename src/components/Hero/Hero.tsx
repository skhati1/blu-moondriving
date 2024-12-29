import './hero.css'
import { GENERIC_ENROLLMENT } from '../../assets/links'

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-text">
                <h1>Welcome to Blu-Moon Driving School</h1>
                <a href={GENERIC_ENROLLMENT} target="_blank" rel="noopener noreferrer">
                    <button className="heroAction">Register</button>
                </a>
            </div>
        </div>
    )
}