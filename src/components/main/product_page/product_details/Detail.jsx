
export const Detail = ({ title, description }) => {
    return (
        <div
            className="grid grid-cols-3 gap-40 
                max-[1159px]:gap-16 max-[444px]:gap-24 max-[384px]:gap-32"
        >
            <p className="text-[#8B96A5] leading-[100%] col-span-1">{`${title}:`}</p>
            <p className="text-[#505050] leading-[100%] col-span-2 text-pretty">{description}</p>
        </div>
    );
};
