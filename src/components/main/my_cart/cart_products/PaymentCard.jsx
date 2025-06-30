
export const PaymentCard = ({ paymentCardLogo, paymentCardName = "" }) => {
    return (
        <div className="w-[34px] h-[22px] flex justify-center items-center border border-[#EEEEEE] rounded">
            <img
                src={paymentCardLogo}
                width={paymentCardName === "applePay" && 26}
                alt="Payment card logo"
            />
        </div>
    );
};
