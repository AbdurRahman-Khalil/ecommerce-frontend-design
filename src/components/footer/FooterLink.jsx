import { Link } from 'react-router-dom';


export const FooterLink = ({ footerLinkDest, footerLinkText }) => {
    return (
        <li>
            <Link to={footerLinkDest} className="text-[#8B96A5] hover:text-gray-800 transitions">
                {footerLinkText}
            </Link>
        </li>
    );
};
