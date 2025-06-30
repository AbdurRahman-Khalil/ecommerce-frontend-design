
export const YouMayLikeProduct = ({ product }) => {
    return (
        <div className="flex items-start gap-3">
            <div className="w-20 h-20 border border-[#E0E0E0] rounded-md">
                <img src={product.image} className="w-full h-full object-cover rounded-md" alt="" />
            </div>
            <div className="flex-1">
                <p className="text-[#1C1C1C]">{product.title}</p>
                <p className="text-[#8B96A5]">{`$7.00 - $${product.discountedPrice}`}</p>
            </div>
        </div>
    );
};
