import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { LinkStyle, HeaderDiv, HeaderInner, HeaderLogo, HeaderNavBar, HeaderNavItem, ImgStyle } from './HeaderStyle';

const links = {
    speakers: 'Speakers',
    events: 'Events',
}

const Header = () => {
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
                </HeaderNavBar>
            </HeaderInner>
        </HeaderDiv>
    );
}

export default Header;