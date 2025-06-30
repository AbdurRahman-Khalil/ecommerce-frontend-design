import { useMemo } from "react";

import { YouMayLikeProduct } from "./YouMayLikeProduct";

import shuffleArray from "../../../../helpers/shuffleArray";


export const YouMayLikeProducts = ({ products }) => {
    const youMayLikeProducts = useMemo(() => shuffleArray(products).slice(35, 40), []);

    return (
        <div className="w-[280px] h-max p-4 pb-[1.1rem] pr-[1.4rem] bg-white border border-[#DEE2E7] rounded-md">
            <h6 className="font-semibold text-[#1C1C1C]">You may like</h6>
            <div id="you-may-like-products" className="space-y-[1.05rem] mt-3">
                {
                    youMayLikeProducts.map(product => (
                        <YouMayLikeProduct key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    );
};
