import React from 'react';
import './EventsGrid.scss';

const EventsGrid = (props) => {
    return (
        <div className="EventsGrid">
            {
                props.children
            }
        </div>
    );
}

export default EventsGrid;