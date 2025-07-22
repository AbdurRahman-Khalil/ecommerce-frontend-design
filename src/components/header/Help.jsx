import { useState, useRef } from 'react';

import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { ExpandMore } from '../svgs/ExpandMore';



export const Help = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);


    return (
        <div className="relative max-[584px]:hidden" ref={dropdownRef}>
            <button
                type="button"
                className="flex items-center justify-between px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => setIsOpen(!isOpen)}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                <span className="font-medium">Help</span>
                <ExpandMore
                    svgAnimations={{ rotate: isOpen ? 0 : 180 }}
                    fillColor={"#8B96A5"}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        className="absolute top-full z-10 mt-1 w-max bg-white border border-gray-200 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={() => setIsOpen(true)}
                        onMouseLeave={() => setIsOpen(false)}
                    >
                        <Link
                            to={"/contact"}
                            className="px-4 pt-3 pb-2 hover:bg-[#E5F1FF] cursor-pointer flex items-center"
                        >
                            Contact
                        </Link>
                        <Link
                            to={"/customer_support"}
                            className="px-4 pb-3 pt-2 hover:bg-[#E5F1FF] cursor-pointer flex items-center"
                        >
                            Customer support
                        </Link>
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
};
