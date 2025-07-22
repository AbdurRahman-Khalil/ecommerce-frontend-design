import { useMediaQuery } from "../../../../hooks/useMediaQuery";


export const YouMayLikeProduct = ({ product }) => {
    const isMobile = useMediaQuery("(max-width: 735px)");
    
    return (
        <div className="flex items-start gap-3 max-[735px]:min-w-fit">
            <div className="w-20 h-20 border border-[#E0E0E0] rounded-md">
                <img
                    src={product.image}
                    className="w-full h-full object-cover rounded-md"
                    alt={`${product.title}'s image`}
                />
            </div>
            <div className="flex-1">
                <p className="text-[#1C1C1C]">{product.title}</p>
                <p className="text-[#8c97a6]">{`$7.00 - $${product.discountedPrice}`}</p>
                {isMobile && <p className="text-[#b8bec7]">{product.category}</p>}
            </div>
        </div>
    );
};
