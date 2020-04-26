import React, { useState, useEffect } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import SpeakersGrid from '../components/EventsGrid/EventsGrid';
import PageHeader from '../components/PageHeader/PageHeader';
import SpeakersBox from '../components/SpeakersBox/SpeakersBox';
import SearchBar from '../components/SearchBar/SearchBar';
import SpeakersData from '../lib/speakers';
import Loader from '../components/Loader/Loader';

const Speakers = () => {
    const [speakers, setSpeakers] = useState([]);
    const [speakersCopy, setSpeakersCopy] = useState([]);
    const [input, setInput] = useState("");

    const inputChange = event => {
        setInput(event.target.value);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setSpeakers(SpeakersData);
        }, 1000);

        const filter = speakers.filter(speakers => speakers.title.toLowerCase().includes(input));

        if (filter.length > 0){
            setSpeakersCopy(filter);
        }
        else if (filter.length === 0 && input.length > 0){
            setSpeakersCopy([]);
        }
        else{
            setSpeakersCopy(SpeakersData)
        }

        return () => clearTimeout(timer);
    }, [input]);

    const showSpeakers = () => {
        return speakersCopy.map((speaker, index) => (
            <SpeakersBox
                key={index}
                title={speaker.title}
                about={speaker.about}          
                link={speaker.link}   
            />      
        ));
    };

    return (
        <>
        <PageHeader>
            Speakers
        </PageHeader>
        {speakers.length === 0 ? <SearchBar bool={true} placeholder={"Search speakers..."} /> : <SearchBar bool={false} value={input} inputChange={inputChange} placeholder={"Search speakers..."} />}
        <SpeakersGrid>
            {speakers.length === 0 ? <Loader />: showSpeakers()}
        </SpeakersGrid>
        </>
    );
}

export default Speakers;