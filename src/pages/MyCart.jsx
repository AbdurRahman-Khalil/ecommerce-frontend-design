import { useEffect } from "react";

import { useLocation } from "react-router-dom";

import { CartHeader } from "../components/main/my_cart/CartHeader";
import { CartProducts } from "../components/main/my_cart/cart_products/CartProducts";
import { Features } from "../components/main/my_cart/features/Features";
import { SavedProducts } from "../components/main/my_cart/saved_products/SavedProducts";
import { BlueBanner } from "../components/BlueBanner";



export const MyCart = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash === '#saved-products') {
            const element = document.getElementById('saved-products');
            if (element) {
                const offset = 100;
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - offset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);
    

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