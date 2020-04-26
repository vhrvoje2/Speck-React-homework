import React from 'react';
import './SpeakersBoxStyle.js';
import { InfoBoxDiv, InfoBoxHeader, InfoBoxTitle, InfoBoxFooter, InfoBoxButton } from '../InfoBox/InfoBoxStyle';
import { InfoBoxIcon, InfoBoxAboutSpeakers } from './SpeakersBoxStyle.js';

const InfoBox = (props) => {
    return (
        <InfoBoxDiv>
            <InfoBoxHeader>
                <InfoBoxIcon />
                <InfoBoxTitle>{props.title}</InfoBoxTitle>
            </InfoBoxHeader>

            <InfoBoxAboutSpeakers>
                {props.about}
            </InfoBoxAboutSpeakers>
            
            <InfoBoxFooter>
                <InfoBoxButton href={props.link}>Prati sudionika</InfoBoxButton>
            </InfoBoxFooter>
        </InfoBoxDiv>
    );
}

export default InfoBox;