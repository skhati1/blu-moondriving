import './features.css'

export interface FeaturesPropItem {
    title: string,
    description: string,
    image?: any
}

export default function Features() {

	const aboutUsFeatures: FeaturesPropItem[] =
    [{
        title: "Experienced & Dedicated Instructor(s)",
        description: "Our team is trained to provide patient, clear, and thorough instruction for drivers at any experience level.",
    },
    {
        title: "Flexible Scheduling",
        description: "We understand that everyone has a busy schedule. That’s why we offer convenient lesson times to fit your lifestyle.",
    },
    {
        title: "Modern Techniques",
        description: "We stay updated on the latest driving techniques and best practices, ensuring that you learn what’s most relevant and effective.",
    },
    {
        title: "Focus on Safety",
        description: "At Blu-Moon, safety is our top priority. We not only prepare you for your test but also help you become a defensive and responsible driver for life.",
    }]
    return (
        <>
            <section className="features">
                {aboutUsFeatures.map(({ title, description }) => {
                    return (
                        <article key={title}>
                            <h3 className="major">{title}</h3>
                            <p>{description}</p>
                        </article>
                    )
                })}
            </section>
        </>
    )
}