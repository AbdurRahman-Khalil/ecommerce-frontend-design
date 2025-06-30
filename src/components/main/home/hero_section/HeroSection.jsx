import { ShopNowBtn } from "../ShopNowBtn";

import heroImg from "../../../../assets/images/hero_img.png";
import avatarIcon from "../../../../assets/svgs/hero/avatar.svg";


export const HeroSection = () => {
    return (
        <section aria-label="Hero Section" className="px-[1.175rem] py-[1.2rem] min-h-[400px] bg-white border border-[#DEE2E7] rounded-md flex gap-[1.275rem]">
            <div className="relative w-full h-[360px]">
                <img src={heroImg} className="w-full h-full object-cover" alt="hero section image" />
                <div className="absolute top-14 left-10 ">
                    <p className="text-[1.75rem] leading-[1.55rem]">Latest trending</p>
                    <h2 className="text-[2rem] font-bold mb-[0.7rem]">Electronic items</h2>
                    <ShopNowBtn btnWidth={"w-[7.4375rem]"} />
                </div>
            </div>

            <div className="right-side h-[360px] flex flex-col gap-2.5">
                <div className="flex-1 bg-[#E3F0FF] rounded-md px-[0.8rem] py-[0.75rem] space-y-3.5">
                    <div className="flex items-center gap-2.5">
                        <img src={avatarIcon} alt="user icon" />
                        <p className="leading-5">Hi, user let's get started</p>
                    </div>
                    <div className="flex flex-col gap-[0.45rem]">
                        <button className="text-[0.8125rem] text-white font-medium w-full h-[1.875rem] rounded-md primary-gradient">Join now</button>
                        <button className="text-[0.8125rem] text-[#0D6EFD] font-medium w-full h-[1.875rem] rounded-md bg-white hover:bg-gray-50/90 border border-[#DEE2E7] transitions">Log in</button>
                    </div>
                </div>
                <div className="flex-1 text-white bg-[#F38332] rounded-md px-[1.1rem] py-[0.95rem]">
                    <p className="leading-5 pr-6">Get US $10 off with a new supplier</p>
                </div>
                <div className="flex-1 text-white bg-[#55BDC3] rounded-md px-[1.1rem] py-[0.95rem]">
                    <p className="leading-5">Send quotes with supplier preferences</p>
                </div>
            </div>
        </section>
    );
};
