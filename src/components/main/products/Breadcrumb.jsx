import { useLocation, Link } from "react-router-dom";

import rightIcon from "../../../assets/svgs/products/right_arrow.svg";



export const Breadcrumb = () => {
    const location = useLocation();
    const pathname = location.pathname;

    const pathSegments = pathname.split("/").filter(Boolean); // To remove empty strings

    const formatSegment = (segment) =>
        segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase());

            
    return (
        <nav className="text-[#8B96A5] flex items-center space-x-1 ml-1 mb-[1.35rem]">
            <Link to="/" className="hover:underline">
                Home
            </Link>

            {pathSegments.map((segment, index) => {
                const path = "/" + pathSegments.slice(0, index + 1).join("/");

                return (
                    <div key={index} className="flex items-center space-x-1">
                        <img src={rightIcon} alt="right icon" />
                        {index === pathSegments.length - 1 ? (
                            <span>{formatSegment(segment)}</span>
                        ) : (
                            <Link to={path} className="hover:underline">
                                {formatSegment(segment)}
                            </Link>
                        )}
                    </div>
                );
            })}
        </nav>
    );
};
