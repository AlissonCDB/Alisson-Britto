import { styled } from "styled-components";

export const MinhaFoto = styled.li`
    img{
        width: 90px;
        height: 90px;
        border-radius: 90%;

        @media screen and (min-width: 721px) {
            width: 150px;
            height: 150px;
        }
    }
`