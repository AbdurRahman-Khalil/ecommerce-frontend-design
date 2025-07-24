import { useLocation } from "react-router-dom";

import { NavItem } from "./NavItem";

import profileIcon from "../../../assets/svgs/header_svgs/profile.svg";
import messageIcon from "../../../assets/svgs/header_svgs/message.svg";
import heartIcon from "../../../assets/svgs/header_svgs/heart.svg";
import cartIcon from "../../../assets/svgs/header_svgs/cart.svg";



export const Navbar = () => {
    const location = useLocation();
    const isMyCart = location.pathname.includes("my-cart");

    return (
        <nav className="-mb-1.5">
            <ul className="flex items-center gap-6 max-[374px]:gap-[1.2rem] max-[360px]:gap-[1.08rem] transitions">
                <NavItem
                    destination={"/profile"}
                    navItemImg={profileIcon}
                    navItemText={"Profile"}
                />
                <NavItem
                    hideSeek={`max-[539px]:hidden ${!isMyCart && "min-[780px]:max-[944px]:hidden"}`}
                    destination={"/messages"}
                    navItemImg={messageIcon}
                    navItemText={"Message"}
                />
                <NavItem
                    hideSeek={`max-[439px]:hidden ${!isMyCart && "min-[780px]:max-[849px]:hidden"}`}
                    destination={"/my-cart#saved-products"}
                    navItemImg={heartIcon}
                    navItemText={"Saved"}
                />
                <NavItem
                    destination={"/my-cart"}
                    navItemImg={cartIcon}
                    navItemText={"My cart"}
                />
            </ul>
        </nav>
    );
};
