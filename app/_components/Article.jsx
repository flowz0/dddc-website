import { Button } from '@nextui-org/react'
import Image from 'next/image'
import defaultImage from '../_assets/kansas-city-bg.jpg'

export default function Article({ title, desc, image }) {
    return (
        <article className="shadow-lg text-center px-2 my-10 md:flex md:items-center md:justify-center md:text-left md:gap-x-24 md:px-6 md:py-4 md:bg-gray-200 md:rounded-lg">
            <div className="md:w-1/2">
                <h2 className="text-3xl font-bold md:text-4xl">
                    {title}
                </h2>
                <p className="text-lg mt-6 md:text-xl md:leading-normal md:mt-6">
                    {desc}
                </p>
                <Button color="primary" size='lg' className='mt-4 md:mt-4'>
                    Request Quote
                </Button>
            </div>
            <div className="mt-10 md:w-3/5">
                <Image
                    src={image || defaultImage}
                    alt="Article image"
                    height={1080}
                    className="rounded"
                />
            </div>
        </article>
    )
}
