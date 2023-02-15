import React from "react";
import { Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarScrollLink, SidebarWrapper } from "../styles/NavBar/Styles";
import { CloseIcon } from "../styles/NavBar/Styles";
const SideNav = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="/" onClick={toggle}>
              Home
            </SidebarLink>
            <SidebarScrollLink to="/#aboutus" onClick={toggle}>
              About Us
            </SidebarScrollLink>
            <SidebarLink to="/events" onClick={toggle}>
              Events
            </SidebarLink>
            <SidebarScrollLink to="/#schedule" onClick={toggle}>
              Schedule
            </SidebarScrollLink>
            <SidebarLink to="/team" onClick={toggle}>
              Team
            </SidebarLink>
            <SidebarLink to="/memories" onClick={toggle}>
              Memories
            </SidebarLink>
            <SidebarLink to="/contact-us" onClick={toggle}>
              Contact Us
            </SidebarLink>
         
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
      
    </>
  );
};

export default SideNav;
