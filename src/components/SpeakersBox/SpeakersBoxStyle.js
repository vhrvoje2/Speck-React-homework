import styled from 'styled-components';
import speakersImg from '../../assets/images/speakers-icon.png';

export const InfoBoxIcon = styled.div`
    background: url(${speakersImg});
    background-repeat: no-repeat;
    background-size: contain;
    flex: 1 0 25px;
    width: 25px;
    height: 25px;
    margin-right: 15px;
`;

export const InfoBoxAboutSpeakers = styled.p`
    padding: 25px 0;
    font-size: 15px;
    text-align: center;
`;