import React from 'react';
import {FaBars} from 'react-icons/fa';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    {/* <NavLogo to='/'>NUV Yuva</NavLogo> */}
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                                to='ec1'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass='active'
                            >
                                Cultural
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to='ec2'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass='active'
                            >
                                Technical
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to='ec3'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass='active'
                            >
                                Sports
                            </NavLinks>
                        </NavItem>
                        {/* <NavItem>
                            <NavLinks 
                                to='highlights'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass='active'
                            >
                                Highlights
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks 
                                to='about'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass='active'
                            >
                                About
                            </NavLinks>
                        </NavItem> */}
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;