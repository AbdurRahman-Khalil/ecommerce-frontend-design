import { Link } from "react-router-dom";


export const BlueBanner = () => {
    return (
        <div
            id="blue-banner"
            className="flex justify-between items-center flex-wrap gap-x-20 gap-y-5 p-8 mt-[1.3rem] rounded-lg
            max-[1212px]:px-5 max-[1212px]:rounded-none"
        >
            <div className="-mt-0.5 max-[669px]:-mt-1">
                <h3 className="font-semibold text-white text-2xl leading-8">
                    Super discount on more than 100 USD
                </h3>
                <p className="text-white/70">So! what are you waiting for, Go and achieve the discount.</p>
            </div>
            <Link
                to={"/products"}
                className="text-white bg-[#FF9017] hover:bg-[#fa8100] rounded-md w-[108px] h-10 flex justify-center items-center transitions"
            >
                Shop now
            </Link>
        </div>
    );
};
