import { styled } from "styled-components";

export const MeuNome = styled.p`
    text-align: center;
    font-size: 24px;
    font-family: sans-serif;
    text-transform: uppercase;
    width: 150px;
    margin: 0;

    @media screen and (min-width: 720px) {
        font-size: 36px;
        width: 300px;
    }
`