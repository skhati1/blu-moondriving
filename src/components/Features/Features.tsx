import './features.css'

export interface FeaturesProps {
    items: FeaturesPropItem[]
}

export interface FeaturesPropItem {
    title: string,
    description: string,
    image?: any
}

export default function Features(props: FeaturesProps) {
    //<a href="#" className="special">Learn more</a>
    return (
        <>
            <section className="features">
                {props.items.map(({ title, description, image }) => {
                    return (
                        <>
                            <article>
                                <a href="#" className="image"><img src={image} alt="" /></a>
                                <h3 className="major">{title}</h3>
                                <p>{description}</p>
                            </article>
                        </>
                    )
                })}
            </section>
        </>
    )
}