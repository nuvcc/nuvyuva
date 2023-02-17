import React from "react";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLinkScroll,
  NavLinksCroll,
  NavMenu,
} from "../styles/NavBar/Styles";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { HashLink as Link } from "react-router-hash-link";

const NavBar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav>
        <NavbarContainer>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinkScroll to="/#home" smooth={true} duration={500} exact="true">
                Home
              </NavLinkScroll>
            </NavItem>
            <NavItem>
              <NavLinkScroll to="/#aboutus" smooth={true} duration={500} exact="true">
                About Us
              </NavLinkScroll>
            </NavItem>
            <NavItem>
              <NavLinks to="/events" duration={500} exact="true">
                Events
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinkScroll to="/#schedule" smooth={true} duration={500} exact="true">
                Schedule
              </NavLinkScroll>
            </NavItem>
            <NavItem>
              <NavLinks to="/team" duration={500} exact="true">
                Team
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/memories" duration={500} exact="true">
                Memories
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/contact-us" duration={500} exact="true">
                Contact Us
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
