import { NextPreviousBtn } from "../../../../components/svgs/NextPreviousBtn";


export const PaginationNumbers = ({ setCurrentPage, currentPage, totalPages }) => {
    return (
        <div className="flex items-center">
            <NextPreviousBtn
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                roundedClass={"rounded-l-md"}
                disabled={currentPage === 1}
                svgD={"M14.6446 5.36644C14.1708 4.87785 13.4055 4.87785 12.9317 5.36644L7.35535 11.1168C6.88155 11.6054 6.88155 12.3946 7.35535 12.8832L12.9317 18.6336C13.4055 19.1221 14.1708 19.1221 14.6446 18.6336C15.1185 18.145 15.1185 17.3557 14.6446 16.8671L9.9309 11.9937L14.6446 7.13289C15.1185 6.6443 15.1063 5.84251 14.6446 5.36644Z"}
            />

            {Array.from({ length: totalPages }, (_, idx) => (
                <button
                    key={idx}
                    onClick={() => setCurrentPage(idx + 1)}
                    className={`font-medium w-11 h-10 border border-[#DEE2E7] transitions
                                ${currentPage === idx + 1 ? "bg-[#EFF2F4] text-[#8B96A5]" : "bg-white text-[#1C1C1C] hover:bg-[#EFF2F4]"
                        }`}
                >
                    {idx + 1}
                </button>
            ))}

            <NextPreviousBtn
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                roundedClass={"rounded-r-md"}
                disabled={currentPage === totalPages}
                svgD={"M8.35535 5.36831C7.88155 5.85729 7.88155 6.64716 8.35535 7.13614L13.0691 12.0008L8.35535 16.8654C7.88155 17.3544 7.88155 18.1443 8.35535 18.6333C8.82916 19.1222 9.59453 19.1222 10.0683 18.6333L15.6446 12.8784C16.1185 12.3895 16.1185 11.5996 15.6446 11.1106L10.0683 5.35577C9.60668 4.87934 8.82916 4.87934 8.35535 5.36831Z"}
            />
        </div>
    );
};
