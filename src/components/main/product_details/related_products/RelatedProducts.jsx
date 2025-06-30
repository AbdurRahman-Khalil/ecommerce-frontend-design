import { useMemo } from "react";

import { RelatedProduct } from "./RelatedProduct";

import shuffleArray from "../../../../helpers/shuffleArray";



export const RelatedProducts = ({ products }) => {
    const relatedProducts = useMemo(() => shuffleArray(products).slice(14, 20), []);

    return (
        <div className="h-max bg-white border border-[#DEE2E7] rounded-md px-[1.2rem] pt-[1.3rem] pb-[1.35rem] mt-[1.3rem]">
            <h4 className="font-semibold text-xl leading-7 text-[#1C1C1C]">
                Related products
            </h4>
            <div className="flex gap-5 mt-[0.95rem]">
                {
                    relatedProducts.map(product => (
                        <RelatedProduct key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    );
};