import { Rating } from "../../products/Rating";
import { Dot } from "../../products/Dot";
import { RandomOrdersSolds } from "../../products/RandomOrdersSolds";
import { CheckIcon } from "../../../svgs/CheckIcon";

import outlinedMessageIcon from "../../../../assets/svgs/product_page/outlined_message.svg";
import soldIcon from "../../../../assets/svgs/product_page/sold.svg";
import { Detail } from "./Detail";



export const Details = ({ product }) => {
    return (
        <div id="details" className="w-[430px] max-[1159px]:flex-1 max-[879px]:mb-[0.9rem] max-[879px]:min-w-full">
            <div className="flex items-center gap-1.5">
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
            <div
                id="trade-price"
                className="flex gap-[3.875rem] w-full min-h-[72px] bg-[#FFF0DF] rounded-sm px-[1.05rem] py-4 mt-3.5
                max-[484px]:gap-[2.75rem] max-[444px]:justify-between max-[413px]:flex-wrap max-[413px]:gap-y-[1.75rem] max-[413px]:pb-[1.15rem]"
            >
                <div className="space-y-2">
                    <p className="font-semibold text-[#FA3434] text-lg leading-[100%]">{`$${product.discountedPrice}`}</p>
                    <p className="text-[13px] text-[#606060] leading-[100%]">50-100 pcs</p>
                </div>
                <div className="flex gap-2.5">
                    <div className="w-[1px] h-full bg-[#BDC1C8] max-[444px]:hidden"></div>
                    <div className="space-y-2">
                        <p className="font-semibold text-[#1C1C1C] text-lg leading-[100%]">{`$${(product.discountedPrice - 8).toFixed(2)}`}</p>
                        <p className="text-[13px] text-[#606060] leading-[100%]">100-700 pcs</p>
                    </div>
                </div>
                <div className="flex gap-2.5">
                    <div className="w-[1px] h-full bg-[#BDC1C8] max-[444px]:hidden"></div>
                    <div className="space-y-2">
                        <p className="font-semibold text-[#1C1C1C] text-lg leading-[100%]">{`$${(product.discountedPrice - 12).toFixed(2)}`}</p>
                        <p className="text-[13px] text-[#606060] leading-[100%]">700+ pcs</p>
                    </div>
                </div>
            </div>

            <div className="mt-[1.35rem] ml-[0.05rem] space-y-5">
                <Detail
                    title={"Price"}
                    description={"Negotiable"}
                />
                <div id="line" className="w-full h-[1px] bg-[#E0E0E0]"></div>
                <Detail
                    title={"Type"}
                    description={`Classic ${product.category}`}
                />
                <Detail
                    title={"Material"}
                    description={"Plastic material"}
                />
                <Detail
                    title={"Design"}
                    description={"Modern nice"}
                />
                <div id="line" className="w-full h-[1px] bg-[#E0E0E0]"></div>
                <Detail
                    title={"Customization"}
                    description={"Customized logo and design custom packages"}
                />
                <Detail
                    title={"Protection"}
                    description={"Refund Policy"}
                />
                <Detail
                    title={"Warranty"}
                    description={"2 years full warranty"}
                />
            </div>
        </div>
    );
};


