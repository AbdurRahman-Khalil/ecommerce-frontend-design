import { Link } from "react-router-dom";


export const SaleCard = ({ product }) => {
    return (
        <div
            className="w-[11.1875rem] flex justify-center items-center border-l border-[#DEE2E7] 
                max-[1169px]:flex-grow max-[898px]:min-w-[11.1875rem]"
        >
            <Link to={"/products"} className="flex flex-col justify-center items-center text-center max-[1169px]:my-6">
                <img src={product.img} className="max-w-full h-[6.25rem] object-contain mb-7" alt={product.name} />
                <p className="mb-2">{product.name}</p>
                <span className="font-medium text-sm text-[#EB001B] bg-[#FFE3E3] px-2 py-0.5 rounded-full">
                    {product.discount}
                </span>
            </Link>
        </div>
    );
};
