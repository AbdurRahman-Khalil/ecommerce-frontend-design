import { Routes, Route } from "react-router-dom";

import { Profile } from "../../pages/Profile";
import { Messages } from "../../pages/Messages";
import { Orders } from "../../pages/Orders";
import { MyCart } from "../../pages/MyCart";



export const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/my_cart" element={<MyCart />} />
            </Routes>
        </main>
    );
};
