import { create } from "zustand";

import { devtools } from "zustand/middleware";


const searchStore = (set) => ({
    searchQuery: "",

    updateSearchQuery: (searchQuery) => {
        set(() => (
            { searchQuery: searchQuery.trim().toLowerCase() }
        ));
    },
});

const useSearchStore = create(
    devtools(searchStore)
);


export default useSearchStore;