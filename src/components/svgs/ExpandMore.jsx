import { motion } from 'framer-motion';


export const ExpandMore = ({ svgAnimations, fillColor }) => {
    return (
        <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={svgAnimations}
            transition={{ duration: 0.2 }}
        >
            <path
                d="M12 8.29492L6 14.2949L7.41 15.7049L12 11.1249L16.59 15.7049L18 14.2949L12 8.29492Z"
                fill={fillColor}
            />
        </motion.svg>
    );
};