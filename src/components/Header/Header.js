import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { LinkStyle, HeaderDiv, HeaderInner, HeaderLogo, HeaderNavBar, HeaderNavItem, ImgStyle } from './HeaderStyle';

const links = {
    speakers: 'Speakers',
    events: 'Events',
    register: 'Register',
    login: 'Login',
    logout: 'Logout',
}

// ili prosljediti props headeru ili u context api spremati token

const Header = () => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("token") != null){
            setIsAuth(true);
        }
        else{
            setIsAuth(false);
        }
    });

    const handleLogout = (e) => {
        e.preventDefault();

        localStorage.removeItem("token");
        setIsAuth(false);
    }

    return (
        <HeaderDiv>
            <HeaderInner>
                <Link to="/">
                    <HeaderLogo>
                        <ImgStyle src={ Logo } />
                    </HeaderLogo>
                </Link>

                <HeaderNavBar>
                        <HeaderNavItem>
                            <LinkStyle to="/events" activeStyle={{color: "rgb(200, 15, 50)"}}>
                                    {links.events}
                            </LinkStyle>
                        </HeaderNavItem>
                        <HeaderNavItem>
                            <LinkStyle to="/speakers" activeStyle={{color: "rgb(200, 15, 50)"}}>
                                    {links.speakers}
                            </LinkStyle>
                        </HeaderNavItem>
                        {!isAuth ?
                            <>
                                <HeaderNavItem>
                                    <LinkStyle to="/register" activeStyle={{color: "rgb(200, 15, 50)"}}>
                                        {links.register}
                                    </LinkStyle>
                                </HeaderNavItem>
                                <HeaderNavItem>
                                    <LinkStyle to="/login" activeStyle={{color: "rgb(200, 15, 50)"}}>
                                        {links.login}
                                    </LinkStyle>
                                </HeaderNavItem>
                            </>
                        :
                            <>
                                <HeaderNavItem>
                                    <LinkStyle to="/logout" activeStyle={{color: "rgb(200, 15, 50)"}} onClick={handleLogout}>
                                            {links.logout}
                                    </LinkStyle>
                                </HeaderNavItem>
                            </>
                        }
                </HeaderNavBar>
            </HeaderInner>
        </HeaderDiv>
    );
}

export default Header;