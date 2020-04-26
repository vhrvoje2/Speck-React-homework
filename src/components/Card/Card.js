import React from 'react';
import { CardDiv, CardFigure, CardImage, CardTitle } from './CardStyle.js';

const Card = (props) => {
    return (
        <CardDiv>
            <CardFigure>
                <CardImage
                    src={props.image}
                    alt={props.alt}
                    />
            </CardFigure>
            <CardTitle>{props.children}</CardTitle>
        </CardDiv>
    );
}

export default Card;