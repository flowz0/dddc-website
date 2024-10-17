import Image from 'next/image';
import { HiChevronRight } from "react-icons/hi2";
import defaultImage from '../_assets/Air-Duct-Cleaning-Services.jpg'

export default function Service({ title, image }) {
    return (
        <div className="text-center md:max-w-md md:bg-gray-100 md:mx-2 md:py-4 md:pt-6 py-2 pt-4 px-2 md:shadow-lg md:rounded-lg">
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            <div className="flex justify-center">
                <div className="flex items-center justify-center space-x-2 mt-2 text-sky-500 cursor-pointer max-w-32 hover:text-sky-600">
                    <span className="text-lg font-light cursor-pointer">Show more</span>
                    <HiChevronRight />
                </div>
            </div>
            <div className="mt-4 flex items-center justify-center">
                <Image
                    src={image || defaultImage}
                    alt="Service image"
                    className="object-cover rounded-sm h-56"
                />
            </div>
        </div>
    )
}
