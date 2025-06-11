import { FooterLinks } from './FooterLinks';
import { FooterLink } from './FooterLink';



export const Information = ({ footerPortionTitle }) => {
    return (
        <div>
            <p className="mb-2.5 font-medium">{footerPortionTitle}</p>
            <FooterLinks>
                <FooterLink footerLinkDest={"/help_center"} footerLinkText={"Help Us"} />
                <FooterLink footerLinkDest={"/money_refund"} footerLinkText={"Money Refund"} />
                <FooterLink footerLinkDest={"/shipping"} footerLinkText={"Shipping"} />
                <FooterLink footerLinkDest={"/contact_us"} footerLinkText={"Contact us"} />
            </FooterLinks>
        </div>
    );
};