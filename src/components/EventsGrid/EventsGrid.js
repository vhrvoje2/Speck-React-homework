import React from 'react';
import { EventsGridDiv } from './EventsGridStyle.js';

const EventsGrid = (props) => {
    return (
        <EventsGridDiv>
            {
                props.children
            }
        </EventsGridDiv>
    );
}

export default EventsGrid;