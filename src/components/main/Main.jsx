import { Routes, Route, useLocation } from "react-router-dom";

import { Homepage } from "../../pages/Homepage";
import { Products } from "../../pages/Products";
import { ProductPage } from "../../pages/ProductPage";
import { Profile } from "../../pages/Profile";
import { Messages } from "../../pages/Messages";
import { Orders } from "../../pages/Orders";
import { MyCart } from "../../pages/MyCart";



export const Main = () => {
    const location = useLocation();
    const isMyCart = location.pathname.includes("my-cart");

    return (
        <main
            className={`mt-[9.6rem] max-w-[1180px] mx-auto 
            max-[1212px]:max-w-full max-[1212px]:mx-0 ${isMyCart ? "max-[779px]:mt-[9.25rem]" : "max-[779px]:mt-[12.9rem]"}`}
        >
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:category/:pid" element={<ProductPage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/my-cart" element={<MyCart />} />
            </Routes>
        </main>
    );
};
