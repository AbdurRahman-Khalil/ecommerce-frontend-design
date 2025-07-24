import useProductsStore from "../../../../store/products/ProductsStore";

import { IncrementDecrementBtn } from "./IncrementDecrementBtn";



export const CartProduct = ({ product }) => {
    const decreaseQuantity = useProductsStore((state) => state.decreaseQuantity);
    const increaseQuantity = useProductsStore((state) => state.increaseQuantity);
    const removeFromCart = useProductsStore((state) => state.removeFromCart);
    const saveProduct = useProductsStore((state) => state.saveProduct);
    const unSaveProduct = useProductsStore((state) => state.unSaveProduct);
    const savedProducts = useProductsStore((state) => state.savedProducts);

    const isSaved = savedProducts.some((item) => item.id === product?.id);

    const handleSaveProduct = () => {
        if (isSaved) {
            unSaveProduct(product.id);
            return;
        }

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

        saveProduct(newItem);
    };


    return (
        <div
            aria-label="Cart Product"
            id="cart-product"
            className="flex justify-between pb-5 border-b border-[hsl(213,16%,83%)]
                max-[474px]:flex-col max-[474px]:gap-y-3"
        >
            <div className="flex gap-3">
                <div className="w-20 h-20 border border-[#E0E0E0] rounded-md">
                    <img src={product.image} className="w-full h-full object-cover rounded-md" alt={`${product.title}'s image`} />
                </div>
                <div>
                    <p className="font-medium text-[#1c1c1c] leading-[1.375rem] mb-1.5">{product.title}</p>
                    <div className="text-[#8B96A5] flex">
                        <p>{`${product.category},`}</p>
                        &nbsp;
                        <p>{product.brand}</p>
                    </div>
                    <p className="text-[#8B96A5] mb-2.5">Seller:  Artel Market</p>
                    <div className="space-x-2 max-[474px]:hidden">
                        <button
                            onClick={() => removeFromCart(product.id)}
                            className="w-[4.375rem] h-[1.875rem] text-[hsl(0,95%,59%)] font-medium text-[13px] leading-[100%] border border-[#DEE2E7] bg-white hover:bg-[hsl(0,95%,95%)] transitions rounded-md shadow-sm"
                        >
                            Remove
                        </button>
                        <button
                            onClick={() => handleSaveProduct()}
                            className={`w-[105px] h-[1.875rem] font-medium text-[13px] leading-[100%] border border-[#DEE2E7] transitions rounded-md shadow-sm
                                ${isSaved ? "text-[hsl(0,0%,100%)] bg-[hsl(216,98%,60%)] hover:bg-[hsl(216,98%,66%)]" : "text-[hsl(216,98%,52%)] bg-white hover:bg-[hsl(216,98%,95%)]"}
                            `}
                        >
                            {isSaved ? "Saved" : "Save for later"}
                        </button>
                    </div>
                </div>
            </div>
            <div
                aria-label="Product quantity increaser and decreaser"
                className="flex flex-col items-center justify-between
                    max-[474px]:flex-row min-[376px]:max-[474px]:justify-start max-[474px]:gap-10"
            >
                <p className="current-price font-medium leading-[1.375rem]">{`$${product.price}`}</p>
                <div className="quantity flex justify-between items-center border border-[hsl(213,16%,85%)] rounded-lg h-[2.15rem] w-24">
                    <IncrementDecrementBtn
                        ariaLabel={"decreaseButton"}
                        onClick={() => decreaseQuantity(product.id)}
                        roundedClass={"rounded-s-lg"}
                    />

                    <p className="font-medium text-[0.9rem]">{product.quantity}</p>

                    <IncrementDecrementBtn
                        ariaLabel={"increaseButton"}
                        onClick={() => increaseQuantity(product.id)}
                        roundedClass={"rounded-e-lg"}
                    />
                </div>
                <p className="total-price font-medium">{`$${Number(product.totalPrice).toFixed(2)}`}</p>
            </div>
            <div className="space-x-2 mt-[0.7rem] min-[475px]:hidden">
                <button
                    onClick={() => removeFromCart(product.id)}
                    className="w-[4.375rem] h-[1.875rem] text-[hsl(0,95%,59%)] font-medium text-[13px] leading-[100%] border border-[#DEE2E7] bg-white hover:bg-[hsl(0,95%,95%)] transitions rounded-md shadow-sm"
                >
                    Remove
                </button>
                <button
                    onClick={() => handleSaveProduct()}
                    className={`w-[105px] h-[1.875rem] font-medium text-[13px] leading-[100%] border border-[#DEE2E7] transitions rounded-md shadow-sm
                                ${isSaved ? "text-[hsl(0,0%,100%)] bg-[hsl(216,98%,60%)] hover:bg-[hsl(216,98%,66%)]" : "text-[hsl(216,98%,52%)] bg-white hover:bg-[hsl(216,98%,95%)]"}
                            `}
                >
                    {isSaved ? "Saved" : "Save for later"}
                </button>
            </div>
        </div>
    );
};
