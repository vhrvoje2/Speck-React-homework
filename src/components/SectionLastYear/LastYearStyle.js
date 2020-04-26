import styled from 'styled-components';

export const LastYearDiv = styled.div`
    text-align: center;
    width: 100%;
    background-color: #efefef;
    padding-top: 70px;
    padding-bottom: 70px;
`;

export const LastYearHeaderSection = styled.div`
    width: 1280px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 0;
`;

export const LastYearHeading = styled.h2`
    margin-bottom: 70px;
`;

export const LastYearColumns = styled.div`
    display: flex;
`;

export const LastYearLeftColumn = styled.div`
    margin-top: auto;
    margin-bottom: auto;
    width: 50%;
`;

export const LastYearColumnText = styled.p`
    padding-right: 145px;
    text-align: left;
    font-size: 18px;
    font-weight: bold;
    line-height: 30px;
`;

export const LastYearRightColumn = styled.div`
    width: 50%;
    margin-top: auto;
    margin-bottom: auto;
`;

export const LastYearFigure = styled.figure`
`;

export const LastYearImage = styled.img`
    src: url(${props => props.src});
    width: 100%;
    height: 100%;
    object-fit: cover;
`;