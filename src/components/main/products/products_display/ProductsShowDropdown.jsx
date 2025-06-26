
export const ProductsShowDropdown = ({ productsPerPage, setProductsPerPage, setCurrentPage }) => {
    return (
        <div className="flex items-center gap-2">
            <select
                id="perPage"
                className="border border-[#DEE2E7] bg-[#FFFFFF] w-[125px] h-10 text-[#1C1C1C] pl-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={productsPerPage}
                onChange={(e) => {
                    setProductsPerPage(parseInt(e.target.value));
                    setCurrentPage(1); // reset to first page
                }}
            >
                {[10, 20, 30].map((count) => (
                    <option key={count} value={count}>Show {count}</option>
                ))}
            </select>
        </div>
    );
};
