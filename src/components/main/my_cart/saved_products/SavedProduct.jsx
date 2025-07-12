import useProductsStore from "../../../../store/products/ProductsStore";

import { CustomOutlinedCartIcon } from "./CustomOutlinedCartIcon";



export const SavedProduct = ({ product }) => {
    const cart = useProductsStore((state) => state.cart);
    const addToCart = useProductsStore((state) => state.addToCart);
    const unSaveProduct = useProductsStore((state) => state.unSaveProduct);

    const isInCart = cart.find(prod => prod.id === product?.id);

    const handleAddToCart = () => {
        const newItem = {
            id: product.id,
            title: product.title,
            category: product.category,
            brand: product.brand,
            price: product.price,
            totalPrice: product.totalPrice,
            image: product.image,
            quantity: product.quantity,
        };

        addToCart(newItem);
    };


    return (
        <div className="w-[270px] h-max mb-5">
            <div className="w-[270px] h-60 rounded-lg">
                <img
                    src={product.image}
                    className="w-full h-full object-cover rounded-lg"
                    alt={`${product.title}'s image`}
                />
            </div>
            <div className="px-0.5 pt-3.5">
                <p className="font-semibold text-[#1C1C1C] text-lg leading-[100%] mb-[0.7rem] pl-0.5">{`$${product.price}`}</p>
                <p className="text-[#606060] mb-[0.75rem] line-clamp-1 pl-0.5">{product.title}</p>
                <div className="flex justify-between items-center">
                    <button
                        onClick={() => handleAddToCart()}
                        className={`flex justify-center items-center gap-1.5 w-[157px] h-10 border border-[#DEE2E7] rounded-md transitions
                        ${isInCart ? "bg-[hsl(160,84%,39%)] hover:bg-[hsl(160,84%,45%)]" : "bg-white hover:bg-[hsl(160,84%,95%)]"}
                        `}
                    >
                        <span className={`${isInCart ? "text-white" : "text-[hsl(160,84%,39%)]"} font-medium leading-[100%]`}>
                            {
                                isInCart ? "Moved to" : "Move to"
                            }
                        </span>
                        {
                            isInCart
                                ? <CustomOutlinedCartIcon cartColor={"#ffffff"} />
                                : <CustomOutlinedCartIcon cartColor={"#10b981"} />
                        }
                    </button>
                    <button
                        onClick={() => unSaveProduct(product.id)}
                        className="w-24 h-10 text-[hsl(0,95%,59%)] font-medium leading-[100%] border border-[#DEE2E7] bg-white hover:bg-[hsl(0,95%,95%)] transitions rounded-md shadow-sm"
                    >
                        Unsave
                    </button>
                </div>
            </div>
        </div>
    );
};