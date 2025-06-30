import { Image } from "./Image";
import { Details } from "./Details";
import { SellerInfo } from "./SellerInfo";


export const ProductDetails = ({ product }) => {
    return (
        <div id="product-detials" className="flex items-start gap-[1.35rem] bg-white border border-[#DEE2E7] rounded-md p-[1.2rem]">
            <Image pImage={product.image} pTitle={product.title} />
            <Details product={product} />
            <SellerInfo product={product} />
        </div>
    );
};
