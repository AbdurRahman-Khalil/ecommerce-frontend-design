import { Link } from "react-router-dom";

import { Logo } from "./logo/Logo";
import { SearchBarDropdown } from "./searchbar_dropdown/SearchBarDropdown";
import { Navbar } from "./navbar/Navbar";
import { CategoryDropdown } from "../dropdowns/CategoryDropdown";
import { Help } from "./Help";
import { LanguageCurrencySelector } from "../dropdowns/LanguageCurrencySelector";
import { CountrySelector } from "../dropdowns/CountrySelector";



export const Header = () => {
    return (
        <header className="fixed top-0 right-0 left-0 z-40 bg-[#FFFFFF]">
            <div className="flex justify-between items-center max-w-[1180px] mx-auto py-4">
                <Logo />
                <SearchBarDropdown />
                <Navbar />
            </div>
            <div className="border border-[#E0E0E0]">
                <div className="flex justify-between items-center max-w-[1180px] mx-auto pt-2.5 pb-[0.7rem]">
                    <div className="flex items-center gap-8 w-fit">
                        <CategoryDropdown variant={"menu"} />
                        <Link to={"/hot_offers"} className="font-medium hover:text-gray-600/90 transitions">Hot offers</Link>
                        <Link to={"/gift_boxes"} className="font-medium hover:text-gray-600/90 transitions">Gift boxes</Link>
                        <Link to={"/projects"} className="font-medium hover:text-gray-600/90 transitions">Projects</Link>
                        <Link to={"menu_item"} className="font-medium hover:text-gray-600/90 transitions">Menu item</Link>
                        <Help />
                    </div>
                    <div className="flex items-center gap-[1.35rem]">
                        <LanguageCurrencySelector />
                        <CountrySelector />
                    </div>
                </div>
            </div>
        </header>
    );
};
