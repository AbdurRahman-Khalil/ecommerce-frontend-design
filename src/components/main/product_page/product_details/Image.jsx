
export const Image = ({ pImage, pTitle }) => {
    return (
        <div
            aria-label="prodcut image"
            className="w-[380px] h-[380px] border border-[#DEE2E7] rounded-md 
            max-[500px]:w-full max-[444px]:h-[360px] max-[400px]:h-[340px] max-[375px]:h-[310px]"
        >
            <img
                src={pImage}
                className="w-full h-full object-cover object-center rounded-md"
                alt={`${pTitle}'s image`}
            />
        </div>
    );
};
