import { CategoryFilter } from "./CategoryFilter";
import { BrandFilter } from "./BrandFilter";
import { PriceFilter } from "./PriceFilter";
import { ConditionFilter } from "./ConditionFilter";
import { RatingsFilter } from "./RatingsFilter";



export const Sidebar = ({ filters, setFilters }) => {

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


    return (
        <aside className="w-60 p-4 pt-0 pl-1 space-y-6">
            <CategoryFilter filters={filters} updateCheckbox={updateCheckbox} />

            <BrandFilter filters={filters} updateCheckbox={updateCheckbox} />

            <PriceFilter filters={filters} setFilters={setFilters} />

            <ConditionFilter filters={filters} setFilters={setFilters} />

            <RatingsFilter filters={filters} updateCheckbox={updateCheckbox} />

            {/* RESET BUTTON */}
            <div className="pt-4">
                <button
                    onClick={resetFilters}
                    className="w-full bg-red-200 hover:bg-red-300/[77%] text-red-600 font-medium py-2 px-4 border-2 border-red-400 rounded-md transitions"
                >
                    Reset Filters
                </button>
            </div>
        </aside>
    );
};


