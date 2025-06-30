import plusIcon from "../../../../assets/svgs/cart/cart_products/plus.svg";
import minusIcon from "../../../../assets/svgs/cart/cart_products/minus.svg";


export const IncrementDecrementBtn = ({ ariaLabel, onClick, roundedClass }) => {
    return (
        <button
            aria-label={ariaLabel}
            onClick={onClick}
            className={`flex justify-center items-center active:bg-amber-100 transitions h-full w-8 ${roundedClass}`}
        >
            <img
                src={ariaLabel === "decreaseButton" ? minusIcon : plusIcon}
                className="w-[0.875rem]"
                alt={`${ariaLabel}'s icon`}
            />
        </button>
    );
};
