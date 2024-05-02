import styled from "styled-components";

export const Container = styled.div`
    min-width: 25vw;
    padding: 0 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    border: 2px solid #002D62;
    border-radius: 5px;
`;

export const Title = styled.span`
    text-align: center;
    padding: 1rem 0;
    font-size: 2.5em;
    font-weight: 700;
    color: #002D62;
`;

export const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1em;
    font-weight: 550;
    /* color: #002D62; */
`;

export const InfoName = styled.span`

`;

export const InfoData = styled.span`

`;

export const Error = styled.span`
    text-align: center;
    padding-top: 1rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: #002D62;
`;