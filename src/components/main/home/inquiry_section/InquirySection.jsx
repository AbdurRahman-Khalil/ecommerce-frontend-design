import { useState } from "react";

import toast from "react-hot-toast";



export const InquirySection = () => {
    const [form, setForm] = useState({
        item: "",
        details: "",
        quantity: "",
        unit: "Pcs",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.item || !form.quantity) {
            alert("Please fill in the item name and quantity.");
            return;
        }

        console.log("Inquiry submitted:", form);
        setSubmitted(true);
        toast.success("Inquiry submitted successfully!");
        setForm({ item: "", details: "", quantity: "", unit: "Pcs" });
    };


    return (
        <section
            aria-label="Customer Inquiry Form"
            id="inquiry-section"
            className="relative mt-[1.25rem] bg-[#E0E0E0] rounded-md max-[1212px]:rounded-none"
        >
            <div
                id="inquiry-overlay"
                className="absolute inset-0 rounded-md flex justify-between gap-52 p-10 transitions
                max-[1212px]:rounded-none max-[1024px]:gap-48 max-[915px]:gap-40 max-[833px]:gap-28 max-[833px]:px-8 max-[499px]:px-6
                max-[755px]:gap-11 max-[755px]:flex-wrap"
            >
                {/* Text */}
                <div className="text-[#FFFFFF] space-y-3 max-[755px]:w-full">
                    <h2 className="text-[2rem] leading-10 font-semibold">
                        An easy way to send <br /> requests to all suppliers
                    </h2>
                    <p className="text-white/80">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </p>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-md shadow px-6 pt-[1.45rem] pb-[1.55rem] min-w-[491px] min-h-[346px] self-center text-gray-700 transitions
                    max-[1024px]:min-w-[440px] max-[915px]:min-w-[390px] max-[833px]:min-w-[360px] max-[755px]:min-w-full max-[755px]:self-start"
                >
                    <h4 className="text-xl font-semibold leading-7">Send quote to suppliers</h4>

                    <input
                        type="text"
                        name="item"
                        value={form.item}
                        onChange={handleChange}
                        placeholder="What item you need?"
                        className="w-full px-3 py-2 mt-4 border border-[#DEE2E7] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transitions"
                    />

                    <textarea
                        name="details"
                        value={form.details}
                        onChange={handleChange}
                        placeholder="Type more details"
                        className="w-full px-3 py-2 mt-[1.35rem] h-[73px] border border-[#DEE2E7] rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transitions"
                    />

                    <div className="flex items-center gap-2 mt-4 mb-5">
                        <input
                            type="number"
                            name="quantity"
                            value={form.quantity}
                            onChange={handleChange}
                            placeholder="Quantity"
                            className="px-3 py-2 w-[206px] max-[392px]:w-[150px] border border-[#DEE2E7] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transitions"
                            min="1"
                        />
                        <select
                            name="unit"
                            value={form.unit}
                            onChange={handleChange}
                            className="px-3 py-[0.55rem] w-[111px] max-[392px]:w-[80px] border border-[#DEE2E7] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transitions"
                        >
                            <option>Pcs</option>
                            <option>Kg</option>
                            <option>Box</option>
                            <option>Pack</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="primary-gradient font-medium w-[128px] h-[40px] text-white rounded-md"
                    >
                        Send inquiry
                    </button>
                </form>
            </div>
        </section>
    );
};

