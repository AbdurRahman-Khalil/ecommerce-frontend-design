import { Link } from "react-router-dom";

import useProductsStore from "../../../../store/products/ProductsStore";

import { PaymentCard } from "./PaymentCard";

import americanExpressLogo from "../../../../assets/svgs/cart/payement_cards/american_express.svg";
import mastercardLogo from "../../../../assets/svgs/cart/payement_cards/master_card.svg";
import paypalLogo from "../../../../assets/svgs/cart/payement_cards/paypal.svg";
import visaLogo from "../../../../assets/svgs/cart/payement_cards/visa.svg";
import applepayLogo from "../../../../assets/images/cart/apple_pay.png";



export const TotalAmounts = () => {
    const totalCartPrice = useProductsStore((state) => state.totalCartPrice);

    return (
        <div className="products-amount bg-white w-full h-max border border-[#DEE2E7] rounded-md shadow-md p-[1.2rem]">
            <p className="text-[#00B517]">Discounted prices are calculated for products.</p>
            
            <div className="w-[244px] h-[1px] bg-[#E4E4E4] mt-4 mb-5"></div>
            
            <h6 className="text-[#1C1C1C] font-semibold leading-[100%] flex justify-between items-center">
                <span>Total:</span>
                <span className="font-semibold text-xl leading-7">{`$${totalCartPrice().toFixed(2)}`}</span>
            </h6>
            
            <button className="w-[240px] h-[54px] bg-[hsl(128,100%,35%)] hover:bg-[hsl(128,100%,40%)] rounded-lg mt-[1.35rem] transitions">
                <Link className="text-white">Checkout</Link>
            </button>
            
            <div className="payment-cards flex gap-2 w-max mx-auto mt-[1.15rem]">
                <PaymentCard paymentCardLogo={americanExpressLogo} />
                <PaymentCard paymentCardLogo={mastercardLogo} />
                <PaymentCard paymentCardLogo={paypalLogo} />
                <PaymentCard paymentCardLogo={visaLogo} />
                <PaymentCard paymentCardName={"applePay"} paymentCardLogo={applepayLogo} />
            </div>
        </div>
    );
};
