import useProductsStore from "../../../../store/products/ProductsStore";

import { SavedProduct } from "./SavedProduct";


export const SavedProducts = () => {
    const savedProducts = useProductsStore((state) => state.savedProducts);

    return (
        <div
            aria-label="Saved Products"
            id="saved-products"
            className="h-max bg-white border border-[#DEE2E7] rounded-md px-5 pt-[1.05rem]"
        >
            <h4 className="font-semibold text-xl leading-7 mb-[1.15rem]">
                {`Saved for later (${savedProducts.length})`}
            </h4>
            <div
                id="saved-products"
                className="group relative before:absolute before:top-0 before:-right-0 before:w-[1.5rem] before:h-full before:bg-gradient-to-r before:from-transparent before:to-white 
                    after:absolute after:top-0 after:-left-0 after:w-[1.5rem] after:h-full after:bg-gradient-to-l after:from-transparent after:to-white"
            >
                {
                    savedProducts.length === 0
                        ? (
                            <p className="mb-[1.35rem]">
                                {`No products are saved :(`}
                            </p>
                        ) : (
                            <div
                                className="flex flex-nowrap gap-5 overflow-x-auto 
                                    [&::-webkit-scrollbar-track]:invisible [&::-webkit-scrollbar-thumb]:invisible
                                    group-hover:[&::-webkit-scrollbar-track]:visible group-hover:[&::-webkit-scrollbar-thumb]:visible
                                    [&::-webkit-scrollbar]:h-1.5 scroll-smooth
                                    hover:[&::-webkit-scrollbar-thumb]:cursor-grab
                                    active:[&::-webkit-scrollbar-thumb]:cursor-grabbing
                                    [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300
                                    [&::-webkit-scrollbar-track]:rounded-2xl [&::-webkit-scrollbar-thumb]:rounded-2xl px-2.5
                                    "
                            >
                                {
                                    savedProducts.map((product) => (
                                        <SavedProduct key={product.id} product={product} />
                                    ))
                                }
                            </div>
                        )
                }
            </div>
        </div>
    );
};




// max-h-100 overflow-y-auto
//   [&::-webkit-scrollbar]:w-2
//   [&::-webkit-scrollbar-track]:bg-gray-100
//   [&::-webkit-scrollbar-thumb]:bg-gray-300
