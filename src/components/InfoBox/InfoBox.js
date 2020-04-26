import React from 'react';
import { InfoBoxDiv, InfoBoxHeader, InfoBoxIcon, InfoBoxTitle, InfoBoxSubheader, InfoBoxSubheaderBox, InfoBoxSubheaderFigure, InfoBoxSubheaderSubText , InfoBoxSubheaderImg, InfoBoxAboutEvents, InfoBoxFooter, InfoBoxButton } from './InfoBoxStyle.js';
import Location from "../../assets/images/location-icon.png";
import Time from "../../assets/images/time-icon.png";

const InfoBox = (props) => {
    return (
        <InfoBoxDiv>
            <InfoBoxHeader>
                <InfoBoxIcon />
                <InfoBoxTitle>{props.title}</InfoBoxTitle>
            </InfoBoxHeader>

            <InfoBoxSubheader>
                <InfoBoxSubheaderBox>
                    <InfoBoxSubheaderFigure>
                        <InfoBoxSubheaderImg src={ Location } />
                    </InfoBoxSubheaderFigure>
                    <InfoBoxSubheaderSubText>{props.location}</InfoBoxSubheaderSubText>
                </InfoBoxSubheaderBox>
                <InfoBoxSubheaderBox>
                    <InfoBoxSubheaderFigure>
                        <InfoBoxSubheaderImg src= { Time } />
                    </InfoBoxSubheaderFigure>
                    <InfoBoxSubheaderSubText>{props.dateTime}</InfoBoxSubheaderSubText>
                </InfoBoxSubheaderBox>
            </InfoBoxSubheader>

            <InfoBoxAboutEvents>
                {props.about}
            </InfoBoxAboutEvents>
            <InfoBoxFooter>
                <InfoBoxButton href={props.link}>Prijavi se na predavanje</InfoBoxButton>
            </InfoBoxFooter>
        </InfoBoxDiv>
    );
}

export default InfoBox;