import { Collapsible } from "./Collapsible";

import filledStar from "../../../../assets/svgs/rating_filter_svgs/filled_star.svg";
import emptyStar from "../../../../assets/svgs/rating_filter_svgs/empty_star.svg";
import tick from "../../../../assets/svgs/rating_filter_svgs/tick.svg";
import untick from "../../../../assets/svgs/rating_filter_svgs/untick.svg";



export const RatingsFilter = ({ filters, updateCheckbox }) => {
    return (
        <Collapsible title="Ratings" initialOpen={true} marginBottom={"mb-[1.05rem]"}>
            {[5, 4, 3, 2].map((star) => {
                const isChecked = filters.ratings.includes(star);
                return (
                    <label
                        key={star}
                        className="flex items-center gap-2.5 space-y-2 cursor-pointer mb-2"
                    >
                        {/* Hidden checkbox input for state control */}
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => updateCheckbox("ratings", star)}
                            className="peer hidden"
                        />

                        {/* Custom SVG-based checkbox */}
                        <span>
                            <img
                                src={isChecked ? tick : untick}
                                alt={isChecked ? "Checked" : "Unchecked"}
                            />
                        </span>

                        {/* SVG stars */}
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <img
                                    key={i}
                                    src={i < star ? filledStar : emptyStar}
                                    alt={i < star ? "Filled Star" : "Empty Star"}
                                />
                            ))}
                        </div>
                    </label>
                );
            })}
        </Collapsible>
    );
};
