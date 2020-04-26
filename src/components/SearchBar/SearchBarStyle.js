import styled from 'styled-components';

export const SearchBarDiv = styled.div`
    max-width: 100%;
    margin: 30px 0;
`;

export const SearchBarInput = styled.input`
    display: block;
    width: 400px;
    line-height: 50px;
    border: 1px solid #cecece;
    border-radius: 6px;
    margin: auto;

    &:focus {
        outline: none;
        border-color: #c59613;
    }
`;