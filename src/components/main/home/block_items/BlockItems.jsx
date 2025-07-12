import { ShopNowBtn } from "../ShopNowBtn";
import { BlockItem } from "./BlockItem";

import homeOutdoor from "../../../../assets/images/home_outdoor.jpg";
import consumerElectronicsGadgets from "../../../../assets/images/consumer_electronics_gadgets.jpg";

import interiorImg1 from "../../../../assets/images/interior/1.png";
import interiorImg3 from "../../../../assets/images/interior/3.png";
import interiorImg4 from "../../../../assets/images/interior/4.png";
import interiorImg5 from "../../../../assets/images/interior/5.png";
import interiorImg6 from "../../../../assets/images/interior/6.png";
import interiorImg7 from "../../../../assets/images/interior/7.png";
import interiorImg8 from "../../../../assets/images/interior/8.png";
import interiorImg9 from "../../../../assets/images/interior/9.png";

import techImg8 from "../../../../assets/images/tech/8.png";
import techImg6 from "../../../../assets/images/tech/6.png";
import techImg9 from "../../../../assets/images/tech/9.png";
import techImg10 from "../../../../assets/images/tech/10.png";
import techImg5 from "../../../../assets/images/tech/5.png";
import techImg7 from "../../../../assets/images/tech/7.png";
import techImg2 from "../../../../assets/images/tech/2.png";
import techImg1 from "../../../../assets/images/tech/1.png";



export const BlockItems = () => {
    const interiorItems = [
        { id: 1, title: 'Soft chairs', price: 'From USD 19', img: interiorImg1 },
        { id: 2, title: 'Deco lamp', price: 'From USD 19', img: interiorImg6 },
        { id: 3, title: 'Bed form', price: 'From USD 19', img: interiorImg5 },
        { id: 4, title: 'Clay pot', price: 'From USD 19', img: interiorImg3 },
        { id: 5, title: 'Kitchen mixer', price: 'From USD 100', img: interiorImg9 },
        { id: 6, title: 'Coffee maker', price: 'From USD 39', img: interiorImg8 },
        { id: 7, title: 'Home appliance', price: 'From USD 19', img: interiorImg7 },
        { id: 8, title: 'Deco plant', price: 'From USD 10', img: interiorImg4 },
    ];

    const techItems = [
        { id: 1, title: 'Smart watches', price: 'From USD 19', img: techImg8 },
        { id: 2, title: 'Cameras', price: 'From USD 89', img: techImg6 },
        { id: 3, title: 'Headphones', price: 'From USD 10', img: techImg9 },
        { id: 4, title: 'Electric kattles', price: 'From USD 90', img: techImg10 },
        { id: 5, title: 'Gaming set', price: 'From USD 35', img: techImg5 },
        { id: 6, title: 'Laptops & PC', price: 'From USD 340', img: techImg7 },
        { id: 7, title: 'Tablets', price: 'From USD 19', img: techImg2 },
        { id: 8, title: 'Smartphones', price: 'From USD 240', img: techImg1 },
    ];


    return (
        <section
            aria-label="Product Categories"
            className="min-h-[257px] mt-[1.25rem] space-y-[1.25rem]"
        >
            <div
                id="interior-items"
                className="flex justify-between bg-white border border-[#DEE2E7] rounded-md
                max-[1212px]:border-x-0 max-[1212px]:rounded-none max-[1201px]:flex-wrap"
            >
                <div className="relative w-[20.5rem] max-[1201px]:w-full">
                    <img
                        src={homeOutdoor}
                        className="w-full h-[257px] object-cover rounded-s-md max-[1212px]:rounded-s-none"
                        alt="homeOutdoor image"
                    />
                    {/* bg-[#ffe7b866] */}
                    <div className="absolute inset-0 bg-[#ffffff5d] px-[1.15rem] py-5 rounded-s-md max-[1212px]:rounded-s-none flex justify-center items-center">
                        <div className="text-center">
                            <h4
                                className="text-[1.35rem] font-semibold mb-[1.2rem] leading-[1.65rem]"
                            >
                                Home and outdoor
                            </h4>
                            <ShopNowBtn btnWidth={"w-[7.6875rem]"} />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 min-[435px]:grid-cols-2 min-[663px]:grid-cols-3 min-[878px]:grid-cols-4 p-0.5 max-[1201px]:w-full">
                    {
                        interiorItems.map((item) => (
                            <BlockItem key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>

            <div
                id="tech-items"
                className="flex justify-between bg-white border border-[#DEE2E7] rounded-md
                max-[1212px]:border-x-0 max-[1212px]:rounded-none max-[1201px]:flex-wrap"
            >
                <div className="relative w-[20.5rem] max-[1201px]:w-full">
                    <img
                        src={consumerElectronicsGadgets}
                        className="w-full h-[257px] object-bottom object-cover rounded-s-md max-[1212px]:rounded-s-none"
                        alt="consumerElectronicsGadgets image"
                    />
                    <div className="absolute inset-0 bg-[#ffffff5d] px-[1.15rem] py-5 rounded-s-md max-[1212px]:rounded-s-none flex justify-center items-center">
                        <div className="text-center">
                            <h4
                                className="text-[1.35rem] font-semibold w-[14.36rem] mb-[1.35rem] leading-[1.65rem]"
                            >
                                Consumer electronics and gadgets
                            </h4>
                            <ShopNowBtn btnWidth={"w-[7.6875rem]"} />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 min-[435px]:grid-cols-2 min-[663px]:grid-cols-3 min-[878px]:grid-cols-4 p-0.5 max-[1201px]:w-full">
                    {
                        techItems.map((item) => (
                            <BlockItem key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </section >
    );
};
