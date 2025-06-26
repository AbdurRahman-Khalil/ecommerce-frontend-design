import { useState, useEffect } from "react";

import { Collapsible } from "./Collapsible";



const MIN_PRICE = 0;
const MAX_PRICE = 9999;
const STEP = 50;

export const PriceFilter = ({ filters, setFilters }) => {
    const [tempMin, setTempMin] = useState(filters.minPrice || MIN_PRICE);
    const [tempMax, setTempMax] = useState(filters.maxPrice || MAX_PRICE);

    const handleSliderChange = (e, type) => {
        const value = Number(e.target.value);
        if (type === "min") {
            setTempMin(Math.min(value, tempMax - STEP));
        } else {
            setTempMax(Math.max(value, tempMin + STEP));
        }
    };

    const handleInputChange = (e, type) => {
        const value = Number(e.target.value);
        if (type === "min") {
            setTempMin(Math.max(MIN_PRICE, Math.min(value, tempMax - STEP)));
        } else {
            setTempMax(Math.min(MAX_PRICE, Math.max(value, tempMin + STEP)));
        }
    };

    const handleApply = () => {
        setFilters({ ...filters, minPrice: tempMin, maxPrice: tempMax });
    };

    const getProgressWidth = () => {
        return ((tempMax - tempMin) / (MAX_PRICE - MIN_PRICE)) * 100;
    };

    const getProgressLeft = () => {
        return ((tempMin - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;
    };

    useEffect(() => {
        setTempMin(filters.minPrice);
        setTempMax(filters.maxPrice);
    }, [filters.minPrice, filters.maxPrice]);


    return (
        <Collapsible title="Price range" initialOpen={true}>
            {/* Custom Range Slider */}
            <div className="relative h-6 mb-4">
                {/* Slider track */}
                <div className="absolute top-1/2 left-0 w-full h-[4px] bg-[#AFD0FF] rounded transform -translate-y-1/2" />

                {/* Progress bar */}
                <div
                    className="absolute top-1/2 h-[4px] bg-[#0D6EFD] rounded transform -translate-y-1/2"
                    style={{
                        left: `${getProgressLeft()}%`,
                        width: `${getProgressWidth()}%`,
                    }}
                />

                {/* Range inputs */}
                <input
                    type="range"
                    min={MIN_PRICE}
                    max={MAX_PRICE}
                    step={STEP}
                    value={tempMin}
                    onChange={(e) => handleSliderChange(e, "min")}
                    className="absolute top-0 -left-0.5 w-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-[#AFD0FF] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md"
                />
                <input
                    type="range"
                    min={MIN_PRICE}
                    max={MAX_PRICE}
                    step={STEP}
                    value={tempMax}
                    onChange={(e) => handleSliderChange(e, "max")}
                    className="absolute top-0 left-0.5 w-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-[#AFD0FF] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md"
                />
            </div>

            {/* Inputs */}
            <div className="flex gap-2 mb-2">
                <label htmlFor="min-input">
                    <span className="text-[#1C1C1C] ml-0.5">Min</span>
                    <input
                        type="number"
                        id="min-input"
                        min={MIN_PRICE}
                        max={MAX_PRICE}
                        step={STEP}
                        placeholder="Min"
                        className="w-[6.875rem] h-10 text-[#1C1C1C] bg-white px-2.5 mt-0.5 border border-[#DEE2E7] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={tempMin}
                        onChange={(e) => handleInputChange(e, "min")}
                    />
                </label>
                <label htmlFor="max-input">
                    <span className="text-[#1C1C1C] ml-0.5">Max</span>
                    <input
                        type="number"
                        id="max-input"
                        min={MIN_PRICE}
                        max={MAX_PRICE}
                        step={STEP}
                        placeholder="Max"
                        className="w-[6.875rem] h-10 text-[#1C1C1C] bg-white px-2.5 mt-0.5 border border-[#DEE2E7] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={tempMax}
                        onChange={(e) => handleInputChange(e, "max")}
                    />
                </label>
            </div>

            {/* Apply button */}
            <button
                onClick={handleApply}
                className="w-[14.25rem] h-10 text-[#0D6EFD] font-medium bg-white hover:bg-gray-50/95 border border-[#DEE2E7] rounded-md shadow-sm transitions"
            >
                Apply
            </button>
        </Collapsible>
    );
};






