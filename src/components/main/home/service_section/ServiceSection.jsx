import { ServiceCard } from "./ServiceCard";

import searchIcon from "../../../../assets/svgs/services/search.svg";
import inventoryIcon from "../../../../assets/svgs/services/inventory.svg";
import sendIcon from "../../../../assets/svgs/services/send.svg";
import securityIcon from "../../../../assets/svgs/services/security.svg";

import service1 from "../../../../assets/images/services/1.png";
import service2 from "../../../../assets/images/services/2.png";
import service3 from "../../../../assets/images/services/3.png";
import service4 from "../../../../assets/images/services/4.png";



const services = [
    {
        id: 1,
        description: "Source from Industry Hubs",
        icon: searchIcon,
        img: service1,
    },
    {
        id: 2,
        description: "Customize Your Products",
        icon: inventoryIcon,
        img: service2,
    },
    {
        id: 3,
        description: "Fast, reliable shipping by ocean or air",
        icon: sendIcon,
        img: service3,
    },
    {
        id: 4,
        description: "Product monitoring and inspection",
        icon: securityIcon,
        img: service4,
    },
];


export const ServiceSection = () => {
    return (
        <section aria-label="Our Services" className="min-h-[256px] mt-[1.9rem]">
            <h3 className="text-2xl font-semibold leading-8 mb-6">Our extra services</h3>
            <div className="grid grid-cols-4 gap-5">
                {
                    services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))
                }
            </div>
        </section>
    );
};
