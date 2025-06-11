import { Link } from "react-router-dom";

import brandLogo from "../../../assets/svgs/header_svgs/brand_logo.svg"

export const Logo = () => {
    return (
        <Link to={"/"} className="flex items-center gap-1">
            <img src={brandLogo} alt="brand logo" />
            <span className="text-[#8CB7F5] text-[1.95rem] font-semibold">Brand</span>
        </Link>
    );
};
