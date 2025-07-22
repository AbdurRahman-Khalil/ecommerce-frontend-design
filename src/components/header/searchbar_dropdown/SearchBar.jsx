import { useNavigate } from "react-router-dom";

import useSearchStore from '../../../store/search/SearchStore';



export const SearchBar = () => {
    const searchQuery = useSearchStore((state) => state.searchQuery);
    const updateSearchQuery = useSearchStore((state) => state.updateSearchQuery);

    const navigate = useNavigate();

    const handleFocus = () => {
        navigate("/products");
    };
    

    return (
        <input
            type="text"
            className="w-80 h-full px-3 rounded-l-lg focus:outline-none hover:bg-gray-50 focus:bg-gray-50 transitions
                max-[779px]:flex-1 max-[365px]:order-2 max-[365px]:pl-0 max-[365px]:rounded-r-lg"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => updateSearchQuery(e.target.value)}
            onFocus={handleFocus}
        />
    );
};
