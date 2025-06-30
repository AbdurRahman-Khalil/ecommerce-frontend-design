import { useEffect } from "react";

import { CartHeader } from "../components/main/my_cart/CartHeader";
import { CartProducts } from "../components/main/my_cart/cart_products/CartProducts";
import { Features } from "../components/main/my_cart/features/Features";
import { SavedProducts } from "../components/main/my_cart/saved_products/SavedProducts";
import { BlueBanner } from "../components/BlueBanner";


export const MyCart = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section aria-label="Shopping Cart" className="-mt-[2.5rem]">
            <CartHeader />
            <CartProducts />
            <Features />
            <SavedProducts />
            <BlueBanner />
        </section>
    );
};