import React from 'react';
import './SpeakersBox.scss';

const InfoBox = (props) => {
    return (
        <div className="InfoBox">
            <div className="InfoBox-Header">
                <div className="InfoBox-Icon_SpeakersType"></div>
                <h2 className="InfoBox-Title">Johan Bach</h2>
            </div>
            <p className="InfoBox-AboutSpeakers">
                Latin literature from 45 BC, making it over 2000 year old. Richard
                McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one.
            </p>
            <div className="InfoBox-Footer">
                <a href="." className="InfoBox-Button">Prati sudionika</a>
            </div>
        </div>
    );
}

export default InfoBox;