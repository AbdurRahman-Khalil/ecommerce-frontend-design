import { Link } from "react-router-dom";


export const AsideMenuItem = ({ onClick, destination, menuItemIcon, menuItemText }) => {
    return (
        <li>
            <Link
                to={destination}
                className="flex items-center gap-3.5 w-[260px] h-12 pl-3 mx-auto rounded-xl"
                onClick={onClick}
            >
                {destination !== "" && <img src={menuItemIcon} alt={`${menuItemText} menu item icon`} />}
                <span>{menuItemText}</span>
            </Link>
        </li>
    );
};
