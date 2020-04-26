import React from 'react';
import { MoreContainer, MoreContainerTextDiv, MoreContainerText, MoreButton} from './MoreStyle.js';


const More = () => {
    return (
        <MoreContainer>
            <MoreContainerTextDiv>
                <MoreContainerText>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin 
                    literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney 
                    College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
                    and going through the cites of the word in classNameical literature, discovered the undoubtable source.
                </MoreContainerText>
                <MoreButton>
                    SAZNAJ VIŠE
                </MoreButton>
            </MoreContainerTextDiv>
        </MoreContainer>
    );
}

export default More;