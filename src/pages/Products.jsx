import { useState } from "react";

import { Sidebar } from "../components/main/products/sidebar/Sidebar";
import { ProductsDisplay } from "../components/main/products/products_display/ProductsDisplay";


export const Products = () => {
    const [filters, setFilters] = useState({
        category: [],
        brand: [],
        minPrice: 0,
        maxPrice: 9999,
        condition: [],
        ratings: [],
    });

    return (
        <section aria-label="Shopping Products" className="flex min-h-screen">
            <Sidebar filters={filters} setFilters={setFilters} />
            <ProductsDisplay filters={filters} />
        </section>
    );
};


