import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Rating } from "../Rating";
import { SaveOrCartBtn } from "../save_cart_btns/SaveOrCartBtn";

import genSmallCaseCategory from "../../../../helpers/genSmallCaseCategory";



export const GridProduct = ({ product }) => {
    return (
        <motion.div
            className="bg-white border border-[#DEE2E7] rounded-md"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
        >
            <Link
                to={`/products/${genSmallCaseCategory(product.category)}/${product.id}`}
            >
                <div className="w-full h-[14.5rem] max-[407px]:h-[16.5rem] min-[408px]:max-[535px]:h-[19rem] min-[600px]:max-[791px]:h-[16.5rem] min-[935px]:max-[1059px]:h-[16.5rem] rounded-md p-2.5 transitions">
                    <img src={product.image} className="w-full h-full object-cover rounded-md" alt="" />
                </div>
            </Link>
            <div className="space-y-4 px-[1.05rem] pt-[0.375rem] pb-[1.1rem]">
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <p className="text-lg font-semibold leading-[100%]">{`$${product.discountedPrice}`}</p>
                        <p className="text-[#8B96A5] line-through">{`$${product.originalPrice}.00`}</p>
                    </div>
                    <Rating productId={product.id} totalRating={product.rating} />
                    <p className="text-[#606060]">{product.title}</p>
                </div>
                <div className="flex items-center gap-2">
                    <SaveOrCartBtn product={product} whichIcon={"outlinedCart"} />
                    <SaveOrCartBtn product={product} whichIcon={"outlinedHeart"} />
                </div>
            </div>
        </motion.div>
    );
};
