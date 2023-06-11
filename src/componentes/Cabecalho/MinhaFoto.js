import { styled } from "styled-components";

export const MinhaFoto = styled.li`
    text-align: center;
    img{
        margin: 17.5px 17.5px 17.5px 35px;
        width: 90px;
        height: 90px;
        border-radius: 90%;

        @media screen and (min-width: 721px) {
            width: 150px;
            height: 150px;
        }
    }
`