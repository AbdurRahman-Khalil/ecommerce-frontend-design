import { Link } from "react-router-dom";

import useProductsStore from "../../../../store/products/ProductsStore";

import { CartProduct } from "./CartProduct";
import { Coupon } from "./Coupon";
import { TotalAmounts } from "./TotalAmounts";

import emtpyCartImg from "../../../../assets/images/cart/empty_cart_icon.png";

import backArrowIcon from "../../../../assets/svgs/cart/cart_products/back_arrow.svg";



export const CartProducts = () => {
    const cart = useProductsStore((state) => state.cart);
    const clearCart = useProductsStore((state) => state.clearCart);

    return (
        <div className="flex gap-5">
            <div id="cart-products" className="flex-1 bg-white h-max space-y-5 transitions px-[1.1rem] py-5 border border-[#DEE2E7] rounded-md shadow-md">
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
            <div className="w-[280px] space-y-3">
                <Coupon />
                <TotalAmounts />
            </div>
        </div>
    );
};
