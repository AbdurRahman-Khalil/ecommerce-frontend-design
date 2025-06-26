import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Rating } from "../Rating";
import { Dot } from "../Dot";
import { RandomOrdersSolds } from "../RandomOrdersSolds";
import { SaveOrCartBtn } from "../save_cart_btns/SaveOrCartBtn";

import genSmallCaseCategory from "../../../../helpers/genSmallCaseCategory";



export const ListProduct = ({ product }) => {

    return (
        <motion.li
            className="flex items-center p-2 bg-white border border-[#DEE2E7] rounded-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
        >
            <div className="w-[13.125rem] h-[13.125rem] rounded-md">
                <img src={product.image} className="w-full h-full object-cover rounded-md" alt={`${product.title}'s image`} />
            </div>
            <div className="flex-1 pl-[1.1rem] pr-3">
                <h2 className="font-medium leading-[1.375rem] mb-4">{product.title}</h2>
                <div className="flex items-center gap-2 mb-[0.035rem]">
                    <p className="text-xl font-semibold leading-7">{`$${product.discountedPrice}`}</p>
                    <p className="text-[#8B96A5] font-semibold line-through">{`$${product.originalPrice}.00`}</p>
                </div>
                <div className="flex items-center gap-2.5 mb-2.5">
                    <Rating productId={product.id} totalRating={product.rating} />
                    <Dot />
                    <RandomOrdersSolds ordersSoldsText={"orders"} />
                    <Dot />
                    <p className="text-[#00B517]">Free Shipping</p>
                </div>
                <p className="text-[#505050] line-clamp-2 mb-1.5">{product.description}</p>
                <Link
                    to={`/products/${genSmallCaseCategory(product.category)}/${product.id}`}
                    className="font-medium leading-[100%] text-[hsl(216,98%,52%)] hover:text-[hsl(216,98%,62%)] transitions"
                >
                    View details
                </Link>
            </div>
            <div className="self-start space-y-2 mt-[0.7rem] mr-[0.65rem]">
                <SaveOrCartBtn product={product} whichIcon={"outlinedCart"} />
                <SaveOrCartBtn product={product} whichIcon={"outlinedHeart"} />
            </div>
        </motion.li>
    );
};
