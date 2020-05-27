import React, { useState, useEffect } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import SpeakersGrid from '../components/EventsGrid/EventsGrid';
import PageHeader from '../components/PageHeader/PageHeader';
import SpeakersBox from '../components/SpeakersBox/SpeakersBox';
import SearchBar from '../components/SearchBar/SearchBar';
import { getSpeakers } from '../api/speakers.js';
import Loader from '../components/Loader/Loader';

const Speakers = () => {
    const token = localStorage.getItem("token");
    const [speakers, setSpeakers] = useState([]);
    const [speakersCopy, setSpeakersCopy] = useState();
    const [input, setInput] = useState("");

    const inputChange = event => {
        setInput(event.target.value);
    };

    const getData = () => {
        getSpeakers(token).then(res => {
            setSpeakers(res["speakers"]);
            if (!speakersCopy){
                setSpeakersCopy(res["speakers"]);
            }
        });
    }

    if (speakers.length === 0  && token){
        getData();
    }

    useEffect(() => {
        const filter = speakers.filter(speakers => speakers.title.toLowerCase().includes(input.toLowerCase()));

        if (input.length > 0){
            setSpeakersCopy(filter);
        }
        else{
            setSpeakersCopy(speakers)
        }
    }, [input, speakers]);

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
        {speakers.length === 0 ? <SearchBar bool={true} value={input} inputChange={inputChange} placeholder={"Search speakers..."} /> : <SearchBar bool={false} value={input} inputChange={inputChange} placeholder={"Search speakers..."} />}
        <SpeakersGrid>
            {speakers.length === 0 ? <Loader />: showSpeakers()}
        </SpeakersGrid>
        </>
    );
}

export default Speakers;