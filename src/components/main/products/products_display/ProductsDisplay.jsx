import { useEffect, useState, useRef } from "react";

import useProductsStore from "../../../../store/products/ProductsStore";
import useSearchStore from "../../../../store/search/SearchStore";

import { DisplayRangeInfo } from "./DisplayRangeInfo";
import { CustomCheckbox } from "../CustomCheckbox";
import { ListGridBtns } from "../list_grid_btns/ListGridBtns";
import { ListView } from "../list_view/ListView";
import { GridView } from "../grid_view/GridView";
import { ProductsShowDropdown } from "./ProductsShowDropdown";
import { PaginationNumbers } from "./PaginationNumbers";



export const ProductsDisplay = ({ filters }) => {
    const products = useProductsStore((state) => state.products);
    const viewMode = useProductsStore((state) => state.viewMode);
    const searchQuery = useSearchStore((state) => state.searchQuery);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(10);


    // Custom rating range logic
    const isRatingInRange = (rating, star) => {
        if (star === 2) return rating >= 2.0 && rating <= 2.5;
        if (star === 3) return rating > 2.5 && rating <= 3.5;
        if (star === 4) return rating > 3.5 && rating <= 4.5;
        if (star === 5) return rating > 4.5 && rating <= 5.0;
        return false;
    };

    const filteredProducts = products.filter((product) => {
        const { category, brand, minPrice, maxPrice, condition, ratings } = filters;

        // Filter products
        const matchCategory = category.length === 0 || category.includes(product.category);
        const matchBrand = brand.length === 0 || brand.includes(product.brand);
        const matchPrice = product.discountedPrice >= minPrice && product.discountedPrice <= maxPrice;
        const matchCondition = condition.length === 0 || condition.includes(product.condition);
        const matchRating =
            ratings.length === 0 ||
            ratings.some((star) => isRatingInRange(product.rating ?? 0, star));

        // Search products 
        const searchedProducts = searchQuery === ""
            ? product
            : product.title.toLowerCase().includes(searchQuery);

        return matchCategory && matchBrand && matchPrice && matchCondition && matchRating && searchedProducts;
    });


    // Pagination logic
    const totalProducts = products.length;
    const totalFiltered = filteredProducts.length;
    const totalPages = Math.ceil(totalFiltered / productsPerPage);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const start = totalFiltered === 0 ? 0 : indexOfFirstProduct + 1;
    const end = Math.min(indexOfLastProduct, totalFiltered);

    const shouldHidePagination = totalPages <= 1;

    // 🟢 Reset to page 1 when filtered data changes
    const prevFiltersRef = useRef("");

    useEffect(() => {
        const currentFilters = JSON.stringify(filters);
        const prevFilters = prevFiltersRef.current;

        // Only reset page if filters truly changed
        if (currentFilters !== prevFilters) {
            setCurrentPage(1);
            prevFiltersRef.current = currentFilters;
        }
    }, [filters]);

    // 🔝 Scroll to top when pagination changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [currentPage, productsPerPage]);


    return (
        <main className="p-6 pt-0 pr-2 flex-1">
            <div className="flex justify-between items-center bg-[#FFFFFF] p-[0.575rem] pl-[1.15rem] border border-[#DEE2E7] rounded-md">
                <DisplayRangeInfo
                    start={start}
                    end={end}
                    totalFiltered={totalFiltered}
                    totalProducts={totalProducts}
                />
                <div className="flex items-center gap-[1.15rem]">
                    <CustomCheckbox label="Verified only" />
                    <ListGridBtns />
                </div>
            </div>

            {/* Products */}
            <div className="my-5">
                {totalFiltered === 0 ? (
                    <p className="text-lg text-gray-500 text-center font-medium my-20">
                        No products match your current filters — Try adjusting them to see more results.
                    </p>
                ) : (
                    viewMode === "list"
                        ? <ListView filteredProducts={currentProducts} />
                        : <GridView filteredProducts={currentProducts} />
                )}
            </div>

            {/* Pagination */}
            {!shouldHidePagination && (
                <div id="pagination" className="flex items-center justify-end gap-2.5 mt-[1.9rem]">
                    {/* Dropdown */}
                    <ProductsShowDropdown
                        productsPerPage={productsPerPage}
                        setProductsPerPage={setProductsPerPage}
                        setCurrentPage={setCurrentPage}
                    />

                    {/* Pagination Numbers */}
                    <PaginationNumbers
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                        totalPages={totalPages}
                    />
                </div>
            )}
        </main>
    );
};

