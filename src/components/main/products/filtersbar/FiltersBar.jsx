import { useEffect, useRef } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import useAsideBarStore from "../../../../store/asidebar/asideBarStore";

import { useMediaQuery } from "../../../../hooks/useMediaQuery";

import { CategoryFilter } from "./CategoryFilter";
import { BrandFilter } from "./BrandFilter";
import { PriceFilter } from "./PriceFilter";
import { ConditionFilter } from "./ConditionFilter";
import { RatingsFilter } from "./RatingsFilter";

import closeIcon from "../../../../assets/svgs/header_svgs/sidebar/close.svg";



export const FiltersBar = ({ filters, setFilters }) => {
    const { isFilterbarOpen, setIsFilterbarOpen } = useAsideBarStore();

    const asideRef = useRef(null);
    const isMobileFilterbar = useMediaQuery("(max-width: 934px)");

    // Close sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMobileFilterbar && isFilterbarOpen && asideRef.current && !asideRef.current.contains(event.target)) {
                setIsFilterbarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileFilterbar, isFilterbarOpen, setIsFilterbarOpen]);


    const updateCheckbox = (type, value) => {
        const current = filters[type];
        setFilters({
            ...filters,
            [type]: current.includes(value) ? current.filter((v) => v !== value) : [...current, value],
        });
    };

    const resetFilters = () => {
        setFilters({
            category: [],
            brand: [],
            minPrice: 0,
            maxPrice: 9999,
            condition: [],
            ratings: [],
        });
    };

    const handleClose = () => {
        setIsFilterbarOpen(false);
    };

    // FilterBar on 935px width and higher width screens
    if (!isMobileFilterbar) {
        return (
            <aside
                className="w-60 pl-0.5 pb-6 space-y-6 h-[calc(100vh-80px)] sticky top-[8.3rem] overflow-y-auto
                [&::-webkit-scrollbar]:w-0 scroll-smooth [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
            >
                <CategoryFilter filters={filters} updateCheckbox={updateCheckbox} />

                <BrandFilter filters={filters} updateCheckbox={updateCheckbox} />

                <PriceFilter filters={filters} setFilters={setFilters} />

                <ConditionFilter filters={filters} setFilters={setFilters} />

                <RatingsFilter filters={filters} updateCheckbox={updateCheckbox} />

                {/* RESET BUTTON */}
                <div className="pt-4 px-[0.175rem]">
                    <button
                        onClick={resetFilters}
                        className="w-full bg-red-200 hover:bg-red-300/[77%] text-red-600 font-medium py-2 px-4 border-2 border-red-400 rounded-md transitions"
                    >
                        Reset Filters
                    </button>
                </div>
            </aside>
        )
    }

    // FilterBar on 934px width and less width screens
    return (
        <AnimatePresence>
            {isFilterbarOpen && (
                <motion.aside
                    ref={asideRef}
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-100%' }}
                    transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
                    className="fixed top-0 left-0 bottom-0 z-50 pb-6 bg-[hsl(204,45%,96.5%)] w-72 border-r border-[hsl(215,13%,88%,0.9)] 
                    overflow-y-auto [&::-webkit-scrollbar]:w-1.5 scroll-smooth
                    [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300
                    max-[450px]:w-64"
                >
                    <div className="flex justify-between items-center px-5 py-4">
                        <p className="text-lg font-medium">Filter products by:</p>
                        <button id="close-btn" onClick={handleClose}>
                            <img src={closeIcon} alt="close icon" />
                        </button>
                    </div>
                    <div className="space-y-6">
                        <CategoryFilter filters={filters} updateCheckbox={updateCheckbox} />

                        <BrandFilter filters={filters} updateCheckbox={updateCheckbox} />

                        <PriceFilter filters={filters} setFilters={setFilters} />

                        <ConditionFilter filters={filters} setFilters={setFilters} />

                        <RatingsFilter filters={filters} updateCheckbox={updateCheckbox} />

                        {/* RESET BUTTON */}
                        <div className="pt-4 px-5">
                            <button
                                onClick={resetFilters}
                                className="w-full bg-red-200 hover:bg-red-300/[77%] text-red-600 font-medium py-2 px-4 border-2 border-red-400 rounded-md transitions"
                            >
                                Reset Filters
                            </button>
                        </div>
                    </div>
                </motion.aside>
            )}
        </AnimatePresence>
    );
};





