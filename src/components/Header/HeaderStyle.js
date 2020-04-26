import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkStyle = styled(NavLink)`
    text-decoration: none;
    color: black;

    &:hover {
        color: rgb(200, 15, 50);
    }
`;

export const HeaderDiv = styled.div`
    background-color: white;
    width: 100%;
    height: 80px;
    position: sticky;
    top: 0;
`;

export const HeaderInner = styled.div`
    max-width: 1280px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 0;  
`;

export const HeaderLogo = styled.div`
    float: left;
`;

export const HeaderNavBar = styled.ul`
    vertical-align: middle;
    float: right;
    padding: 0;
    list-style-type: none;
`;

export const HeaderNavItem = styled.li`
    display: inline;
    padding-left: 15px;
    padding-right: 15px;
    line-height: 40px;
    font-weight: bolder;
    font-size: larger;
    color: black;
`;

export const ImgStyle = styled.img`
    src: url(${props => props.src});
    height: 80px;
    width: 128px;
    float: left; 
`;