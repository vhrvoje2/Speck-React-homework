import React from 'react';
import './CardsContainer.scss';

const CardContainer = (props) => {
    return (
        <div className="CardsContainer">
        {
            props.children
        }
        </div>
    );
}

export default CardContainer;