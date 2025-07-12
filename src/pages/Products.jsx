import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { FiltersBar } from "../components/main/products/filtersbar/FiltersBar";
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
        <section aria-label="Shopping Products" className="min-h-screen max-[1212px]:mx-5">
            <div aria-label="Breadcrumb" className="text-[#8B96A5] flex space-x-1 ml-1 mb-[1.35rem]">
                <Link to={"/"} className="-mt-0.5 hover:underline">Home</Link>
                <img src={rightArrowIcon} alt="right arrow icon" />
                <p className="-mt-0.5">Products</p>
            </div>
            <div className="flex gap-7">
                <FiltersBar filters={filters} setFilters={setFilters} />
                <ProductsDisplay filters={filters} />
            </div>
        </section>
    );
};


