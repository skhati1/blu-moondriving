import './blackbar.css'

export default function BlackBar() {
    return (
        <div className='blackBar'>
            <div className='blackBarRow'>
                <a href="tel://14432760761/">
                    <span className="icon solid fa-phone"> (443) 276-0761</span>
                </a>
                <a href="https://maps.app.goo.gl/1LRSuYzvnpQth5T19" target="_blank">
                    <span className="icon solid fa-map"> 8950 Old Annapolis Road #115, Columbia, MD 21045</span>
                </a>
                <a href="mailto:blumoondriving@gmail.com">
                    <span className="icon solid fa-envelope"> blumoondriving@gmail.com</span>
                </a>
            </div>
        </div>
    )
}