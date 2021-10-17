import React from 'react'
import { animateTopScroll as scroll } from 'react-scroll/modules/mixins/animate-scroll'
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaYoutube
} from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink

} from './FooterElements'

const Footer = () => {
      const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                    <FooterLinkItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="signin">How it works</FooterLink>
                        <FooterLink to="signin">How it works</FooterLink>
                        <FooterLink to="signin">How it works</FooterLink>
                        <FooterLink to="signin">How it works</FooterLink>
                        <FooterLink to="signin">How it works</FooterLink>
                        <FooterLink to="signin">How it works</FooterLink>
                    </FooterLinkItems>

                    <FooterLinkItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="signin">How it works</FooterLink>
                        <FooterLink to="signin">How it works</FooterLink>
                        <FooterLink to="signin">How it works</FooterLink>
                        <FooterLink to="signin">How it works</FooterLink>
                        <FooterLink to="signin">How it works</FooterLink>
                        <FooterLink to="signin">How it works</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                  <FooterLinksWrapper>
                    <FooterLinkItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="signin">How it works</FooterLink>
                        <FooterLink to="signin">How it works</FooterLink>
                        <FooterLink to="signin">How it works</FooterLink>
                        <FooterLink to="signin">How it works</FooterLink>
                        <FooterLink to="signin">How it works</FooterLink>
                        <FooterLink to="signin">How it works</FooterLink>
                    </FooterLinkItems>

                    <FooterLinkItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="signin">How it works</FooterLink>
                        <FooterLink to="signin">How it works</FooterLink>
                        <FooterLink to="signin">How it works</FooterLink>
                        <FooterLink to="signin">How it works</FooterLink>
                        <FooterLink to="signin">How it works</FooterLink>
                        <FooterLink to="signin">How it works</FooterLink>
                    </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                
                <SocialMedia>
                    <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        dolla
                    </SocialLogo>
                    <WebsiteRights>dollo o {new Date().getFullYear()}
                        All rights reserved</WebsiteRights>
                    <SocialIcons>

                    <SocialIconLink href="/" target="_blank"
                    aria-label="Facebook">
                      <FaFacebook/>
                        </SocialIconLink>
                        
                     <SocialIconLink href="/" target="_blank"
                    aria-label="Instagram">
                      <FaInstagram/>
                    </SocialIconLink>

                    <SocialIconLink href="/" target="_blank"
                    aria-label="Twitter">
                      <FaTwitter/>
                        </SocialIconLink>
                        
                     <SocialIconLink href="/" target="_blank"
                    aria-label="Linkedin">
                      <FaLinkedin/>
                        </SocialIconLink>

                     <SocialIconLink href="/" target="_blank"
                    aria-label="Github">
                      <FaGithub/>
                        </SocialIconLink>

                     <SocialIconLink href="/" target="_blank"
                    aria-label="Youtub">
                      <FaYoutube/>
                    </SocialIconLink>    


                    </SocialIcons>
                    </SocialMediaWrap>
                 </SocialMedia>
                
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
