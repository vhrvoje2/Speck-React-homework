import React from 'react';

import PageHeader from '../components/PageHeader/PageHeader';
import EventsGrid from '../components/EventsGrid/EventsGrid';
import InfoBox from '../components/InfoBox/InfoBox';

const Events = () => {
    return (
        <>
        <PageHeader>
            Dodađanja
        </PageHeader>
        <EventsGrid>
            <InfoBox />
            <InfoBox />
            <InfoBox />
            <InfoBox />
            <InfoBox />
            <InfoBox />
        </EventsGrid>
        </>
    );
}

export default Events;