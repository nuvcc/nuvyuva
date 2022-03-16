import React from 'react';
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav, 
    NavbarContainer,  
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLink,
    NavPageLink,
} from './NavbarElements';

const Navbar = ({ toggle }) => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink 
                                to='1'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                activeClass='active'
                            >
                                Technical
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink 
                                to='2'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                activeClass='active'
                            >
                                Workshops
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink 
                                to='3'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                activeClass='active'
                            >
                                Gaming
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink 
                                to='4'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                activeClass='active'
                            >
                                Cultural
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                to='5'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                activeClass='active'
                            >
                                Sports
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                to='highlights'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                activeClass='active'
                            >
                                Highlights
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavPageLink
                                to='about'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                activeClass='active'
                            >
                                About
                            </NavPageLink>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;