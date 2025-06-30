import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { Sidebar } from "../components/main/products/sidebar/Sidebar";
import { ProductsDisplay } from "../components/main/products/products_display/ProductsDisplay";

import rightArrowIcon from "../assets/svgs/products/right_arrow.svg";



export const Products = () => {
    const [filters, setFilters] = useState({
        category: [],
        brand: [],
        minPrice: 0,
        maxPrice: 9999,
        condition: [],
        ratings: [],
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    
    return (
        <section aria-label="Shopping Products" className="min-h-screen">
            <div aria-label="Breadcrumb" className="text-[#8B96A5] flex space-x-1 ml-1 mb-[1.35rem]">
                <Link to={"/"} className="-mt-0.5 hover:underline">Home</Link>
                <img src={rightArrowIcon} alt="right arrow icon" />
                <p className="-mt-0.5">Products</p>
            </div>
            <div className="flex">
                <Sidebar filters={filters} setFilters={setFilters} />
                <ProductsDisplay filters={filters} />
            </div>
        </section>
    );
};


