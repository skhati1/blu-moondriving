import { useMediaQuery } from 'usehooks-ts'
import './blackbar.css'

export default function BlackBar() {
    
  // You can use any @media property
    const isDesktop: boolean = useMediaQuery('(min-width: 800px)');
    return (
        <div className='blackBar'>
            <div className='blackBarRow'>
                <a href="tel://14432760761/">
                    <span className="icon solid fa-phone"> {isDesktop ? ' (443) 276-0761' : '' }</span>
                </a>
                <a href="https://maps.app.goo.gl/1LRSuYzvnpQth5T19" target="_blank">
                    <span className="icon solid fa-map"> {isDesktop ? ' 8950 Old Annapolis Road #115, Columbia, MD 21045' : '' }</span>
                </a>
                <a href="mailto:blumoondriving@gmail.com">
                    <span className="icon solid fa-envelope">{isDesktop ? ' blumoondriving@gmail.com' : ''} </span>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61571385867371" target="_blank">
                    <span className="icon brands fa-facebook-f">{isDesktop ? ' Facebook' : ''} </span>
                </a>
            </div>
        </div>
    )
}
