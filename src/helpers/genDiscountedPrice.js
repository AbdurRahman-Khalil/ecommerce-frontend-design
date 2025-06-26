const genDiscountedPrice = (minDiscount, maxDiscount, originalPrice) => {
    if (
        typeof minDiscount !== "number" ||
        typeof maxDiscount !== "number" ||
        typeof originalPrice !== "number" ||
        minDiscount < 0 ||
        maxDiscount > 100 ||
        minDiscount > maxDiscount
    ) {
        throw new Error("Invalid input");
    }

    const randomDiscount =
        Math.random() * (maxDiscount - minDiscount) + minDiscount;

    const discountedPrice = originalPrice - (originalPrice * randomDiscount) / 100;

    return parseFloat(discountedPrice.toFixed(2));
};

export default genDiscountedPrice;