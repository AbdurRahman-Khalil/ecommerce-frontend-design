import { useState, useEffect } from "react";

import useProductsStore from "../../../store/products/ProductsStore";

import genRandomId from "../../../helpers/genRandomId";
import formatDate from "../../../helpers/formateDate";

import filledStar from "../../../assets/svgs/rating_filter_svgs/filled_star.svg";
import emptyStar from "../../../assets/svgs/rating_filter_svgs/empty_star.svg";
import toast from "react-hot-toast";



export const Rating = ({ productId, totalRating, isSmall = null }) => {
    const addRating = useProductsStore((state) => state.addRating);
    const product = useProductsStore((state) =>
        state.products.find((p) => p.id === productId)
    );

    const [hovered, setHovered] = useState(false);
    const [rating, setRating] = useState(null);
    const [localTotalRating, setLocalTotalRating] = useState(totalRating);

    useEffect(() => {
        // Update rating after store updates it
        if (product?.rating) {
            setLocalTotalRating(product.rating);
        }
    }, [product]);

    const ratingId = genRandomId();
    const formattedDate = formatDate();

    const handleRating = async (currentRating) => {
        try {
            const newRating = {
                id: ratingId,
                rating: currentRating,
                ratingDate: formattedDate,
            };

            setRating(currentRating);
            await addRating(newRating, productId);
            setHovered(false);

        } catch (err) {
            toast.error("An error occurred: " + JSON.stringify(err.message, null, 2));
        }
    };

    // Logic for deciding how many stars to show based on custom rules
    const starsToShow = (() => {
        const ratingNum = parseFloat(localTotalRating);
        const intPart = Math.floor(ratingNum);
        const decimal = ratingNum - intPart;
        return decimal > 0.5 ? intPart + 1 : intPart;
    })();


    return (
        <div
            className="flex items-center w-max"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {[...Array(5)].map((_, index) => {
                const currentRating = index + 1;
                const shouldFill = hovered ? false : currentRating <= starsToShow;

                return (
                    <label key={index}>
                        <input
                            className="hidden"
                            type="radio"
                            name={`rating-${productId}`}
                            value={currentRating}
                            onClick={() => handleRating(currentRating)}
                        />
                        <span>
                            <img
                                src={shouldFill ? filledStar : emptyStar}
                                alt={`${currentRating} Star`}
                                className="cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-[1.15] w-4 h-[0.9375rem]"
                            />
                        </span>
                    </label>
                );
            })}
            <p
                className={`text-[#FF9017] mt-0.5 ml-1.5 transition-all duration-300 ease-in-out ${isSmall}`}
            >
                {Number(localTotalRating).toFixed(2)}
            </p>
        </div>
    );
};

