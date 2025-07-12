import { Link } from "react-router-dom";


export const BlockItem = ({ item }) => {
    return (
        <Link to={"/products"} id="block-item" className="relative pt-5 pl-4 max-[1201px]:min-h-[127px]">
            <div className="w-[12.5rem]">
                <p>{item.title}</p>
                <p className="text-[0.8125rem] text-[#8B96A5] leading-4 mt-2 w-[3.8rem]">{item.price}</p>
            </div>
            <img src={item.img} className="absolute bottom-2 right-1.5 w-[4.875rem] h-[4.875rem] object-contain" alt={`${item.title}'s image`} />
        </Link>
    );
};
