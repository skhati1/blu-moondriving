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
    return (
        <>
            <section className="features">
                {props.items.map(({ title, description, image }) => {
                    return (
                        <article key={title}>
                            <a href="#" className="image"><img src={image} alt={title} aria-label={title} /></a>
                            <h3 className="major">{title}</h3>
                            <p>{description}</p>
                        </article>
                    )
                })}
            </section>
        </>
    )
}