
export const RelatedProduct = ({ product }) => {
    return (
        <div className="rounded-md">
            <div className="w-[172px] h-[172px] rounded-md">
                <img
                    src={product.image}
                    className="w-full h-full object-cover rounded-md"
                    alt={`${product.title}'s image`}
                />
            </div>
            <div className="mt-3.5 space-y-1.5 px-0.5">
                <p className="text-[#505050] leading-[1.35rem] line-clamp-1">{product.title}</p>
                <div className="flex gap-0.5 text-[#8B96A5] leading-[100%]">
                    <p>{`$${product.discountedPrice}`}</p>
                    <span>-</span>
                    <p>{`$${product.originalPrice}.00`}</p>
                </div>
            </div>
        </div>
    );
};