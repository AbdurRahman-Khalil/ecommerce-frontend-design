import { useMemo } from "react";

import { YouMayLikeProduct } from "./YouMayLikeProduct";

import shuffleArray from "../../../../helpers/shuffleArray";


export const YouMayLikeProducts = ({ products }) => {
    const youMayLikeProducts = useMemo(() => shuffleArray(products).slice(35, 40), []);

    return (
        <div
            aria-label="You may like Products"
            className="w-[280px] h-max pt-3 pb-[1.1rem] bg-white border border-[#DEE2E7] rounded-md space-y-4
            max-[1212px]:border-r-0 max-[1212px]:rounded-e-none max-[735px]:border-l-0 max-[735px]:rounded-s-none
            max-[735px]:w-full max-[735px]:px-0 max-[735px]:pb-0"
        >
            <h6 className="font-semibold text-[#1C1C1C] ml-4 max-[735px]:ml-5">You may like</h6>
            <div className="group">
                <div
                    id="you-may-like-products"
                    className="space-y-[1.05rem] ml-4 mr-[1.4rem] max-[735px]:mx-0 
                        overflow-x-auto scroll-smooth
                        [&::-webkit-scrollbar-thumb]:invisible group-hover:[&::-webkit-scrollbar-thumb]:visible
                        [&::-webkit-scrollbar-track]:invisible group-hover:[&::-webkit-scrollbar-track]:visible
                        [&::-webkit-scrollbar]:h-[0.2rem] [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300
                        hover:[&::-webkit-scrollbar-thumb]:cursor-grab active:[&::-webkit-scrollbar-thumb]:cursor-grabbing
                        max-[735px]:space-y-0 max-[735px]:flex max-[735px]:flex-nowrap max-[735px]:gap-6
                        max-[735px]:[&>div:first-child]:rounded-s-none max-[735px]:[&>div:first-child>div>img]:rounded-s-none
                        max-[735px]:pb-3 max-[735px]:pr-[1.4rem]"
                >
                    {
                        youMayLikeProducts.map(product => (
                            <YouMayLikeProduct key={product.id} product={product} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
