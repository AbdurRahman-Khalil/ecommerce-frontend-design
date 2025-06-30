import { useState, useEffect } from 'react';

import topArrowIcon from "../assets/svgs/cart/cart_products/back_arrow.svg";


export const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };


    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-4 right-4 text-[1.9rem] text-sky-900 dark:text-sky-100 px-2 py-3 primary-gradient shadow-2xl border border-sky-400/70 dark:border-sky-400 rounded-full 
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transform transition-all duration-900 ease-in-out
                `}
            style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
        >
            <img src={topArrowIcon} className=" rotate-90" alt="top arrow icon" />
        </button>
    );
};
