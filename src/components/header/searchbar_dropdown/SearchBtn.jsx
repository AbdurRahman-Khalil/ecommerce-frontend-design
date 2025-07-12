import { SearchIcon } from "../../svgs/SearchIcon";


export const SearchBtn = () => {

    return (
        <button
            type="submit"
            className="w-[100px] h-full px-6 rounded-r text-white focus:outline-none transitions
            max-[365px]:order-1 max-[365px]:w-max max-[365px]:px-2 min-[366px]:primary-gradient"
        >
            <span className="max-[365px]:hidden block">Search</span>

            <span className="block min-[366px]:hidden">
                <SearchIcon iconColor={"#8B96A5"} />
            </span>
        </button>
    );
};
