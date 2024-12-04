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
                </div>
            </section>
        </>
    )
}