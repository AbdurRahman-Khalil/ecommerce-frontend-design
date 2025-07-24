import { Feature } from './Feature'

import lockIcon from "../../../../assets/svgs/cart/features/lock.svg";
import messageIcon from "../../../../assets/svgs/header_svgs/message.svg";
import deliveryTruckIcon from "../../../../assets/svgs/cart/features/delivery_truck.svg";



const features = [
    {
        id: 1,
        title: "Secure payment",
        description: "Your payment information is protected with encryption.",
        icon: lockIcon,
    },
    {
        id: 2,
        title: "Customer support",
        description: "Get 24/7 assistance from our friendly support team.",
        icon: messageIcon,
    },
    {
        id: 3,
        title: "Free delivery",
        description: "Enjoy fast and free delivery on all your orders.",
        icon: deliveryTruckIcon,
    },
];


export const Features = () => {
    return (
        <div className="flex items-center gap-x-14 gap-y-9 flex-wrap my-10 max-[1212px]:px-5">
            {
                features.map((feature) => (
                    <Feature key={feature.id} feature={feature} />
                ))
            }
        </div>
    );
};