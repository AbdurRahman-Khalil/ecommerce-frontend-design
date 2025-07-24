import { Link } from "react-router-dom";

import useProductsStore from "../../../../store/products/ProductsStore";

import { useMediaQuery } from "../../../../hooks/useMediaQuery";

import { CartProduct } from "./CartProduct";
import { Coupon } from "./Coupon";
import { TotalAmounts } from "./TotalAmounts";

import emtpyCartImg from "../../../../assets/images/cart/empty_cart_icon.png";

import backArrowIcon from "../../../../assets/svgs/cart/cart_products/back_arrow.svg";



export const CartProducts = () => {
    const cart = useProductsStore((state) => state.cart);
    const clearCart = useProductsStore((state) => state.clearCart);

    const isLessTablet = useMediaQuery("(min-width: 577px) and (max-width: 767px)");


    return (
        <div className="flex gap-5 max-[767px]:flex-wrap">
            <div
                aria-label="Cart Products"
                id="cart-products"
                className="flex-1 bg-white h-max space-y-5 transitions px-5 py-[1.35rem] border border-[#DEE2E7] rounded-md shadow-md
                    max-[1212px]:border-l-none max-[1212px]:rounded-s-none max-[767px]:min-w-full
                    max-[767px]:border-r-none max-[767px]:rounded-e-none"
            >
                {
                    cart.length === 0
                        ? (
                            <div className="flex items-center gap-2">
                                <p>Your cart is empty</p>
                                <img src={emtpyCartImg} width={40} alt="empty cart image" />
                            </div>
                        ) : (
                            cart.map((product) => (
                                <CartProduct key={product.id} product={product} />
                            ))
                        )
                }

                <div className="flex justify-between">
                    <Link
                        to={"/products"}
                        className="primary-gradient flex gap-4 justify-between items-center w-max text-white rounded-md pl-3.5 pr-4"
                    >
                        <img src={backArrowIcon} alt="back button icon" />
                        <span>Back to shop</span>
                    </Link>

                    <button
                        onClick={() => clearCart()}
                        className="text-[hsl(0,95%,59%)] w-[115px] h-10 bg-white hover:bg-[hsl(0,95%,95%)] border border-[#DEE2E7] rounded-md transitions"
                    >
                        Remove all
                    </button>
                </div>
            </div>
            <div
                className={isLessTablet
                    ? "w-full flex justify-between gap-5"
                    : "w-[280px] space-y-3 max-[576px]:w-full"
                }
            >
                <Coupon />
                <TotalAmounts />
            </div>
        </div>
    );
};
