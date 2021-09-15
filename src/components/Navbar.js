import React, { useState, Fragment } from 'react'
import { FaBars } from 'react-icons/fa';
import {
    Nav,
    NavContainer,
    NavLogo,
    NavItem,
    NavLinks,
    NavMenu,
    MobileIcon,
} from './NavbarStyles';
import '../App.css';
const Navbar = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <Fragment>
            <Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
                <NavContainer>
                    <NavLogo href="#">
                        <img
                            className="logo-default"
                            src={`${process.env.PUBLIC_URL}/assets/img/logo.png`}
                            alt="logo"
                        />
                    </NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks href="/Home_page">Home Page</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks href="/about_us">About Us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks href="/contact_us">Contact Us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks href="/Registration">Registration</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks href="Login">Login</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavContainer>
            </Nav>
        </Fragment>
    )
}

export default Navbar;
