import React from "react";
import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='1' onClick={toggle}>
                        Technical
                    </SidebarLink>
                    <SidebarLink to='2' onClick={toggle}>
                        Workshops
                    </SidebarLink>
                    <SidebarLink to='3' onClick={toggle}>
                        Cultural
                    </SidebarLink>
                    <SidebarLink to='4' onClick={toggle}>
                        Sports
                    </SidebarLink>
                    <SidebarLink to='5' onClick={toggle}>
                        Highlights
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;