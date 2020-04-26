import React from 'react';
import Progress from 'rsup-progress'

//Components
import Hero from '../components/Hero/Hero';
import More from '../components/More/More';
import CardContainer from '../components/CardsContainer/CardsContainer';
import Card from '../components/Card/Card';
import LastYear from '../components/SectionLastYear/LastYear';

//Images
import ImgAbout from '../assets/images/about.jpg';
import ImgSpeakers from '../assets/images/speakers.jpg';
import ImgAgenda from '../assets/images/calendar.jpg';
import ImgPartner from '../assets/images/partner.jpg';

const Home = () => {
    const progress = new Progress({
        height: 5,
        color: '#CE003D',
    })

    const callTimer = setTimeout(() => {
        progress.end()
    }, 1500);

    return (
        <>
            {progress.isInProgress ? callTimer() : progress.start()}
            <Hero />
            <More />
            <CardContainer>
                <Card image={ImgAbout} alt="About">O tjednu karijera</Card>
                <Card image={ImgSpeakers} alt="Speakers">Predavači</Card>
                <Card image={ImgAgenda} alt="Agenda">Raspored</Card>
                <Card image={ImgPartner} alt="Partners">Partneri</Card>
            </CardContainer>
            <LastYear />
        </>
    );
}

export default Home;