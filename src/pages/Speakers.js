import React from 'react';

import SpeakersGrid from '../components/EventsGrid/EventsGrid';
import PageHeader from '../components/PageHeader/PageHeader';
import SpeakersBox from '../components/SpeakersBox/SpeakersBox';

const Speakers = () => {
    return (
        <>
        <PageHeader>
            Sudionici
        </PageHeader>
        <SpeakersGrid>
            <SpeakersBox />
            <SpeakersBox />
            <SpeakersBox />
            <SpeakersBox />
            <SpeakersBox />
            <SpeakersBox />
            <SpeakersBox />
            <SpeakersBox />
            <SpeakersBox />
        </SpeakersGrid>
        </>
    );
}

export default Speakers;