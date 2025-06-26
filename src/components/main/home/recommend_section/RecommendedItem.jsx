import { Link } from "react-router-dom";


export const RecommendedItem = ({ product }) => {
    return (
        <Link to={"/products"} className="bg-white space-y-7 p-[1.15rem] pb-[0.875rem] w-[220px] min-h-[310px] border border-[#E0E0E0] rounded-md">
            <div className="w-full h-[200px]">
                <img src={product.img} className="max-w-full h-full object-contain" alt="product image" />
            </div>
            <div>
                <p className="font-medium leading-[1.375rem] mb-1">${product.price}</p>
                <p className="text-[#8B96A5]">{product.title}</p>
            </div>
        </Link>
    );
};
