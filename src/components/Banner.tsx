import logo from "../assets/logo.png"

interface BannerProps {
    pageName: string;
    title: string;
    background: string;
}

export default function Banner(props: BannerProps) {
    return (
        <>
            <section id="banner">
                <div className="inner">
                    <h2><img src={logo} alt="Blu-Moon Driving Logo" width={200} height={200} />Blu-Moon Driving - {props.pageName}</h2>
                    {props.title ?
                        (<p>
                            {props.title}
                            <br />
                            <div className="actions small">
                                <a href="tel:+4432760761" className="button primary small">Call Now!</a>
                            </div>
                        </p>) 
                        : 
                        (<p>
                            <div className="actions small">
                                <a href="tel:+4432760761" className="button primary small">Call Now!</a>
                            </div>
                        </p>
                    )}
                </div>
            </section>
        </>
    )
}