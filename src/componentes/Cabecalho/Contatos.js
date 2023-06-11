import { styled } from "styled-components";

export const Contatos = styled.li`
    display: none;
    p {
        margin: 0;
    }
    @media screen and (min-width: 720px) {
        display: inline;
    }
`