import facebookIcon from "../../assets/svgs/footer_svgs/socials/facebook.svg";
import twitterIcon from "../../assets/svgs/footer_svgs/socials/twitter.svg";
import linkedinIcon from "../../assets/svgs/footer_svgs/socials/linkedin.svg";
import instagramIcon from "../../assets/svgs/footer_svgs/socials/instagram.svg";
import youtubeIcon from "../../assets/svgs/footer_svgs/socials/youtube.svg";



export const SocialLinks = () => {
    return (
        <ul className="social-links flex items-center gap-3">
            <li><a href=""><img src={facebookIcon} className="hover:brightness-[0.8] transitions" alt="facebook icon" /></a></li>
            <li><a href=""><img src={twitterIcon} className="hover:brightness-[0.8] transitions" alt="twitter icon" /></a></li>
            <li><a href=""><img src={linkedinIcon} className="hover:brightness-[0.8] transitions" alt="linkedin icon" /></a></li>
            <li><a href=""><img src={instagramIcon} className="hover:brightness-[0.8] transitions" alt="instagram icon" /></a></li>
            <li><a href=""><img src={youtubeIcon} className="hover:brightness-[0.8] transitions" alt="youtube icon" /></a></li>
        </ul>
    );
};
