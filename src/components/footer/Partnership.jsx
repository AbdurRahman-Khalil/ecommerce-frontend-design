import { FooterLinks } from './FooterLinks';
import { FooterLink } from './FooterLink';



export const Partnership = ({ footerPortionTitle }) => {
    return (
        <div>
            <p className="mb-2.5 font-medium">{footerPortionTitle}</p>
            <FooterLinks>
                <FooterLink footerLinkDest={"/about_us"} footerLinkText={"About Us"} />
                <FooterLink footerLinkDest={"/find_store"} footerLinkText={"Find store"} />
                <FooterLink footerLinkDest={"/categories"} footerLinkText={"Categories"} />
                <FooterLink footerLinkDest={"/blogs"} footerLinkText={"Blogs"} />
            </FooterLinks>
        </div>
    );
};