import { Routes, Route, useLocation } from "react-router-dom";

import { Breadcrumb } from "../main/products/Breadcrumb";

import { Homepage } from "../../pages/Homepage";
import { Products } from "../../pages/Products";
import { Profile } from "../../pages/Profile";
import { Messages } from "../../pages/Messages";
import { Orders } from "../../pages/Orders";



export const Main = () => {
    const location = useLocation();

    const showBreadcrumb = location.pathname === "/products" || location.pathname === "/products/:category/:id";

    return (
        <main className="mt-[9.6rem] max-w-[1180px] mx-auto">
            {showBreadcrumb && <Breadcrumb />}
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/products" element={<Products />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/orders" element={<Orders />} />
            </Routes>
        </main>
    );
};
