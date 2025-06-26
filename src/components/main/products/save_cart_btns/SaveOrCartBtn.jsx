import { useCallback } from "react";

import useProductsStore from "../../../../store/products/ProductsStore";

import outlinedCartIcon from "../../../../assets/svgs/products/outlined_cart.svg";
import filledCartIcon from "../../../../assets/svgs/products/filled_cart.svg";
import outlinedHeartIcon from "../../../../assets/svgs/products/outlined_heart.svg";
import filledHeartIcon from "../../../../assets/svgs/products/filled_heart.svg";



export const SaveOrCartBtn = ({ product, whichIcon }) => {
    const {
        addToCart,
        saveProduct,
        unSaveProduct,
        cart,
        savedProducts
    } = useProductsStore();

    const isInCart = cart.some((item) => item.id === product?.id);
    const isSaved = savedProducts.some((item) => item.id === product?.id);

    // Determine correct icon
    const icon = (() => {
        if (whichIcon === "outlinedCart") {
            return isInCart ? filledCartIcon : outlinedCartIcon;
        } else if (whichIcon === "outlinedHeart") {
            return isSaved ? filledHeartIcon : outlinedHeartIcon;
        }
        return null;
    })();

    const handleClick = useCallback(() => {
        if (!product) return;

        if (whichIcon === "outlinedCart") {
            const newItem = {
                id: product.id,
                title: product.title,
                category: product.category,
                brand: product.brand,
                price: product.discountedPrice,
                totalPrice: product.totalPrice,
                image: product.image,
                quantity: product.quantity,
            };
            addToCart(newItem);
        }

        if (whichIcon === "outlinedHeart") {
            if (isSaved) {
                unSaveProduct(product.id);
            } else {
                const newItem = {
                    id: product.id,
                    title: product.title,
                    price: product.discountedPrice,
                    image: product.image,
                };
                saveProduct(newItem);
            }
        }
    }, [product, whichIcon, isSaved]);


    return (
        <button
            onClick={handleClick}
            className={`w-10 h-10 flex justify-center items-center bg-white border border-[#DEE2E7] rounded-md transitions
                ${whichIcon === "outlinedCart" ? "hover:bg-[hsl(160,84%,95%)]" : "hover:bg-[hsl(216,98%,96%)]"} 
            `}
        >
            <img
                src={icon}
                alt={whichIcon === "outlinedCart" ? "cart icon" : "heart icon"}
            />
        </button>
    );
};

