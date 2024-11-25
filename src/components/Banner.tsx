interface BannerProps {
    title: string;
    background: string;
}
export default function Banner(props: BannerProps){
    const fileName = "./src/assets/images/pic0" + props.background + ".jpg";''
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