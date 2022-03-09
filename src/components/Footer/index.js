import react from "react";
import {
    FooterContainer,
    FooterWrap,
    FooterText,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    CopyrightWrap,
    Logo,
    SocialIcons,
    SocialIconLink,
    WebsiteRights,
} from './FooterElements';
import { 
    FaInstagram,
    FaFacebook,
    FaYoutube,
    FaTwitter,
    FaCopyright,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <FooterContainer>
            {/* <FooterWrap>
                <FooterText>
                    Footer Headline
                </FooterText>
            </FooterWrap> */}
            {/* <SocialMedia>
                <SocialMediaWrap>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank"
                        aria-label="Instagram">
                            <FaInstagram />                               
                        </SocialIconLink>
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank"
                        aria-label="Facebook">
                            <FaFacebook />    
                        </SocialIconLink>
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank"
                        aria-label="Youtube">
                            <FaYoutube />    
                        </SocialIconLink>
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank"
                        aria-label="Twitter">
                            <FaTwitter />     
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia> */}
            <CopyrightWrap>
                {/* <Logo to='/'>
                    NUV Yuva  
                </Logo> */}
                <WebsiteRights>
                    <FaCopyright /> NUV Yuva {new Date().getFullYear()} All rights reserved.
                </WebsiteRights>           
            </CopyrightWrap>
        </FooterContainer>
    )
}

export default Footer