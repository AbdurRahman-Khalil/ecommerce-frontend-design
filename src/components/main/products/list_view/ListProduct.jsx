import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { useMediaQuery } from "../../../../hooks/useMediaQuery";

import { Rating } from "../Rating";
import { Dot } from "../Dot";
import { RandomOrdersSolds } from "../RandomOrdersSolds";
import { SaveOrCartBtn } from "../save_cart_btns/SaveOrCartBtn";

import genSmallCaseCategory from "../../../../helpers/genSmallCaseCategory";



export const ListProduct = ({ product }) => {
    const isNineEightyFourPx = useMediaQuery("(min-width: 935px) and (max-width: 984px)");
    const isSevenNineteenPx = useMediaQuery("(min-width: 641px) and (max-width: 719px)");
    const isFiveFiftyNinePx = useMediaQuery("(max-width: 559px)");

    return (
        <motion.li
            className={`${(isNineEightyFourPx || isSevenNineteenPx || isFiveFiftyNinePx) && "relative"} 
                flex items-center p-2 bg-white border border-[#DEE2E7] rounded-md max-[466px]:p-1.5
            `}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
        >
            <Link
                to={`/products/${genSmallCaseCategory(product.category)}/${product.id}`}
            >
                <div
                    className="w-[13.125rem] h-[13.125rem] rounded-md transitions
                    max-[624px]:w-[10.5rem] max-[624px]:h-[10.5rem] max-[466px]:w-[6.25rem] max-[466px]:h-[6.25rem]"
                >
                    <img src={product.image} className="w-full h-full object-cover rounded-md" alt={`${product.title}'s image`} />
                </div>
            </Link>
            <div className="flex-1 pl-[1.1rem] pr-3 max-[624px]:pl-[0.975rem] max-[466px]:pl-[0.85rem]">
                <h2 className="font-medium leading-[1.375rem] mb-4 max-[466px]:font-normal max-[466px]:mb-0.5 max-[391px]:line-clamp-1">
                    {product.title}
                </h2>
                <div className="flex items-center gap-2 mb-[0.035rem] max-[466px]:mb-[0.08rem]">
                    <p className="text-xl font-semibold leading-7 max-[466px]:text-base max-[466px]:leading-[100%]">
                        {`$${product.discountedPrice}`}
                    </p>
                    <p className="text-[#8B96A5] font-semibold line-through max-[466px]:text-sm max-[466px]:font-medium">
                        {`$${product.originalPrice}.00`}
                    </p>
                </div>
                <div className="flex items-center gap-2.5 mb-2.5 max-[657px]:flex-wrap max-[657px]:gap-y-1 max-[466px]:gap-y-0.5 max-[466px]:mb-1">
                    <Rating
                        productId={product.id}
                        totalRating={product.rating}
                        isSmall={"max-[466px]:text-[13px] max-[466px]:mt-1"}
                    />
                    <Dot />
                    <RandomOrdersSolds ordersSoldsText={"orders"} isSmall={"max-[466px]:text-[13px]"} />
                    <Dot />
                    <p className="text-[#00B517] max-[466px]:text-[13px]">
                        Free Shipping
                    </p>
                </div>
                <p className="text-[#505050] line-clamp-2 mb-1.5 max-[657px]:line-clamp-1 max-[624px]:hidden">{product.description}</p>
                <Link
                    to={`/products/${genSmallCaseCategory(product.category)}/${product.id}`}
                    className="font-medium leading-[100%] text-[hsl(216,98%,52%)] hover:text-[hsl(216,98%,62%)] transitions
                    max-[466px]:hidden"
                >
                    View details
                </Link>
            </div>
            <div className={
                (isNineEightyFourPx || isSevenNineteenPx || isFiveFiftyNinePx)
                    ? `absolute ${isFiveFiftyNinePx ? "bottom-[1.15rem]" : "top-[1.15rem]"} right-[1.15rem] flex gap-2`
                    : "self-start mt-[0.7rem] mr-[0.65rem] space-y-2"
            }>
                <SaveOrCartBtn
                    product={product}
                    whichIcon={"outlinedCart"}
                    hideSeekCart={"max-[484px]:hidden"}
                />
                <SaveOrCartBtn
                    product={product}
                    whichIcon={"outlinedHeart"}
                    hideSeekHeart={"max-[490px]:hidden"}
                />
            </div>
        </motion.li>
    );
};
