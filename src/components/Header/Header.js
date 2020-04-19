import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import './Header.scss';

const links = {
    speakers: 'Speakers',
    events: 'Events',
}

const Header = () => {
    return (
        <header className="Header">
            <div className="Header-Inner">
                <Link to="/">
                    <img src={ Logo } alt="FOI Logo" className="Header-Logo" />
                </Link>

                <nav className="Header-NavBar">
                    <ul>
                        <li className="Header-NavItem">
                            <Link to="/events">
                                {links.events}
                            </Link>
                        </li>
                        <li className="Header-NavItem">
                            <Link to="/speakers">
                                {links.speakers}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
       </header>
    );
}

export default Header;