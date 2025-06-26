import { HeroSection } from "../components/main/home/hero_section/HeroSection";
import { SalesSection } from "../components/main/home/sales_section/SalesSection";
import { BlockItems } from "../components/main/home/block_items/BlockItems";
import { InquirySection } from "../components/main/home/inquiry_section/InquirySection";
import { RecommendSection } from "../components/main/home/recommend_section/RecommendSection";
import { ServiceSection } from "../components/main/home/service_section/ServiceSection";
import { CountrySection } from "../components/main/home/country_section/CountrySection";



export const Homepage = () => {
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
