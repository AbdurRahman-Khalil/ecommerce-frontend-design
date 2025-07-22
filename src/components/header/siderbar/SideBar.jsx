import { useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import useAsideBarStore from "../../../store/asidebar/asideBarStore";

import { User } from "./User";
import { AsideMenuItem } from "./AsideMenuItem";

import homeIcon from "../../../assets/svgs/header_svgs/sidebar/home.svg";
import categoriesIcon from "../../../assets/svgs/header_svgs/sidebar/categories.svg";
import grayHeartIcon from "../../../assets/svgs/header_svgs/sidebar/gray_outlined_heart.svg";
import ordersIcon from "../../../assets/svgs/header_svgs/sidebar/orders.svg";
import contactIcon from "../../../assets/svgs/header_svgs/sidebar/contact.svg";
import businessIcon from "../../../assets/svgs/header_svgs/sidebar/business.svg";
import closeIcon from "../../../assets/svgs/header_svgs/sidebar/close.svg";



const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
};

const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: { x: "0%" },
    exit: { x: "-100%" },
};


export const SideBar = () => {
    const { isSidebarOpen, setIsSidebarOpen } = useAsideBarStore();

    const handleClickOutside = (e) => {
        if (e.target.id === "sidebar-overlay") {
            setIsSidebarOpen(false);
        }
    };

    const handleClose = () => setIsSidebarOpen(false);

    useEffect(() => {
        document.body.style.overflow = isSidebarOpen ? "hidden" : "";
        
        return () => {
            document.body.style.overflow = "";
        };
    }, [isSidebarOpen]);


    return (
        <AnimatePresence>
            {isSidebarOpen && (
                <motion.div
                    id="sidebar-overlay"
                    className="fixed top-0 left-0 bottom-0 z-50 w-full h-full bg-gray-950/60"
                    onClick={handleClickOutside}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={overlayVariants}
                >
                    <motion.aside
                        className="relative max-w-[280px] w-full h-full bg-[#FFFFFF] text-[#1C1C1C] border-r border-[hsl(215,13%,88%,0.9)]"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={sidebarVariants}
                        transition={{ type: "tween", duration: 0.3 }}
                    >
                        <button
                            className="absolute top-3 right-2.5"
                            onClick={handleClose}
                        >
                            <img
                                src={closeIcon}
                                width={30}
                                alt="menu close icon"
                            />
                        </button>
                        <User />
                        <ul className="py-3">
                            <div className="space-y-0.5">
                                <AsideMenuItem
                                    onClick={handleClose}
                                    destination={"/"}
                                    menuItemText={"Home"}
                                    menuItemIcon={homeIcon}
                                />
                                <AsideMenuItem
                                    onClick={handleClose}
                                    destination={"/products"}
                                    menuItemText={"Categories"}
                                    menuItemIcon={categoriesIcon}
                                />
                                <AsideMenuItem
                                    onClick={handleClose}
                                    destination={"/my-cart#saved-products"}
                                    menuItemText={"Saved"}
                                    menuItemIcon={grayHeartIcon}
                                />
                                <AsideMenuItem
                                    onClick={handleClose}
                                    destination={"/orders"}
                                    menuItemText={"My orders"}
                                    menuItemIcon={ordersIcon}
                                />
                            </div>
                            <div id="line" className="w-[260px] h-[1px] bg-[#DEE2E7] mx-auto my-2.5"></div>
                            <div className="space-y-0.5">
                                <AsideMenuItem
                                    onClick={handleClose}
                                    destination={"/contact"}
                                    menuItemText={"Contact us"}
                                    menuItemIcon={contactIcon}
                                />
                                <AsideMenuItem
                                    onClick={handleClose}
                                    destination={"/about"}
                                    menuItemText={"About"}
                                    menuItemIcon={businessIcon}
                                />
                            </div>
                            <div id="line" className="w-[260px] h-[1px] bg-[#DEE2E7] mx-auto my-2.5"></div>
                            <div className="space-y-0.5">
                                <AsideMenuItem
                                    onClick={handleClose}
                                    destination={""}
                                    menuItemText={"User agreement"}
                                />
                                <AsideMenuItem
                                    onClick={handleClose}
                                    destination={""}
                                    menuItemText={"Partnership"}
                                />
                                <AsideMenuItem
                                    onClick={handleClose}
                                    destination={""}
                                    menuItemText={"Privacy policy"}
                                />
                            </div>
                        </ul>
                    </motion.aside>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
