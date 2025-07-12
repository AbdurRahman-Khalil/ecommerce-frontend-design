import useAsideBarStore from "../../../store/asidebar/asideBarStore";

import menuIcon from "../../../assets/svgs/header_svgs/menu.svg";


export const MenuBtn = () => {
    const { toggleSidebar } = useAsideBarStore();

    return (
        <button
            className="ml-1.5 min-[780px]:hidden"
            onClick={() => toggleSidebar()}
        >
            <img src={menuIcon} alt="menu icon" />
        </button>
    );
};
