import React from 'react';
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav, 
    NavbarContainer,  
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavPageLinks,
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
                            <NavLinks 
                                to='1'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                activeClass='active'
                            >
                                Technical
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to='2'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                activeClass='active'
                            >
                                Workshops
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to='3'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                activeClass='active'
                            >
                                Cultural
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to='4'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                activeClass='active'
                            >
                                Sports
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to='5'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                activeClass='active'
                            >
                                Highlights
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavPageLinks 
                                to='about'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                activeClass='active'
                            >
                                About
                            </NavPageLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;