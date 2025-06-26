import { useMemo } from "react";


export const RandomDiscountedPrice = ({ originalPrice, productType }) => {

    const genDiscountedPrice = (minDiscount, maxDiscount, productOgPrice) => {
        if (
            typeof minDiscount !== "number" ||
            typeof maxDiscount !== "number" ||
            typeof productOgPrice !== "number" ||
            minDiscount < 0 ||
            maxDiscount > 100 ||
            minDiscount > maxDiscount
        ) {
            throw new Error("Invalid input");
        }

        const randomDiscount =
            Math.random() * (maxDiscount - minDiscount) + minDiscount;

        const discountedPrice = productOgPrice - (productOgPrice * randomDiscount) / 100;

        return parseFloat(discountedPrice.toFixed(2));
    }

    const discountedPrice = useMemo(() => genDiscountedPrice(25, 45, originalPrice), [originalPrice]);


    return (
        <p className={`font-semibold
            ${productType === "listProduct" ? "text-xl leading-7" : "text-lg leading-[100%]"}
        `}>
            {`$${discountedPrice}`}
        </p>
    );
};



