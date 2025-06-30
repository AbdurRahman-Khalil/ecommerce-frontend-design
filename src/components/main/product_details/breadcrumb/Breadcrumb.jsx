import { Link } from "react-router-dom";

import rightArrowIcon from "../../../../assets/svgs/products/right_arrow.svg";


export const Breadcrumb = ({ pCategory, pTitle }) => {
    return (
        <div aria-label="Breadcrumb" className="text-[#8B96A5] flex gap-1 mb-[1.35rem]">
            <Link to={"/"} className="-mt-0.5 hover:underline">
                Home
            </Link>
            <img src={rightArrowIcon} alt="right arrow icon" />
            <Link to={"/products"} className="-mt-0.5 hover:underline">
                Products
            </Link>
            <img src={rightArrowIcon} alt="right arrow icon" />
            <Link to={"/products"} className="-mt-0.5 hover:underline">
                {pCategory}
            </Link>
            <img src={rightArrowIcon} alt="right arrow icon" />
            <p className="-mt-0.5">{pTitle}</p>
        </div>
    );
};
