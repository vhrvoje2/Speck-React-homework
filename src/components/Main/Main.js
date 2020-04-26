import React from 'react';
import { MainStyle } from './MainStyle.js';

const Main = (props) => {
    return (
        <MainStyle>
            {
                props.children
            }
        </MainStyle>
    )
}

export default Main;