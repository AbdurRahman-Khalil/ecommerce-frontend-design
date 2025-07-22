import { useMemo } from "react";

import { RelatedProduct } from "./RelatedProduct";

import shuffleArray from "../../../../helpers/shuffleArray";



export const RelatedProducts = ({ products }) => {
    const relatedProducts = useMemo(() => shuffleArray(products).slice(14, 20), []);

    return (
        <div
            aria-label="Related Products"
            className="h-max bg-white border border-[#DEE2E7] rounded-md pt-[0.9rem] mt-[1.3rem] space-y-[1.05rem]
            max-[1212px]:border-x-none max-[1212px]:rounded-none"
        >
            <h4 className="font-semibold text-xl leading-7 text-[#1C1C1C] ml-[1.2rem] w-max">
                Related products
            </h4>
            <div className="group">
                <div
                    className="flex flex-nowrap gap-5 pb-[1.35rem] px-[1.2rem]
                        overflow-x-auto scroll-smooth
                        [&::-webkit-scrollbar-thumb]:invisible group-hover:[&::-webkit-scrollbar-thumb]:visible
                        [&::-webkit-scrollbar-track]:invisible group-hover:[&::-webkit-scrollbar-track]:visible
                        [&::-webkit-scrollbar]:h-[0.2rem] [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300
                        hover:[&::-webkit-scrollbar-thumb]:cursor-grab active:[&::-webkit-scrollbar-thumb]:cursor-grabbing
                        max-[1212px]:justify-between max-[1186px]:pb-[1.1rem]"
                >
                    {
                        relatedProducts.map(product => (
                            <RelatedProduct key={product.id} product={product} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};