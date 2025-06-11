import { FooterLinks } from './FooterLinks';
import { FooterLink } from './FooterLink';



export const ForUsers = ({ footerPortionTitle }) => {
    return (
        <div>
            <p className="mb-2.5 font-medium">{footerPortionTitle}</p>
            <FooterLinks>
                <FooterLink footerLinkDest={"/login"} footerLinkText={"Login"} />
                <FooterLink footerLinkDest={"/resgister"} footerLinkText={"Register"} />
                <FooterLink footerLinkDest={"/settings"} footerLinkText={"Settings"} />
                <FooterLink footerLinkDest={"/orders"} footerLinkText={"My Orders"} />
            </FooterLinks>
        </div>
    );
};