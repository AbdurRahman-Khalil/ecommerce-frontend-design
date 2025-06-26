import { useState } from "react";

import useProductsStore from "../../../../store/products/ProductsStore";

import { Collapsible } from "./Collapsible";

import tick from "../../../../assets/svgs/rating_filter_svgs/tick.svg";
import untick from "../../../../assets/svgs/rating_filter_svgs/untick.svg";



export const BrandFilter = ({ filters, updateCheckbox }) => {
    const products = useProductsStore((state) => state.products);
    const [showAll, setShowAll] = useState(false);

    const allBrands = Array.from(new Set(products.map((p) => p.brand))).sort();
    const visibleBrands = showAll ? allBrands : allBrands.slice(0, 6);


    return (
        <Collapsible title="Brands" initialOpen={true} marginBottom={"mb-[1.35rem]"}>
            <ul className="space-y-2">
                {visibleBrands.map((brand) => {
                    const isChecked = filters.brand.includes(brand);
                    return (
                        <li
                            key={brand}
                            className="cursor-pointer text-[#1c1c1c] hover:text-[hsl(0,0%,36%)]"
                            onClick={() => updateCheckbox("brand", brand)}
                        >
                            <label className="inline-flex gap-3 items-center cursor-pointer">
                                <img
                                    src={isChecked ? tick : untick}
                                    alt={isChecked ? "Checked" : "Unchecked"}
                                />
                                <span className="select-none">{brand}</span>
                            </label>
                        </li>
                    );
                })}
            </ul>

            {allBrands.length > 6 && (
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="text-[#0D6EFD] mt-2 hover:underline"
                >
                    {showAll ? "See less" : "See all"}
                </button>
            )}
        </Collapsible>
    );
};








// import { useState } from "react";
// import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence

// import useProductsStore from "../../../../store/products/ProductsStore";

// import { Collapsible } from "./Collapsible";

// import tick from "../../../../assets/svgs/rating_filter_svgs/tick.svg";
// import untick from "../../../../assets/svgs/rating_filter_svgs/untick.svg";


// export const BrandFilter = ({ filters, updateCheckbox }) => {
//     const products = useProductsStore((state) => state.products);
//     const [showAll, setShowAll] = useState(false);

//     const allBrands = Array.from(new Set(products.map((p) => p.brand))).sort();
//     const visibleBrands = showAll ? allBrands : allBrands.slice(0, 6);

//     // Define animation variants for the brand list
//     const listVariants = {
//         hidden: { opacity: 0, height: 0, overflow: 'hidden' },
//         visible: { opacity: 1, height: 'auto', overflow: 'visible' },
//     };

//     return (
//         <Collapsible title="Brands" initialOpen={true} marginBottom={"mb-[1.35rem]"}>
//             <AnimatePresence mode='wait'> {/* Use AnimatePresence for the list */}
//                 {/*
//                     The key prop is crucial for AnimatePresence to detect when the content changes.
//                     We'll change the key based on showAll to trigger the animation.
//                 */}
//                 <motion.ul
//                     key={showAll ? "allBrands" : "visibleBrands"} // Key changes when showAll changes
//                     initial="hidden"
//                     animate="visible"
//                     exit="hidden"
//                     variants={listVariants}
//                     transition={{ duration: 0.3, ease: "easeInOut" }}
//                     className="space-y-2"
//                 >
//                     {visibleBrands.map((brand) => {
//                         const isChecked = filters.brand.includes(brand);
//                         return (
//                             <li
//                                 key={brand}
//                                 className="cursor-pointer text-[#1c1c1c] hover:text-[hsl(0,0%,36%)]"
//                                 onClick={() => updateCheckbox("brand", brand)}
//                             >
//                                 <label className="inline-flex gap-3 items-center cursor-pointer">
//                                     <img
//                                         src={isChecked ? tick : untick}
//                                         alt={isChecked ? "Checked" : "Unchecked"}
//                                     />
//                                     <span className="select-none">{brand}</span>
//                                 </label>
//                             </li>
//                         );
//                     })}
//                 </motion.ul>
//             </AnimatePresence>


//             {allBrands.length > 6 && (
//                 <button
//                     onClick={() => setShowAll(!showAll)}
//                     className="text-[#0D6EFD] mt-2 hover:underline"
//                 >
//                     {showAll ? "See less" : "See all"}
//                 </button>
//             )}
//         </Collapsible>
//     );
// };