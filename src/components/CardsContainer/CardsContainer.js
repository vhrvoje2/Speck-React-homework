import React from 'react';
import { CardsContainer } from './CardsContainerStyle.js';

const CardContainer = (props) => {
    return (
        <CardsContainer>
        {
            props.children
        }
        </CardsContainer>
    );
}

export default CardContainer;