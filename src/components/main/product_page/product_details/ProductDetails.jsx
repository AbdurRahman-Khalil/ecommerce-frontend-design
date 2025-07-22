import { Image } from "./Image";
import { Details } from "./Details";
import { SellerInfo } from "./SellerInfo";


export const ProductDetails = ({ product }) => {
    return (
        <div
            aria-label="Product Detials"
            className="flex items-start gap-[1.35rem] bg-white border border-[#DEE2E7] rounded-md p-[1.2rem] pb-[1.8rem]
            max-[1212px]:border-x-0 max-[1212px]:rounded-none max-[1212px]:px-5 max-[1159px]:flex-wrap max-[1159px]:gap-y-[2rem] 
            max-[1159px]:pb-[1.5rem] max-[879px]:gap-y-[1.1rem]"
        >
            <Image pImage={product.image} pTitle={product.title} />
            <Details product={product} />
            <SellerInfo product={product} />
        </div>
    );
};
