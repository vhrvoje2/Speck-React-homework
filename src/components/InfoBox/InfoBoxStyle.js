import styled from 'styled-components';
import eventImg from '../../assets/images/event-icon.png';

export const InfoBoxDiv = styled.div`
    max-width: 350px;
    background: #efefef; 
    padding: 15px; 
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

export const InfoBoxHeader = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #fff;
    padding-bottom: 10px;
`;

export const InfoBoxIcon = styled.div`
    background: url(${eventImg});
    background-repeat: no-repeat;
    background-size: contain;
    flex: 1 0 25px;
    width: 25px;
    height: 25px;
    margin-right: 15px;
`;

export const InfoBoxTitle = styled.h2`
    font-size: 18px;
`;

export const InfoBoxSubheader = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 15px 0;
`;

export const InfoBoxSubheaderBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const InfoBoxSubheaderFigure = styled.figure`
    width: 25px;
    height: 25px;
    margin-bottom: 10px;
`;

export const InfoBoxSubheaderSubText = styled.span`
`;

export const InfoBoxSubheaderImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const InfoBoxAboutEvents = styled.p`
    padding: 25px 0;
    font-size: 15px;
    border-top: 1px solid #fff;
    text-align: center;
`;

export const InfoBoxFooter = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10px;
    border-top: 1px solid #fff;
`;

export const InfoBoxButton = styled.p`
    font-weight: bolder;
    transition: color 0.3s ease-out;

    &:hover {
        color: #58a510;
        cursor: pointer;
    }
`;