import { Link, useLocation } from "react-router-dom";

import { SideBar } from "./siderbar/SideBar";
import { MenuBtn } from "./siderbar/MenuBtn";
import { Logo } from "./logo/Logo";
import { SearchBarDropdown } from "./searchbar_dropdown/SearchBarDropdown";
import { Navbar } from "./navbar/Navbar";
import { CategoryDropdown } from "../dropdowns/CategoryDropdown";
import { Help } from "./Help";
import { LanguageCurrencySelector } from "../dropdowns/LanguageCurrencySelector";
import { CountrySelector } from "../dropdowns/CountrySelector";



export const Header = () => {
    const location = useLocation();

    const isMyCart = location.pathname === "/my-cart";


    return (
        <header className="fixed top-0 right-0 left-0 z-40 bg-[#FFFFFF]">
            <SideBar />
            <div
                className="flex justify-between items-center max-w-[1180px] mx-auto py-4
                    max-[779px]:flex-wrap max-[779px]:gap-y-3.5 max-[1212px]:px-1.5 max-[779px]:pt-3 max-[779px]:pb-3.5"
            >
                <div className="flex gap-5">
                    <MenuBtn />
                    <Logo />
                </div>
                {!isMyCart && <SearchBarDropdown />}
                <Navbar />
            </div>
            {!isMyCart && (
                <div className="border-y border-[#E0E0E0]">
                    <div className="flex justify-between items-center max-w-[1180px] mx-auto pt-2.5 pb-[0.7rem] max-[1212px]:px-1.5">
                        <div className="flex items-center gap-8 w-fit">
                            <CategoryDropdown variant={"menu"} />
                            <Link to={"/hot_offers"} className="font-medium hover:text-gray-600/90 transitions max-[694px]:hidden">Hot offers</Link>
                            <Link to={"/gift_boxes"} className="font-medium hover:text-gray-600/90 transitions max-[794px]:hidden">Gift boxes</Link>
                            <Link to={"/projects"} className="font-medium hover:text-gray-600/90 transitions max-[894px]:hidden">Projects</Link>
                            <Link to={"/products"} className="font-medium hover:text-gray-600/90 transitions max-[994px]:hidden">Products</Link>
                            <Help />
                        </div>
                        <div className="flex items-center gap-[1.35rem] max-[494px]:gap-0">
                            <LanguageCurrencySelector />
                            <CountrySelector />
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};
