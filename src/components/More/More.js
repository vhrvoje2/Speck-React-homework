import React from 'react';
import './More.scss';


const More = () => {
    return (
        <section class="MoreContainer">
            <div class="MoreContainer-TextDiv">
                <p class="MoreContainer-Text">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin 
                    literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney 
                    College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
                    and going through the cites of the word in classical literature, discovered the undoubtable source.
                </p>
                <button class="MoreContainer-Button">
                    SAZNAJ VIŠE
                </button>
            </div>
        </section>
    );
}

export default More;