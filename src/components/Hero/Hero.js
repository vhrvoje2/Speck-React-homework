import React from 'react';
import { HeroDiv, HeroContainer, HeroTopText, HeroMiddleText, HeroBottomText, HeroButton } from './HeroStyle.js';

const Hero = () => {
    return (
        <HeroDiv>
            <HeroContainer>
                <HeroTopText>Tjedan karijera</HeroTopText>
                <HeroMiddleText>FOI</HeroMiddleText>
                <HeroBottomText>20.10.2020. - 26.10.2020.</HeroBottomText>
                <HeroButton>PRIJAVI SE</HeroButton>
            </HeroContainer>
        </HeroDiv>
    );
}

export default Hero;