import { useLocation } from "react-router-dom";

import { Newsletter } from "./Newsletter";
import { Logo } from "../header/logo/Logo";
import { About } from "./About";
import { ForUsers } from "./ForUsers";
import { Information } from "./Information";
import { Partnership } from "./Partnership";
import { SocialLinks } from "./SocialLinks";
import { LanguageSelector } from "../dropdowns/LanguageSelector";

import appStoreIcon from "../../assets/svgs/footer_svgs/app_store.svg";
import playStoreIcon from "../../assets/svgs/footer_svgs/play_store.svg";



export const Footer = () => {
    const location = useLocation();

    const showNewsletter = location.pathname === "/" || location.pathname === "/products";


    return (
        <footer
            className="-z-10 bg-[#FFFFFF] max-w-full mx-auto mt-[3rem]"
        >
            {showNewsletter && <Newsletter />}
            <div
                className="flex justify-between items-start gap-x-14 gap-y-12 flex-wrap max-w-[1180px] mx-auto py-14
                    max-[1212px]:mx-5"
            >
                <div className="space-y-[1.15rem] w-72">
                    <Logo />
                    <p className="text-[#505050]">Best information about the company gies here but now lorem ipsum is</p>
                    <SocialLinks />
                </div>
                <About footerPortionTitle={"About"} />
                <Partnership footerPortionTitle={"Partnership"} />
                <Information footerPortionTitle={"Information"} />
                <ForUsers footerPortionTitle={"ForUsers"} />
                <div>
                    <p className="mb-4 font-medium">Get app</p>
                    <div className="space-y-2">
                        <img src={appStoreIcon} alt="App Store Icon-Image" />
                        <img src={playStoreIcon} alt="Play Store Icon-Image" />
                    </div>
                </div>
            </div>

            <div className="bg-[#EFF2F4] border-t border-[#DEE2E7] py-5">
                <div className="flex justify-between items-center max-w-[1180px] mx-auto max-[1212px]:mx-5">
                    <p className="text-[#606060]">@2023 Ecommerce.</p>
                    <LanguageSelector />
                </div>
            </div>
        </footer>
    );
};
