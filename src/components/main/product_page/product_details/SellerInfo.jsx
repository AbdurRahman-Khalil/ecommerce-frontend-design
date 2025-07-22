import { Link } from "react-router-dom";

import useProductsStore from "../../../../store/products/ProductsStore";

import { useMediaQuery } from "../../../../hooks/useMediaQuery";

import germanyFlag from "../../../../assets/svgs/flags/germany.svg";
import verifiedUserIcon from "../../../../assets/svgs/product_page/verified_user.svg";
import worldIcon from "../../../../assets/svgs/product_page/world.svg";
import outlinedHeart from "../../../../assets/svgs/products/outlined_heart.svg";
import filledHeart from "../../../../assets/svgs/products/filled_heart.svg";



export const SellerInfo = ({ product }) => {
    const saveProduct = useProductsStore((state) => state.saveProduct);
    const unSaveProduct = useProductsStore((state) => state.unSaveProduct);
    const savedProducts = useProductsStore((state) => state.savedProducts);

    const isMobile = useMediaQuery("(min-width: 535px) and (max-width: 1159px)");

    const isSaved = savedProducts.some((item) => item.id === product?.id);

    const handleSaveProduct = () => {
        if (isSaved) {
            unSaveProduct(product.id);
            return;
        }

        const newItem = {
            id: product.id,
            title: product.title,
            category: product.category,
            brand: product.brand,
            price: product.discountedPrice,
            totalPrice: product.totalPrice,
            image: product.image,
            quantity: product.quantity,
        };

        saveProduct(newItem);
    };


    return (
        <div
            aria-label="prodcut seller info"
            className="w-[280px] 
            min-[1160px]:max-[1212px]:ml-auto min-[535px]:max-[1159px]:w-full"
        >
            <div
                className={`w-full bg-white border border-[#DEE2E7] rounded-md shadow-sm min-h-[325px] 
                    px-[1rem] pt-[1.1rem] pb-[1.15rem] max-[534px]:w-max
                    ${isMobile && (
                        `max-[1159px]:min-h-max max-[1159px]:flex max-[1159px]:justify-between max-[1159px]:items-start
                        max-[1159px]:gap-[2.65rem] max-[1159px]:px-[1.05rem] max-[803px]:flex-wrap max-[803px]:gap-y-[2.15rem]
                        max-[803px]:p-[1.2rem] max-[803px]:pb-[1.35rem]`
                    )}
                    
                `}
            >
                <div id="seller" className="flex gap-3">
                    <p className="flex justify-center items-center text-[#4CA7A799] font-semibold text-[28px] w-12 h-12 bg-[#C6F3F1] rounded">
                        R
                    </p>
                    <div className="text-[#1C1C1C]">
                        <p>Supplier</p>
                        <p>Guanjoi Trading LLC</p>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-[#E0E0E0] mt-5 mb-3.5 min-[535px]:max-[1159px]:hidden"></div>
                <div className="space-y-2">
                    <div className="flex gap-[0.85rem]">
                        <img src={germanyFlag} width={21} height={15} alt="germany flag" />
                        <p className="text-[#8B96A5]">Germany, Berlin</p>
                    </div>
                    <div className="flex gap-[1rem]">
                        <img src={verifiedUserIcon} className="ml-[0.177rem]" alt="verified user icon" />
                        <p className="text-[#8B96A5]">Verified Seller</p>
                    </div>
                    <div className="flex gap-[0.95rem]">
                        <img src={worldIcon} className="ml-[0.125rem]" alt="world icon" />
                        <p className="text-[#8B96A5]">Worldwide shipping</p>
                    </div>
                </div>
                <div className="w-[248px] space-y-2 mt-[1.85rem] min-[535px]:max-[1159px]:mt-0">
                    <Link to={"/#inquiry-section"}>
                        <button className="primary-gradient text-white font-medium w-full h-10 rounded-md">
                            Send inquiry
                        </button>
                    </Link>
                    <button className="bg-white hover:bg-[hsl(216,98%,95%)] transitions text-[hsl(216,98%,52%)] font-medium border border-[#DEE2E7] w-full h-10 rounded-md">
                        Seller’s profile
                    </button>
                </div>
            </div>
            <button
                onClick={() => handleSaveProduct()}
                className="group flex items-center gap-1.5 mx-auto mt-[1.35rem]"
            >
                {
                    isSaved
                        ? <img src={filledHeart} alt="filled heart icon" />
                        : <img src={outlinedHeart} alt="outlined heart icon" />
                }
                <span className="text-[#0D6EFD] group-hover:text-[hsl(216,98%,61%)] font-medium transitions">
                    {isSaved ? "Saved" : "Save for later"}
                </span>
            </button>
        </div>
    );
};
