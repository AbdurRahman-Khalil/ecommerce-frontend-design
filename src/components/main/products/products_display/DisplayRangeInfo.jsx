
export const DisplayRangeInfo = ({ start, end, totalFiltered, totalProducts }) => {
    return (
        <p className="leading-[100%] text-[#1c1c1c]">
            Displaying <span className="font-semibold">{start}–{end}</span> of <span className="font-semibold">{totalFiltered}</span> filtered
            {totalFiltered === 1 ? " product " : " products "} out of <span className="font-semibold">{totalProducts}</span> total products
        </p>
    );
};
