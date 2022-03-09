import styled, { ServerStyleSheet } from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
    background-color: black;
    justify-content: center;
    align-items: center;
`;

export const FooterWrap = styled.div`
    padding: 24px 24px;
    display: absolute;
    flex-direction: column:
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const FooterText = styled.h1`
    font-size: 24px;
    color: red;
    text-align: center;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #139fcd;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
    color: green;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: blue;
        transition: 0.3s ease-out;
    }
`;

export const SocialMedia = styled.section`
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto 10px auto;

    @media screen and (max-width: 820px) {
        flex-direction: row;
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SocialIconLink = styled.a`
    color: #f3f3f7;
    font-size: 24px;
`;

export const CopyrightWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: row;
    }
`;

export const Logo = styled(Link)`
    color: green;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`;

export const WebsiteRights = styled.small`
    color: #f3f3f7;
    margin-bottom: 16px;
    margin-left: 10px;
`;