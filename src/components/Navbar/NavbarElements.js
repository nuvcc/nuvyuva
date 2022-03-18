import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: #031d26;
    height: 60px;
    margin-top: -60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 1s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 80px 0px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: #f3f3f7;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    &:hover {
        color: #f3f3f7;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 60px;
`
export const NavLink = styled(LinkS)`
    color: #f3f3f7;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 1.2rem;
    padding: 0 2rem;
    height: 100%;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &.active {
        color: #139fcd;
        border-bottom: 3px solid #139fcd;
        transition: 0.2s ease-in-out;
    }

    &:hover {
        color: #139fcd;
    }
`;

export const NavPageLink = styled(LinkR)`
    color: #f3f3f7;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 1.2rem;
    padding: 0 2rem;
    height: 100%;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &.active {
        color: #139fcd;
        border-bottom: 3px solid #139fcd;
        transition: 0.2s ease-in-out;
    }

    &:hover {
        color: #139fcd;
    }
`;

export const DownloadLink = styled.a`
    text-decoration: none;
`;

export const Button = styled.button`
    border-radius: 50px;
    background: #60b8d5;
    white-space: nowrap;
    text-decoration: none;
    padding: 10px 20px;
    font-size: 1.2rem;
    font-weight: bold;
    color: #010606;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #139fcd;
        color: #010606;
    }
`;


export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        align-items: center;
        transform: translate(-60%, 10%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #f3f3f7;
    }
`;

export const MobileDownloadLink = styled.a`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        text-decoration: none;
    }
`;

export const MobileButton = styled.button`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        transform: translate(-50%, 20%);
        border-radius: 50px;
        background: #60b8d5;
        white-space: nowrap;
        text-decoration: none;
        padding: 10px 20px;
        font-size: 1rem;
        font-weight: bold;
        color: #010606;
        outline: none;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s ease-in-out;

        &:hover {
            transition: all 0.2s ease-in-out;
            background: #139fcd;
            color: #010606;
        }
    }
`;