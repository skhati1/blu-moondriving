import logo from "../assets/logo.png"

interface BannerProps {
    title: string;
    background: string;
}

export default function Banner(props: BannerProps){
    return(
        <>
		    <section id="banner">
				<div className="inner">
					<h2><img src={logo} alt="Blu-Moon Driving Logo" width={200} height={200}/>Blu-Moon Driving School</h2>
					<p>{props.title}</p>
				</div>
			</section>
        </>
    )
}