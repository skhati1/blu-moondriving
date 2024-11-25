interface BannerProps {
    title: string;
    background: string;
}
export default function Banner(props: BannerProps){
    return(
        <>
		    <section id="banner">
				<div className="inner">
					<div className="logo"></div>
					<h2>Blu-Moon Driving School</h2>
					<p>{props.title}</p>
				</div>
			</section>
        </>
    )
}