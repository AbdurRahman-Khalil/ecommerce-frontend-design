
export const DisplayRangeInfo = ({ start, end, totalFiltered, totalProducts }) => {
    return (
        <div
            className="flex-1 flex justify-start items-center px-4 pb-0.5 h-14 bg-[#FFFFFF] border border-[#DEE2E7] rounded-md 
            max-[719px]:min-w-full max-[719px]:order-1 max-[549px]:pt-9 max-[549px]:pb-10 max-[466px]:text-[0.95rem]
            max-[466px]:px-[0.8rem] max-[466px]:pt-8 max-[466px]:pb-[2.1rem]"
        >
            <p className="text-[#1c1c1c]">
                Displaying <span className="font-semibold">{start}–{end}</span> of <span className="font-semibold">{totalFiltered}</span> filtered
                {totalFiltered === 1 ? " product " : " products "} out of <span className="font-semibold">{totalProducts}</span> total products
            </p>
        </div>
    );
};
