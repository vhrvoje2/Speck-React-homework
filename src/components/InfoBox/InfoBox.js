import React from 'react';
import './InfoBox.scss';
import Location from "../../assets/images/location-icon.png";
import Time from "../../assets/images/time-icon.png";

const InfoBox = (props) => {
    return (
        <div className="InfoBox">
            <div className="InfoBox-Header">
                <div className="InfoBox-Icon_EventType"></div>
                <h2 className="InfoBox-Title">How can we benefit from React Redux</h2>
            </div>

            <div className="InfoBox-Subheader">
                <div className="InfoBox-SubheaderBox">
                    <figure className="InfoBox-SubheaderFigure">
                        <img src={ Location } alt="Location icon" className="InfoBox-SubheaderImg" />
                    </figure>
                    <span className="InfoBox-SubeaderSubText">Dvorana D09</span>
                </div>
                <div className="InfoBox-SubheaderBox">
                    <figure className="InfoBox-SubheaderFigure">
                        <img src= { Time } alt="" className="InfoBox-SubheaderImg" />
                    </figure>
                    <span className="InfoBox-SubheaderSubText">24.3. u 13:45h</span>
                </div>
            </div>

            <p className="InfoBox-AboutEvents">
                Latin literature from 45 BC, making it over 2000 year old. Richard
                McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one.
            </p>
            <div className="InfoBox-Footer">
                <a href="." className="InfoBox-Button">Prijavi se na predavanje</a>
            </div>
        </div>
    );
}

export default InfoBox;