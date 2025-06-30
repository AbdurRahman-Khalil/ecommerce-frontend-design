import useProductsStore from "../../../../store/products/ProductsStore";

import { SavedProduct } from "./SavedProduct";


export const SavedProducts = () => {
    const savedProducts = useProductsStore((state) => state.savedProducts);

    return (
        <div className="h-max bg-white border border-[#DEE2E7] rounded-md px-5 pt-[1.15rem] pb-[1.4rem]">
            <h4 className="font-semibold text-xl leading-7 mb-[1.3rem]">
                {`Saved for later (${savedProducts.length})`}
            </h4>
            <div
                id="saved-products"
                className="relative before:absolute before:top-0 before:-right-0 before:w-[1.5rem] before:h-full before:bg-gradient-to-r before:from-transparent before:to-white 
                after:absolute after:top-0 after:-left-0 after:w-[1.5rem] after:h-full after:bg-gradient-to-l after:from-transparent after:to-white"
            >
                {
                    savedProducts.length === 0
                        ? (
                            <p>
                                {`No products are saved :(`}
                            </p>
                        ) : (
                            <div
                                className="flex flex-nowrap gap-5 overflow-x-auto [&::-webkit-scrollbar]:h-1.5 scroll-smooth
                                [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300
                                    [&::-webkit-scrollbar-track]:rounded-2xl [&::-webkit-scrollbar-thumb]:rounded-2xl px-2.5"
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
