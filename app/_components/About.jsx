import Article from './Article'

export default function About() {
    return (
        <>
            <section className='container mx-auto flex flex-col gap-y-16'>
                <Article
                    title={"Family-operated business based in Oak Grove, Missouri"}
                    desc={"Welcome to Duct Daddy Duct Cleaning! We are a local, family-operated business based in Oak Grove, Missouri, dedicated to providing top-notch residential air duct and dryer vent cleaning services. At Duct Daddy, we understand the importance of maintaining a clean and healthy home environment, which is why we strive to offer the best service possible to our community."}
                // image=''
                />
                <Article
                    title={"Our team is equipped with the industry's top-of-the-line equipment"}
                    desc={"Our team is equipped with the industry's top-of-the-line equipment to ensure your air ducts and dryer vents are thoroughly cleaned and free of contaminants. By using the latest technology and techniques, we guarantee improved air quality, increased HVAC efficiency, and enhanced safety in your home."}
                />
                <Article
                    title={"Our family values extend to our business operations"}
                    desc={"At Duct Daddy Duct Cleaning, we take pride in our commitment to excellence and customer satisfaction. Our family values extend to our business operations, ensuring that every job is completed with care, integrity, and a personal touch. We believe in building long-lasting relationships with our clients, treating each home as if it were our own."}
                />
            </section>
        </>
    )
}
