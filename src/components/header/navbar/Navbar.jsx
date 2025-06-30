import { NavItem } from "./NavItem";

import profileIcon from "../../../assets/svgs/header_svgs/profile.svg";
import messageIcon from "../../../assets/svgs/header_svgs/message.svg";
import ordersIcon from "../../../assets/svgs/header_svgs/heart.svg";
import cartIcon from "../../../assets/svgs/header_svgs/cart.svg";



export const Navbar = () => {
    return (
        <nav className="-mb-1.5">
            <ul className="flex items-center gap-6">
                <NavItem destination={"/profile"} navItemImg={profileIcon} navItemText={"Profile"} />
                <NavItem destination={"/messages"} navItemImg={messageIcon} navItemText={"Message"} />
                <NavItem destination={"/orders"} navItemImg={ordersIcon} navItemText={"Orders"} />
                <NavItem destination={"/my-cart"} navItemImg={cartIcon} navItemText={"My cart"} />
            </ul>
        </nav>
    );
};
