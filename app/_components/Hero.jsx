import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                        Affordable and Dependable Duct Cleaning Services
                    </h1>
                    <p className="text-lg md:text-xl mb-8">
                        Based in Kansas City and Surrounding Areas
                    </p>
                    <Button color="primary" size='lg'>
                        Request Quote
                    </Button>
                    {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg">
                        Request Quote
                    </button> */}
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0">
                    <Image
                        src="/kansas-city-bg.jpg"
                        alt="Hero Image"
                        width={800}
                        height={600}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    )
}
