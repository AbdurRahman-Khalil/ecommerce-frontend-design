
export const ListGridBtn = ({ onClick, isActive, roundedClass, icon, altText }) => {
    return (
        <button
            onClick={onClick}
            className={`${isActive ? "bg-[#EFF2F4]" : "bg-white"} p-1.5 border border-[#DEE2E7] ${roundedClass}`}
        >
            <img src={icon} alt={altText} />
        </button>
    );
};
