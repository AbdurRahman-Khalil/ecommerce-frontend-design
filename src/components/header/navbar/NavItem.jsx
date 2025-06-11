import { Link } from "react-router-dom";

export const NavItem = ({ destination, navItemImg, navItemText }) => {
    return (
        <li>
            <Link to={destination} className="group">
                <img className="mx-auto group-hover:brightness-[0.75] transitions" src={navItemImg} alt={`${navItemText}' icon`} />
                <span className="text-center text-sm text-gray-400 tracking-wide font-light group-hover:brightness-[0.7] transitions">
                    {navItemText}
                </span>
            </Link>
        </li>
    );
};
