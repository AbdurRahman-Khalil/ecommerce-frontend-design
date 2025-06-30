
export const Image = ({ pImage, pTitle }) => {
    return (
        <div aria-label="prodcut image" className="w-[380px] h-[380px] border border-[#DEE2E7] rounded-md">
            <img
                src={pImage}
                className="w-full h-full object-cover rounded-md"
                alt={`${pTitle}'s image`}
            />
        </div>
    );
};
