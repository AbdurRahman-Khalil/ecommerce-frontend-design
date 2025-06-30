import { Rating } from "../products/Rating";
import { Dot } from "../products/Dot";
import { RandomOrdersSolds } from "../products/RandomOrdersSolds";
import { CheckIcon } from "../../svgs/CheckIcon";

import outlinedMessageIcon from "../../../assets/svgs/product_page/outlined_message.svg";
import soldIcon from "../../../assets/svgs/product_page/sold.svg";



export const Details = ({ product }) => {
    return (
        <div id="details" className="w-[430px]">
            <div className="flex gap-1.5">
                <CheckIcon iconColor={"#00B517"} />
                <p className="text-[#00B517]">In stock</p>
            </div>
            <h4 className="font-semibold text-[#1C1C1C] text-xl leading-7 my-1.5">
                {product.title}
            </h4>
            <div className="flex items-center gap-3">
                <Rating productId={product.id} totalRating={product.rating} />
                <Dot />
                <div className="flex gap-1.5">
                    <img src={outlinedMessageIcon} className="-mb-0.5" alt="outlined message icon" />
                    <RandomOrdersSolds />
                </div>
                <Dot />
                <div className="flex gap-1.5">
                    <img src={soldIcon} className="-mt-0.5" alt="sold icon" />
                    <RandomOrdersSolds />
                </div>
            </div>
            <div id="trade-price" className="flex gap-[3.875rem] w-full min-h-[72px] bg-[#FFF0DF] rounded-sm px-[1.05rem] py-4 mt-3.5">
                <div className="space-y-2">
                    <p className="font-semibold text-[#FA3434] text-lg leading-[100%]">{`$${product.discountedPrice}`}</p>
                    <p className="text-[13px] text-[#606060] leading-[100%]">50-100 pcs</p>
                </div>
                <div className="flex gap-2.5">
                    <div className="w-[1px] h-full bg-[#BDC1C8]"></div>
                    <div className="space-y-2">
                        <p className="font-semibold text-[#1C1C1C] text-lg leading-[100%]">{`$${(product.discountedPrice - 8).toFixed(2)}`}</p>
                        <p className="text-[13px] text-[#606060] leading-[100%]">100-700 pcs</p>
                    </div>
                </div>
                <div className="flex gap-2.5">
                    <div className="w-[1px] h-full bg-[#BDC1C8]"></div>
                    <div className="space-y-2">
                        <p className="font-semibold text-[#1C1C1C] text-lg leading-[100%]">{`$${(product.discountedPrice - 12).toFixed(2)}`}</p>
                        <p className="text-[13px] text-[#606060] leading-[100%]">700+ pcs</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex items-center mt-[1.35rem] ml-[0.08rem]">
                    <p className="text-[#8B96A5] leading-[100%] w-[160px]">Price: </p>
                    <p className="text-[#505050] leading-[100%]">Negotiable</p>
                </div>
                <div id="line" className="w-full h-[1px] bg-[#E0E0E0] ml-[0.1rem] mt-[1.1rem] mb-[1.05rem]"></div>
                <div className="ml-[0.08rem]">
                    <div className="flex items-center">
                        <p className="text-[#8B96A5] leading-[100%] w-[160px]">Type: </p>
                        <p className="text-[#505050] leading-[100%]">Classic {product.category}</p>
                    </div>
                    <div className="flex items-center mt-[1.15rem]">
                        <p className="text-[#8B96A5] leading-[100%] w-[160px]">Material: </p>
                        <p className="text-[#505050] leading-[100%]">Plastic material</p>
                    </div>
                    <div className="flex items-center mt-[1.2rem]">
                        <p className="text-[#8B96A5] leading-[100%] w-[160px]">Design: </p>
                        <p className="text-[#505050] leading-[100%]">Modern nice</p>
                    </div>
                </div>
                <div id="line" className="w-full h-[1px] bg-[#E0E0E0] ml-[0.1rem] mt-[1.1rem] mb-[1.05rem]"></div>
                <div className="ml-[0.08rem]">
                    <div className="flex items-start">
                        <p className="text-[#8B96A5] leading-[100%] w-[207px]">Customization: </p>
                        <p className="text-[#505050] leading-[100%]">Customized logo and design custom packages</p>
                    </div>
                    <div className="flex items-center mt-[1.35rem]">
                        <p className="text-[#8B96A5] leading-[100%] w-[160px]">Protection: </p>
                        <p className="text-[#505050] leading-[100%]">Refund Policy</p>
                    </div>
                    <div className="flex items-center mt-[1.2rem]">
                        <p className="text-[#8B96A5] leading-[100%] w-[160px]">Warranty: </p>
                        <p className="text-[#505050] leading-[100%]">2 years full warranty </p>
                    </div>
                </div>
                <div id="line" className="w-full h-[1px] bg-[#E0E0E0] ml-[0.1rem] mt-[1.05rem]"></div>
            </div>
        </div>
    );
};
