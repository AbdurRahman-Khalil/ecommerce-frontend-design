import { useState } from "react";

import tick from "../../../assets/svgs/rating_filter_svgs/tick.svg";
import untick from "../../../assets/svgs/rating_filter_svgs/untick.svg";



export const CustomCheckbox = ({ label }) => {
    const [isChecked, setIsChecked] = useState(false);
    
    return (
        <label className="flex items-center cursor-pointer select-none text-gray-700">
            <div
                className="flex items-center justify-center transition-all duration-200"
                onClick={() => setIsChecked(!isChecked)}
                role="checkbox"
                aria-checked={isChecked}
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setIsChecked(!isChecked);
                    }
                }}
            >
                <img src={isChecked ? tick : untick} alt={isChecked ? "Checked" : "Unchecked"} />
            </div>
            <span className="ml-3">{label}</span>
        </label>
    );
};
