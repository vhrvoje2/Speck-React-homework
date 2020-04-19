import React from 'react';
import './Hero.scss';

const Hero = () => {
    return (
        <section class="Hero">
            <div class="Hero-Container">
                <h2 class="Hero-TopText">Tjedan karijera</h2>
                <h2 class="Hero-MiddleText">FOI</h2>
                <h2 class="Hero-BottomText">20.10.2020. - 26.10.2020.</h2>
                <button class="Hero-Button">PRIJAVI SE</button>
            </div>
        </section>
    );
}

export default Hero;