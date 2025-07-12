import { motion, AnimatePresence } from "framer-motion";

import { GridProduct } from "./GridProduct";


export const GridView = ({ filteredProducts }) => {
    return (
        <motion.div
            className="grid grid-cols-1 min-[536px]:grid-cols-2 min-[792px]:grid-cols-3 gap-[1.15rem] min-[935px]:max-[1059px]:grid-cols-2"
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
