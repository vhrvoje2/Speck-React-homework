import React, { useState, useEffect } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import PageHeader from '../components/PageHeader/PageHeader';
import EventsGrid from '../components/EventsGrid/EventsGrid';
import InfoBox from '../components/InfoBox/InfoBox';
import SearchBar from '../components/SearchBar/SearchBar';
import { getEvents } from '../api/events.js';
import Loader from '../components/Loader/Loader';

const Events = () => {
    const token = localStorage.getItem("token");
    const [events, setEvents] = useState([]);
    const [eventsCopy, setEventsCopy] = useState();
    const [userInput, setUserInput] = useState("");

    const inputChange = event => {
        setUserInput(event.target.value);
    };

    const getData = () => {
        getEvents(token).then(res => {
            setEvents(res["events"]);
            if (!eventsCopy){
                setEventsCopy(res["events"]);
            }
        });
    }

    if (events.length === 0 && token){
        getData();
    }
    
    useEffect(() => {
        const filter = events.filter(event => event.title.toLowerCase().includes(userInput.toLowerCase()));

        if (userInput.length > 0){
            setEventsCopy(filter);
        }
        else{
            setEventsCopy(events);
        }
    }, [userInput]);

    const showEvents = () => {
        return eventsCopy.map((event, index) => (
            <InfoBox
                key={index}
                title={event.title}
                location={event.location}
                dateTime={event.dateTime}
                about={event.about}
                link={event.link}
            />
        ));
    };

    return (
        <>
        <PageHeader>
            Events
        </PageHeader>
            {events.length === 0 ? <SearchBar bool={true} value={userInput} inputChange={inputChange} placeholder={"Search events..."} /> : <SearchBar bool={false} value={userInput} inputChange={inputChange} placeholder={"Search events..."} />}
        <EventsGrid>
            {events.length === 0 ? <Loader /> : showEvents()}
        </EventsGrid>
        </>
    );
}

export default Events;