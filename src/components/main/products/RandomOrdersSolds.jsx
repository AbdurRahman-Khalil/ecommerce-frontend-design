import { useMemo } from "react";


export const RandomOrdersSolds = ({ ordersSoldsText }) => {
    const randomOrdersSolds = useMemo(() => Math.floor(Math.random() * 250) + 50, []);

    return (
        <p className="text-[#8B96A5]">
            {randomOrdersSolds} {ordersSoldsText}
        </p>
    );
};
