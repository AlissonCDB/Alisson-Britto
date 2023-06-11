import { styled } from "styled-components";

export const Botao = styled.button`
    display: flex;
    justify-content: space-around;
    background-color: black;
    border: none;
    width: 100%;
    padding: 8px 0;

    @media screen and (min-width: 720px) {
        display: none;
    }
`