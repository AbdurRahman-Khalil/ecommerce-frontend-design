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
        <section
            aria-label="Sales Offers"
            className="p-0.5 max-[898px]:pb-0 min-h-[240px] bg-white border border-[#DEE2E7] rounded-md flex justify-between mt-[1.9rem]
            max-[1212px]:border-x-0 max-[1212px]:rounded-none max-[1169px]:flex-wrap max-[1169px]:gap-2 max-[459px]:gap-3"
        >
            {/* Timer  */}
            <div
                className="flex flex-col gap-4 px-[1.15rem] py-5 
                    max-[1169px]:py-6 max-[1169px]:w-full min-[460px]:max-[1169px]:flex-row max-[1169px]:items-center 
                    max-[1169px]:justify-between max-[459px]:gap-[1.05rem]"
            >
                <div>
                    <h4 className="text-xl font-semibold">Deals and offers</h4>
                    <p className="text-[#8B96A5]">Hygiene equipments</p>
                </div>
                <div className="flex gap-2">
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
            <div
                id="sales-products"
                className="group flex max-[1169px]:w-full"
            >
                <div className="flex overflow-x-auto whitespace-nowrap scroll-smooth 
                    [&::-webkit-scrollbar-thumb]:invisible group-hover:[&::-webkit-scrollbar-thumb]:visible
                    [&::-webkit-scrollbar-track]:invisible group-hover:[&::-webkit-scrollbar-track]:visible
                    hover:[&::-webkit-scrollbar-thumb]:cursor-grab 
                    active:[&::-webkit-scrollbar-thumb]:cursor-grabbing
                    [&::-webkit-scrollbar]:h-1
                    [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300
                    [&::-webkit-scrollbar-thumb]:rounded-2xl
                    max-[1169px]:[&>div:nth-child(1)]:border-l-0 max-[1169px]:w-full max-[1169px]:border-t 
                    max-[1169px]:border-[#DEE2E7] max-[1169px]:pt-0.5
                    "
                >
                    {products.map((product) => (
                        <SaleCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

