import { motion, AnimatePresence } from "framer-motion";

import { GridProduct } from "./GridProduct";


export const GridView = ({ filteredProducts }) => {
    return (
        <motion.div
            className="grid grid-cols-3 gap-[1.15rem]"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.05,
                    },
                },
            }}
        >
            <AnimatePresence>
                {filteredProducts.map((product) => (
                    <GridProduct key={product.id} product={product} />
                ))}
            </AnimatePresence>
        </motion.div>
    );
};
