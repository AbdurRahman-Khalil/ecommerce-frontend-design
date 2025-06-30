import { useState } from "react";

import toast from "react-hot-toast";



export const Coupon = () => {
    const [couponValue, setCouponValue] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();

        toast.success("Coupon applied successfully.");
        setCouponValue("");
    }

    
    return (
        <div className="bg-white w-full h-[110px] border border-[#DEE2E7] rounded-md space-y-2.5 px-[1.15rem] py-5">
            <p className="text-[#505050] leading-[100%]">Have a coupon?</p>
            <form onSubmit={handleSubmit} className="flex w-[247px] h-10 ">
                <input
                    type="text"
                    className="pl-[0.7rem] border border-[#DEE2E7] border-r-0 h-full rounded-s-md w-[164px] focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                    minLength={6}
                    maxLength={12}
                    placeholder="Add coupon"
                    value={couponValue}
                    onChange={(e) => setCouponValue(e.target.value)}
                />
                <button type="submit" className="text-[#0D6EFD] font-medium leading-[100%] hover:bg-[hsl(216,98%,95%)] border border-[#DEE2E7] h-full rounded-e-md px-4 transitions">
                    Apply
                </button>
            </form>
        </div>
    );
};
