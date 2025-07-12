import { create } from "zustand";

import { devtools } from "zustand/middleware";


const asideBarStore = (set) => ({

    isSidebarOpen: false,
    isFilterbarOpen: false,

    setIsSidebarOpen: (value) => set({ isSidebarOpen: value }),
    toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),

    setIsFilterbarOpen: (value) => set({ isFilterbarOpen: value }),
    toggleFilterbar: () => set((state) => ({ isFilterbarOpen: !state.isFilterbarOpen })),
});

const useAsideBarStore = create(
    devtools(asideBarStore)
);


export default useAsideBarStore;











// import { create } from "zustand";
// import { devtools } from "zustand/middleware";

// const uiStore = (set) => ({
//     isSidebarOpen: false,
//

//     setIsSidebarOpen: (value) => set({ isSidebarOpen: value }),
//     toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),


// });

// const useUIStore = create(devtools(uiStore));

// export default useUIStore;