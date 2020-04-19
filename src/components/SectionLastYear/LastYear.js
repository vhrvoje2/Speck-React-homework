import React from 'react';
import './LastYear.scss';
import People from '../../assets/images/last-year.jpg';


const LastYear = () => {
    return (
        <section className="LastYear">
            <div className="LastYear-HeaderSection">
                <h2 className="LastYear-Heading">
                    FOI tjedan karijera 2019
                </h2>
                <div className="LastYear-Columns">
                    <div className="LastYear-LeftColumn">
                        <p className="LastYear-ColumnText">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin 
                            literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney 
                            College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
                            and going through the cites of the word in classNameical literature, discovered the undoubtable source.
                        </p>
                    </div>
                    <div className="LastYear-RightColumn">
                        <figure>
                            <img src={ People } alt="" className="LastYear-Image" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LastYear;