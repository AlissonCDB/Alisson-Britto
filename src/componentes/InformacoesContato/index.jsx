import { styled } from "styled-components";
import { Contatos } from "../Contatos/index.jsx";
import { InformacoesContatoAdicionais } from '../InformacoesContatoAdicionais/index.jsx'

const ContatosContainer = styled.ul`
`
const ContatosDisplay = styled.div`

    @media screen and (min-width: 720px){
        display: none;
    }
`

export const InformacoesContato = () => {
    return (
        <ContatosContainer>
            <ContatosDisplay>

                <Contatos />

            </ContatosDisplay>

            <InformacoesContatoAdicionais />

        </ContatosContainer>
    )
}
