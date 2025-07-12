
export const ListGridBtn = ({ onClick, isActive, roundedClass, icon, altText }) => {
    return (
        <button
            onClick={onClick}
            className={`${isActive ? "bg-[#eff2f4]" : "bg-white hover:bg-gray-100/75"} p-1.5 border border-[#DEE2E7] ${roundedClass} transitions`}
        >
            <img src={icon} className="max-[466px]:w-5 max-[466px]:h-5" alt={altText} />
        </button>
    );
};
