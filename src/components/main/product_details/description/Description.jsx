import { Feature } from "./Feature";


export const Description = ({ pDescription, pFeatures }) => {
    return (
        <div className="w-[880px] h-max bg-white border border-[#DEE2E7] rounded-md shadow">
            <ul className="flex items-center gap-6 font-medium text-[#8B96A5] border-b border-[#DEE2E7]">
                <li className="ml-2 text-[#0D6EFD] px-4 py-3 border-b-2 border-blue-400">Description</li>
                <li className="pr-4">Reviews</li>
                <li className="pr-4">Shipping</li>
                <li className="pr-4">About Seller</li>
            </ul>
            <div id="description" className="m-6 mt-5 space-y-6 text-[#505050]">
                <p>{pDescription}</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <div id="product-features" className="space-y-3">
                    {
                        pFeatures.map((feature, index) => (
                            <Feature key={index} feature={feature}  />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
