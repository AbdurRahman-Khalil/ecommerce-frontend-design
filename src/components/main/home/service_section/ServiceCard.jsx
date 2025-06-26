
export const ServiceCard = ({ service }) => {
    return (
        <div className="relative border border-[#E0E0E0] rounded-md bg-white">
            <div className="max-w-[286px] h-[120px] rounded-t-md">
                <img src={service.img} className="w-full h-full object-cover rounded-t-md brightness-[58%]" alt="service image" />
            </div>
            <p className="font-medium leading-[1.375rem] p-[1.15rem] pt-3.5 pr-20">{service.description}</p>
            <div className="absolute bottom-12 right-[1.1rem] flex justify-center items-center bg-[#D1E7FF] border-2 border-white rounded-full w-[3.4375rem] h-[3.4375rem]">
                <img src={service.icon} alt="service icon" />
            </div>
        </div>
    );
};
