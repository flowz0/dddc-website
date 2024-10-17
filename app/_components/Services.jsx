import Service from "./Service";
import AirDuct from "../_assets/air-duct-cleaning.jpg"
import DryerVent from '../_assets/dryer-vent-cleaning.jpeg'
import SystemMaintenance from '../_assets/hvac-system-maintenance.jpg'

export default function Services() {
    return (
        <section className="container mx-auto h-fit mt-16 md:py-4 lg:py-28">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-1 md:gap-y-8">
                <Service title={"Air Duct Cleaning"} image={AirDuct} />
                <Service title={"Dryer Vent Cleaning"} image={DryerVent} />
                <Service title={"System Maintenance"} image={SystemMaintenance} />
            </div>
        </section>
    )
}