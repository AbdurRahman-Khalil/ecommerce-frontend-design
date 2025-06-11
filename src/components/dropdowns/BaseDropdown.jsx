import { useState, useRef } from 'react';

import { AnimatePresence, motion } from 'framer-motion';



export const BaseDropdown = ({
    options,
    selectedOption,
    onSelect,
    renderTrigger,
    renderOption,
    position = "bottom", 
    align = "left", 
    maxHeight = "max-h-[250px]",
    dropdownBtnStyles = "",
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleSelect = (option) => {
        onSelect(option);
        setIsOpen(false);
    };

    const positionClasses = {
        bottom: 'top-full mt-1',
        top: 'bottom-full mb-1',
    };

    const alignClasses = {
        left: 'left-0',
        right: 'right-0',
    };

    const initialAnimation = {
        bottom: { opacity: 0, y: -10 },
        top: { opacity: 0, y: 10 },
    };

    const animateAnimation = {
        bottom: { opacity: 1, y: 0 },
        top: { opacity: 1, y: 0 },
    };

    const exitAnimation = {
        bottom: { opacity: 0, y: -10 },
        top: { opacity: 0, y: 10 },
    };


    return (
        <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button
                type="button"
                className={`flex items-center focus:outline-none ${dropdownBtnStyles}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {renderTrigger(selectedOption, isOpen)}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        className={`absolute ${positionClasses[position]} ${alignClasses[align]} z-10 w-max ${maxHeight} overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg`}
                        initial={initialAnimation[position]}
                        animate={animateAnimation[position]}
                        exit={exitAnimation[position]}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={() => setIsOpen(true)}
                        onMouseLeave={() => setIsOpen(false)}
                    >
                        {options.map((option) => (
                            <li
                                key={option.code || option}
                                className={`px-4 py-2.5 hover:bg-[#E5F1FF] cursor-pointer flex items-center 
                                    ${(option.code || option) === (selectedOption.code || selectedOption) ? "bg-[#E5F1FF]" : ""}`}
                                onClick={() => handleSelect(option)}
                            >
                                {renderOption(option, selectedOption)}
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
};