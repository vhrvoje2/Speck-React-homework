import styled from 'styled-components';

export const CardDiv = styled.a`
    width: calc(25% - 11.25px);
    margin-right: 15px;
    margin-bottom: 40px;
    float: left;
    padding: 15px 15px 25px;
    border-radius: 15px;
    padding: 0;
    margin-bottom: 40px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    border-radius: 15px;
    text-align: center;

    &:hover { 
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        cursor: pointer;
    }

    &:last-of-type {
        margin-right: 0;
    }
`;

export const CardFigure = styled.figure`
    width: 100%;
    height: 250px;
    margin-bottom: 25px;
    margin-left: 0;
`;
export const CardImage = styled.img`
    width: 80%;
    height: 100%;
    object-fit: cover;
`;
export const CardTitle = styled.p`
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    line-height: 30px; 
`;