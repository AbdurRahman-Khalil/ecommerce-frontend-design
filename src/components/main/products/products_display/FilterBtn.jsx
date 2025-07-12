import useAsideBarStore from "../../../../store/asidebar/asideBarStore";

import filterIcon from "../../../../assets/svgs/products/filter_icon.svg";


export const FilterBtn = () => {
    const { toggleFilterbar } = useAsideBarStore();
    
    return (
        <button
            id="filter-btn"
            className="flex justify-center items-center w-[3.5rem] h-14 bg-[#ffffff] hover:bg-gray-100/70 border border-[#DEE2E7] rounded-md transitions
                min-[935px]:hidden max-[719px]:order-2 max-[466px]:w-[3.15rem] max-[466px]:h-12"
            onClick={() => toggleFilterbar()}
        >
            <img
                src={filterIcon}
                className="w-[1.7rem] h-[1.7rem] max-[466px]:w-[1.575rem] max-[466px]:h-[1.575rem]"
                alt="filter button icon"
            />
        </button>
    );
};
