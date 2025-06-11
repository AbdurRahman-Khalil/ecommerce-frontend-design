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
    return (
        <footer className="fixed bottom-0 -z-10 bg-[#FFFFFF] max-w-full container mx-auto">
            <div className="flex justify-between items-start container mx-auto py-14">
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
                <div className="flex justify-between items-center container mx-auto">
                    <p className="text-[#606060]">@2023 Ecommerce.</p>
                    <LanguageSelector />
                </div>
            </div>
        </footer>
    );
};
