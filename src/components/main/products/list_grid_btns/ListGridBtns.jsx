import useProductsStore from "../../../../store/products/ProductsStore";

import { ListGridBtn } from "./ListGridBtn";

import listIcon from "../../../../assets/svgs/products/list.svg";
import gridIcon from "../../../../assets/svgs/products/grid.svg";



const buttonConfig = [
    { mode: "grid", icon: gridIcon, alt: "Grid view", rounded: "rounded-l-md" },
    { mode: "list", icon: listIcon, alt: "List view", rounded: "rounded-r-md" },
];

export const ListGridBtns = () => {
    const viewMode = useProductsStore((state) => state.viewMode);
    const setViewMode = useProductsStore((state) => state.setViewMode);

    return (
        <div
            className="flex justify-center items-center w-[5.9rem] h-14 bg-[#ffffff] border border-[#DEE2E7] rounded-md 
                max-[719px]:ml-auto max-[719px]:order-2 max-[466px]:w-[5.25rem] max-[466px]:h-12"
        >
            {buttonConfig.map(({ mode, icon, alt, rounded }) => (
                <ListGridBtn
                    key={mode}
                    onClick={() => setViewMode(mode)}
                    isActive={viewMode === mode}
                    roundedClass={rounded}
                    icon={icon}
                    altText={alt}
                />
            ))}
        </div>
    );
};
