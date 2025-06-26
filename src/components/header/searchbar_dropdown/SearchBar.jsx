import { useState } from 'react';


export const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <input
            type="text"
            className="w-80 h-full px-3 rounded-l-lg focus:outline-none hover:bg-gray-50 focus:bg-gray-100 transitions"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
    );
};
