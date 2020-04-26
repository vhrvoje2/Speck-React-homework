import React from 'react';
import { LastYearDiv, LastYearHeaderSection, LastYearHeading, LastYearColumns, LastYearLeftColumn, LastYearColumnText, LastYearRightColumn, LastYearFigure, LastYearImage } from './LastYearStyle.js';
import People from '../../assets/images/last-year.jpg';


const LastYear = () => {
    return (
        <LastYearDiv>
            <LastYearHeaderSection>
                <LastYearHeading>
                    FOI tjedan karijera 2019
                </LastYearHeading>
                <LastYearColumns>
                    <LastYearLeftColumn>
                        <LastYearColumnText>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin 
                            literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney 
                            College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
                            and going through the cites of the word in classNameical literature, discovered the undoubtable source.
                        </LastYearColumnText>
                    </LastYearLeftColumn>
                    <LastYearRightColumn>
                        <LastYearFigure>
                            <LastYearImage src={ People } />
                        </LastYearFigure>
                    </LastYearRightColumn>
                </LastYearColumns>
            </LastYearHeaderSection>
        </LastYearDiv>
    );
}

export default LastYear;