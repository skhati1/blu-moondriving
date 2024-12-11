import { NavLink } from 'react-router-dom'
import './hero.css'

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-text">
                <h1>Welcome to Blu-Moon Driving School</h1>
                <NavLink to="/"><button className="heroAction">Register</button></NavLink>
            </div>
        </div>
    )
}