import { useEffect } from "react";

import { useLocation } from "react-router-dom";

import { HeroSection } from "../components/main/home/hero_section/HeroSection";
import { SalesSection } from "../components/main/home/sales_section/SalesSection";
import { BlockItems } from "../components/main/home/block_items/BlockItems";
import { InquirySection } from "../components/main/home/inquiry_section/InquirySection";
import { RecommendSection } from "../components/main/home/recommend_section/RecommendSection";
import { ServiceSection } from "../components/main/home/service_section/ServiceSection";
import { CountrySection } from "../components/main/home/country_section/CountrySection";



export const Homepage = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash === '#inquiry-section') {
            const element = document.getElementById('inquiry-section');
            if (element) {
                const offset = 155;
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
        <div id="homepage">
            <HeroSection />
            <SalesSection />
            <BlockItems />
            <InquirySection />
            <RecommendSection />
            <ServiceSection />
            <CountrySection />
        </div>
    );
};
