
export const Feature = ({ feature }) => {
    return (
        <div className="w-[21rem] flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-[#DEE2E7] flex justify-center items-center">
                <img src={feature.icon} alt="feature icon" />
            </div>
            <div className="flex-1">
                <p className="text-[#1C1C1C] text-[0.95rem]">{feature.title}</p>
                <p className="text-[#A9ACB0] text-[0.895rem] leading-[1.2rem]">{feature.description}</p>
            </div>
        </div>
    );
};
