import React, { useState, Fragment, useContext } from 'react'
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {
    Nav,
    NavContainer,
    NavLogo,
    NavItem,
    NavLinks,
    NavMenu,
    MobileIcon,
} from './NavbarStyles';
import SessionContext from './session/SessionContext';
import '../App.css';
const Navbar = () => {

    const {
        session: { user },
        actions: { logout }
    } = useContext(SessionContext);

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
                            <NavLinks href="/">Home Page</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks href="/about_us">About Us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks href="/get_in_touch">Contact Us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks href="/Reservation">Reservation</NavLinks>
                        </NavItem>

                        {user.token && user.role == 1 &&
                            <NavItem>
                                <NavLinks href="/Entry_Dash_Admin">Dashboard</NavLinks>
                            </NavItem>
                        }

                        {user.token &&
                            <NavItem>
                                <NavLinks href="/profile">Profile</NavLinks>
                            </NavItem>
                        }


                        {user.token ?
                            (<button onClick={logout} style={{
                                color: ' #be0c0c',
                                fontSize: '20px',
                                fontWeight: 'bold',
                                backgroundColor: 'transparent',
                                borderColor: 'transparent',
                            }}>
                                logout
                            </button>) :
                            (<NavItem>

                                <NavLinks href="/login"
                                    style={{
                                        color: ' #be0c0c',
                                        fontSize: '20px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Login
                                </NavLinks>
                            </NavItem>)



                        }

                    </NavMenu>
                </NavContainer>
            </Nav>
        </Fragment>
    )
}

export default Navbar;
