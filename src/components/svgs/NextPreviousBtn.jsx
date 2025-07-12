
export const NextPreviousBtn = ({ onClick, roundedClass, disabled, svgD }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-white w-11 h-10 flex justify-center items-center border border-[#DEE2E7] 
                ${roundedClass} max-[391px]:w-10 max-[391px]:h-9`}
            disabled={disabled}
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d={svgD}
                    fill={disabled ? "#8B96A5" : "#1C1C1C"}
                />
            </svg>
        </button>
    );
};

