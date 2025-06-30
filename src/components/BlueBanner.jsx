import { Link } from "react-router-dom";


export const BlueBanner = () => {
    return (
        <div id="blue-banner" className="flex justify-between items-center rounded-lg p-8 mt-[1.3rem]">
            <div>
                <h3 className="font-semibold text-white text-2xl leading-8">
                    Super discount on more than 100 USD
                </h3>
                <p className="text-white/70">Have you ever finally just write dummy info</p>
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
