import { Button } from '@nextui-org/react'
import Image from 'next/image'
import backgroundImage from '../_assets/kansas-city-bg.jpg'
import Avatar from '../_assets/Duct-Daddy-01.png'

export default function Hero() {
    return (
        <>
            <section className='relative py-20 md:py-28 lg:py-36 flex items-center justify-center'>
                <div className='absolute h-full z-[-1]'>
                    <Image
                        src={backgroundImage}
                        alt="Background image"
                        className='object-cover h-full filter brightness-50'
                        priority
                    />
                </div>
                <div className='text-center text-white px-6'>
                    <div className='flex justify-center'>
                        <Image
                            src={Avatar}
                            alt='Duct Daddy Avatar'
                            className='w-auto h-72 md:h-80 lg:h-96'
                        />
                    </div>
                    <h1 className='text-4xl font-bold'>Affordable and Dependable Duct Cleaning Services</h1>
                    <p className='text-lg font-light mt-4'>Based in Kansas City and Surrounding Areas</p>
                    <div className='flex flex-col md:flex-row items-center justify-center mt-4'>
                        <Button color='primary' size='lg'>
                            Request Quote!
                        </Button>
                    </div>
                </div>
            </section>
        </>

    )
}
