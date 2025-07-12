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
        <section
            aria-label="Our Services"
            className="min-h-[256px] mt-[1.9rem]"
        >
            <h3 className="text-2xl font-semibold leading-8 mb-6 max-[1212px]:mx-5">Our extra services</h3>
            <div className="group">
                <div
                    className="flex gap-5 overflow-x-auto whitespace-nowrap scroll-smooth 
                    [&::-webkit-scrollbar-thumb]:invisible group-hover:[&::-webkit-scrollbar-thumb]:visible
                    [&::-webkit-scrollbar-track]:invisible group-hover:[&::-webkit-scrollbar-track]:visible
                    hover:[&::-webkit-scrollbar-thumb]:cursor-grab 
                    active:[&::-webkit-scrollbar-thumb]:cursor-grabbing
                    [&::-webkit-scrollbar]:h-1.5
                    [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300
                    [&::-webkit-scrollbar-thumb]:rounded-2xl
                    max-[1212px]:[&>div:nth-child(1)]:rounded-s-none max-[1212px]:[&>div:nth-child(1)>div>img]:rounded-s-none
                    max-[1212px]:[&>div:nth-child(4)]:rounded-e-none max-[1212px]:[&>div:nth-child(4)>div>img]:rounded-e-none"
                >
                    {
                        services.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};
