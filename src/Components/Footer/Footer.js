import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import {
    FooterContainer, FooterWrapper,
    FooterLinksContainer, FooterLinksWrapper,
    FooterLinkItems, FooterLinkTitle,
    FooterLink, SocialMedia,
    SocialMediaWrap, SocialLogo,
    WebSiteRights, SocialIcons,
    SocialIconLink, 
} from './FooterElements';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper> 
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">How it works</FooterLink> 
                                <FooterLink to="/signin">Testimonials</FooterLink> 
                                <FooterLink to="/signin">Careers</FooterLink> 
                                <FooterLink to="/signin">Clients</FooterLink> 
                                <FooterLink to="/signin">Terms Of Service</FooterLink> 
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">How it works</FooterLink> 
                                <FooterLink to="/signin">Testimonials</FooterLink> 
                                <FooterLink to="/signin">Careers</FooterLink> 
                                <FooterLink to="/signin">Clients</FooterLink> 
                                <FooterLink to="/signin">Terms Of Service</FooterLink> 
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper> 
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">How it works</FooterLink> 
                                <FooterLink to="/signin">Testimonials</FooterLink> 
                                <FooterLink to="/signin">Careers</FooterLink> 
                                <FooterLink to="/signin">Clients</FooterLink> 
                                <FooterLink to="/signin">Terms Of Service</FooterLink> 
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">How it works</FooterLink> 
                                <FooterLink to="/signin">Testimonials</FooterLink> 
                                <FooterLink to="/signin">Careers</FooterLink> 
                                <FooterLink to="/signin">Clients</FooterLink> 
                                <FooterLink to="/signin">Terms Of Service</FooterLink> 
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={ toggleHome }>
                            Paws
                        </SocialLogo>
                        <WebSiteRights>Paws Ⓒ {new Date().getFullYear()} All Rights Reserved</WebSiteRights>
                        <SocialIcons>
                            <SocialIconLink to="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink to="/" target="_blank" aria-label="Instagram ">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink to="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink to="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink to="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    );
};

export default Footer;