import { Feature } from "./Feature";


export const Description = ({ pDescription, pFeatures }) => {
    return (
        <div
            aria-label="Product Description"
            className="w-[880px] h-max bg-white border border-[#DEE2E7] rounded-md shadow
            max-[1212px]:flex-1 max-[1212px]:border-l-0 max-[1212px]:rounded-s-none max-[735px]:min-w-full
            max-[735px]:border-r-0 max-[735px]:rounded-e-none
            "
        >
            <div className="group">
                <ul
                    className="flex items-center gap-6 font-medium text-[#8B96A5] border-b border-[#DEE2E7]
                overflow-x-auto scroll-smooth
                [&::-webkit-scrollbar-thumb]:invisible group-hover:[&::-webkit-scrollbar-thumb]:visible
                [&::-webkit-scrollbar-track]:invisible group-hover:[&::-webkit-scrollbar-track]:visible
                [&::-webkit-scrollbar]:h-1 max-[499px]:[&::-webkit-scrollbar]:h-0 
                [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300
                hover:[&::-webkit-scrollbar-thumb]:cursor-grab active:[&::-webkit-scrollbar-thumb]:cursor-grabbing"
                >
                    <li className="ml-2 max-[1212px]:ml-1.5 text-[#0D6EFD] px-4 py-3 border-b-2 border-blue-400 min-w-fit">Description</li>
                    <li className="pr-4 min-w-fit">Reviews</li>
                    <li className="pr-4 min-w-fit">Shipping</li>
                    <li className="pr-4 min-w-fit">About Seller</li>
                </ul>
            </div>

            <div
                id="description"
                className="p-6 pt-5 space-y-6 text-[#505050] h-[calc(537px-53px)] overflow-y-auto scroll-smooth
                    [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300
                    hover:[&::-webkit-scrollbar-thumb]:cursor-grab active:[&::-webkit-scrollbar-thumb]:cursor-grabbing
                    max-[1212px]:px-5 max-[735px]:h-max"
            >
                <p>{pDescription}</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu nulla.
                </p>
                <div id="product-features" className="space-y-3">
                    {
                        pFeatures.map((feature, index) => (
                            <Feature key={index} feature={feature} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
