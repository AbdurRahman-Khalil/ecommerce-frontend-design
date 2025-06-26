import { Link } from "react-router-dom";


export const SaleCard = ({ product }) => {
    return (
        <Link to={"/products"} className="flex flex-col justify-center items-center text-center w-[11.1875rem] border-l border-[#DEE2E7]">
            <img src={product.img} className="max-w-full h-[6.25rem] object-contain mb-7" alt={product.name} />
            <p className="mb-2">{product.name}</p>
            <span className="font-medium text-sm text-[#EB001B] bg-[#FFE3E3] px-2 py-0.5 rounded-full">
                {product.discount}
            </span>
        </Link>
    );
};
