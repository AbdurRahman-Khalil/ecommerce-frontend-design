import { useState } from "react";

import toast from "react-hot-toast";

import emailIcon from "../../assets/svgs/newsletter/email.svg";



export const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 1. Eamil Validation
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        // 2. Check for subscribedEmails before loading
        const subscribedEmails = JSON.parse(localStorage.getItem("subscribedEmails")) || [];

        if (subscribedEmails.includes(email)) {
            toast("This email is already subscribed.", {
                icon: "⚠️",
                style: {
                    background: "#FFF3E7",
                    color: "#FF9017",
                    padding: "11px",
                },
            });

            return;
        }

        // 3. Start loading and send the email
        setLoading(true);

        try {
            const randomString = "cf3ce337e6ba909c5100cb24a79c467e";
            
            const res = await fetch(`https://formsubmit.co/${randomString}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (res.ok) {
                // Save email to localStorage
                localStorage.setItem("subscribedEmails", JSON.stringify([...subscribedEmails, email]));

                toast.success("Newsletter Subscribed successfully!");
                setEmail("");

            } else {
                throw new Error("Subscription failed");
            }

        } catch (err) {
            toast.error("Failed to subscribe. Please try again." + err);

        } finally {
            // End loading
            setLoading(false);
        }
    };


    return (
        <section aria-label="Newsletter Subscribe" className="bg-[#EFF2F4] py-10 min-h-[190px]">
            <div className="max-w-[1180px] mx-auto text-center">
                <h4 className="text-xl font-semibold leading-7">Subscribe on our newsletter</h4>
                <p className="text-[#606060] mb-[1.35rem]">Get daily news on upcoming offers from many suppliers all over the world</p>
                <form
                    onSubmit={handleSubmit}
                    className="flex items-center justify-center gap-2"
                >
                    <div className="relative w-[274px] h-[40px]">
                        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">
                            <img src={emailIcon} alt="email icon" />
                        </span>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            disabled={loading}
                            className="pl-9 pr-4 rounded-md border border-[#DEE2E7] focus:outline-none focus:ring-2 focus:ring-blue-500 max-w-full min-h-full disabled:cursor-not-allowed"
                        />
                    </div>
                    <button
                        type="submit"
                        className={`primary-gradient font-medium ${loading ? "w-fit px-3.5" : "w-[110px]"} h-[40px] text-white rounded-md disabled:opacity-60 duration-[150ms] ease-linear`}
                        disabled={loading}
                    >
                        {
                            loading
                                ? (<p className="flex justify-center items-center gap-2">
                                    <div class="loader"></div>
                                    <span className="">Subscribing</span>
                                </p>)
                                : "Subscribe"
                        }
                    </button>
                </form>
            </div>
        </section>
    );
};

