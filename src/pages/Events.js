import React, { useState, useEffect } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import PageHeader from '../components/PageHeader/PageHeader';
import EventsGrid from '../components/EventsGrid/EventsGrid';
import InfoBox from '../components/InfoBox/InfoBox';
import SearchBar from '../components/SearchBar/SearchBar';
import EventsData from '../lib/events';
import Loader from '../components/Loader/Loader';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [eventsCopy, setEventsCopy] = useState([]);
    const [userInput, setUserInput] = useState("");

    const inputChange = event => {
        setUserInput(event.target.value);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setEvents(EventsData);
        }, 1000);

        const filter = events.filter(event => event.title.toLowerCase().includes(userInput));

        if (filter.length > 0){
            setEventsCopy(filter);
        }
        else if (filter.length === 0 && userInput.length > 0){
            setEventsCopy([]);
        }
        else{
            setEventsCopy(EventsData)
        }

        return () => clearTimeout(timer);
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
        {events.length === 0 ? <SearchBar bool={true} placeholder={"Search events..."} /> : <SearchBar bool={false}  value={userInput} inputChange={inputChange} placeholder={"Search events..."} />}
        <EventsGrid>
            {events.length === 0 ? <Loader /> : showEvents()}
        </EventsGrid>
        </>
    );
}

export default Events;