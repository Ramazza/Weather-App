import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    padding: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: #6CB4EE; */
    background-color: #0093E9;
    background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);

`;

export const Title = styled.span`
    font-size: 3.5em;
    font-weight: 700;
    color: #002D62;
`;

export const SearchContainer = styled.div`
    position: relative;
    padding: 2rem 0;
    text-align: center;
`;


export const SearchBox = styled.input`
    width: 33vw;
    height: 2rem;
    border-radius: 5px;
    border: none;
    outline: 3px solid #002D62;
    padding-left: 0.5rem;
    font-size: 1.2rem;
    font-weight: 500;
`;

export const SearchButton = styled.button`
    height: 2.1rem;
    padding: 0 5px;
    border-radius: 0 3px 3px 0;
    border: none;
    outline: 3px solid #002D62;
    background-color: #002D62;
    color: white;
    font-size: 1.2rem;
    font-weight: 500;
    position: absolute;
    right: 0;
    top: 2rem;

    &:hover {
        background-color: #0066b2;
    }
`;