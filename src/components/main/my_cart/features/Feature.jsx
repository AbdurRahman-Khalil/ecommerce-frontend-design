
export const Feature = ({ feature }) => {
    return (
        <div className="flex items-center gap-2.5">
            <div className="w-12 h-12 rounded-full bg-[#DEE2E7] flex justify-center items-center">
                <img src={feature.icon} alt="feature icon" />
            </div>
            <div>
                <p className="text-[#1C1C1C] text-[0.95rem]">{feature.title}</p>
                <p className="text-[#A9ACB0] text-[0.895rem] leading-[1.2rem]">{feature.description}</p>
            </div>
        </div>
    );
};
