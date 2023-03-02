import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";

export const Nav = styled.nav`
  background: ${({ theme }) => theme.background.primary};
  height: 50px;
  /* margin-top: -60px; */
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
  /* height: 60px; */
  z-index: 1;
  width: 100%;
  /* padding: 80px 0px; */
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
    color: ${({ theme }) => theme.fontColor.secondary};
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 2rem;
    right: 2rem;
    align-items: center;
    transform: translate(-60%, 10%);
    font-size: 2rem;
    cursor: pointer;
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
`;
export const NavLinks = styled(NavLink)`
  color: ${({ theme }) => theme.fontColor.primary};
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 0.8rem;
  padding: 0 2rem;
  height: 90%;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &.active {
    color: ${({ theme }) => theme.fontColor.secondary};
    border-bottom: 3px solid ${({ theme }) => theme.fontColor.secondary};
    transition: 0.2s ease-in-out;
  }
  &:hover {
    color: #139fcd;
    color: ${({ theme }) => theme.fontColor.secondary};
  }
`;
export const NavLinkScroll = styled(Link)`
  color: ${({ theme }) => theme.fontColor.primary};
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 0.8rem;
  padding: 0 2rem;
  height: 90%;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  /* &.active {
    color: ${({ theme }) => theme.fontColor.secondary};
    border-bottom: 3px solid ${({ theme }) => theme.fontColor.secondary};
    transition: 0.2s ease-in-out;
  } */
  &:hover {
    color: #139fcd;
    color: ${({ theme }) => theme.fontColor.secondary};
  }
`;

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.background.primary};

  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: ${({ theme }) => theme.fontColor.primary};
`;

export const Icon = styled.div`
  position: absolute;
  top: 0.3rem;
  right: 1rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: ${({ theme }) => theme.fontColor.primary};
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(7, 80px);
  text-align: center;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(7, 60px);
  }
`;

export const SidebarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: ${({ theme }) => theme.fontColor.primary};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.fontColor.secondary};
    transition: 0.2s ease-in-out;
  }
`;
export const SidebarScrollLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: ${({ theme }) => theme.fontColor.primary};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.fontColor.secondary};
    transition: 0.2s ease-in-out;
  }
`;
