import { motion, AnimatePresence } from "framer-motion";

import { ListProduct } from "./ListProduct";


export const ListView = ({ filteredProducts }) => {
    return (
        <motion.ul
            className="space-y-2.5"
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
                    <ListProduct key={product.id} product={product} />
                ))}
            </AnimatePresence>
        </motion.ul>
    );
};
