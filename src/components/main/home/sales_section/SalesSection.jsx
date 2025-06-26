import { useEffect, useState } from 'react';

import { SaleCard } from './SaleCard';

import samrtwatch from "../../../../assets/images/tech/8.png";
import laptop from "../../../../assets/images/tech/7.png";
import camera from "../../../../assets/images/tech/6.png";
import headphone from "../../../../assets/images/tech/5.png";
import smartphone from "../../../../assets/images/tech/3.png";



const products = [
    {
        id: 1,
        name: 'Smart watches',
        img: samrtwatch,
        discount: '-25%',
    },
    {
        id: 2,
        name: 'Laptops',
        img: laptop,
        discount: '-15%',
    },
    {
        id: 3,
        name: 'GoPro cameras',
        img: camera,
        discount: '-40%',
    },
    {
        id: 4,
        name: 'Headphones',
        img: headphone,
        discount: '-25%',
    },
    {
        id: 5,
        name: 'Canon cameras',
        img: smartphone,
        discount: '-25%',
    },
];

const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 4);


export const SalesSection = () => {
    const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeRemaining());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    function getTimeRemaining() {
        const total = targetDate - new Date();

        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));

        return { total, days, hours, minutes, seconds };
    }



    return (
        <section aria-label="Sales Offers" className="p-0.5 min-h-[240px] bg-white border border-[#DEE2E7] rounded-md flex justify-between mt-[1.9rem]">
            {/* Timer  */}
            <div className="flex flex-col px-[1.15rem] py-5">
                <h4 className="text-xl font-semibold">Deals and offers</h4>
                <p className="text-[#8B96A5]">Hygiene equipments</p>
                <div className="flex gap-2 mt-4">
                    {['Days', 'Hour', 'Min', 'Sec'].map((label, i) => {
                        const value = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds][i];
                        return (
                            <div key={label} className="w-[2.8125rem] h-[3.125rem] bg-[#606060] text-white text-center px-2 py-1 rounded">
                                <div className="font-bold">{String(value).padStart(2, '0')}</div>
                                <div className="text-xs">{label}</div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Products */}
            <div className="flex">
                {products.map((product) => (
                    <SaleCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </section>
    );
};

