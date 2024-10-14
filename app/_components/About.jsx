import { Button, Image } from '@nextui-org/react'
import React from 'react'

export default function About() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
                <div className="md:w-1/2 mt-8 md:mt-0">
                    <Image
                        src="/kansas-city-bg.jpg"
                        alt="Hero Image"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>
                <div className="md:w-2/3 text-center md:text-left md:mx-2">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                        Family-operated business based in Oak Grove, Missouri
                    </h1>
                    <p className="text-lg md:text-xl mb-8">
                        Welcome to Duct Daddy Duct Cleaning! We are a local, family-operated business based in Oak Grove, Missouri, dedicated to providing top-notch residential air duct and dryer vent cleaning services. At Duct Daddy, we understand the importance of maintaining a clean and healthy home environment, which is why we strive to offer the best service possible to our community.
                    </p>
                    <Button color="primary" size='lg'>
                        Request Quote
                    </Button>
                    {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg">
                        Request Quote
                    </button> */}
                </div>
            </div>
        </div>
    )
}
