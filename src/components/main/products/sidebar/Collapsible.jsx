import { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import { ExpandMore } from '../../../svgs/ExpandMore';



export const Collapsible = ({ title, children, initialOpen = true, marginBottom = "mb-6" }) => {
    const [isOpen, setIsOpen] = useState(initialOpen);

    const svgAnimations = {
        rotate: isOpen ? 0 : 180,
    };

    const contentVariants = {
        hidden: { opacity: 0, height: 0, overflow: 'hidden' },
        visible: { opacity: 1, height: 'auto', overflow: 'visible' },
    };


    return (
        <div className={`border-t border-[#DEE2E7] ${isOpen ? "pt-4" : "pt-5"} transitions`}>
            {/* Clickable Header */}
            <div
                className={`flex justify-between items-center cursor-pointer ${marginBottom}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <h2 className="font-semibold text-[#1C1C1C] leading-[100%]">
                    {title}
                </h2>
                <ExpandMore svgAnimations={svgAnimations} fillColor={"#8B96A5"} />
            </div>

            {/* Collapsible Content */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="hidden" 
                        animate="visible" 
                        exit="hidden" 
                        variants={contentVariants}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};



