import { Link } from "react-router-dom";

import useProductsStore from "../../../store/products/ProductsStore";


export const NavItem = ({ destination, navItemImg, navItemText }) => {
    const cartLength = useProductsStore((state) => state.cartLength);

    return (
        <li>
            <Link to={destination} className={`group ${destination === "/my-cart" && "relative"}`}>
                {destination === "/my-cart" && (
                    <p
                        className="absolute -top-2 right-0 z-10 bg-[#10b981]/50 backdrop-blur 
                            border border-[hsl(160,84%,30%)] w-[1.4rem] h-[1.4rem] rounded-full 
                            flex justify-center items-center text-xs text-[hsl(160,84%,10%)]"
                    >
                        {cartLength}
                    </p>
                )}
                <img className="mx-auto group-hover:brightness-[0.75] transitions" src={navItemImg} alt={`${navItemText}' icon`} />
                <span className="text-center text-sm text-gray-400 tracking-wide font-light group-hover:brightness-[0.7] transitions">
                    {navItemText}
                </span>
            </Link>
        </li>
    );
};
