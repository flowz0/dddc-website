import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";

export default function Services() {
    return (
        <div className="container mx-auto px-4 py-16 flex justify-center">
            <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-1 px-8">
                <Card className="col-span-12 sm:col-span-4 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-large text-white/60 uppercase font-bold">Air Duct Cleaning</p>
                        {/* <h4 className="text-white font-medium text-large">Placeholder</h4> */}
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover"
                        src="https://nextui.org/images/card-example-4.jpeg"
                    />
                </Card>
                <Card className="col-span-12 sm:col-span-4 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-large text-white/60 uppercase font-bold">Dryer Vent Cleaning</p>
                        {/* <h4 className="text-white font-medium text-large">Placeholder</h4> */}
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover"
                        src="https://nextui.org/images/card-example-3.jpeg"
                    />
                </Card>
                <Card className="col-span-12 sm:col-span-4 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-large text-white/60 uppercase font-bold">System Maintenance</p>
                        {/* <h4 className="text-white font-medium text-large">Placeholder</h4> */}
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover"
                        src="https://nextui.org/images/card-example-2.jpeg"
                    />
                </Card>
            </div>
        </div>
    )
}
