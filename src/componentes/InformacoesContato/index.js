import { styled } from 'styled-components'
import { InformacoesContatoAdicionais } from '../InformacoesContatoAdicionais'

import emailIcone from '../Imagens/Gmail-icone-30.png'
import telefoneIcone from '../Imagens/Telefone-icone-30.png'


const InformacoesContatoContainer = styled.div`

`
const EmailTelefone = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    color: #cfb072;
    background-color: black;
    text-align: center;
    padding: 16px 0;

    @media screen and (min-width: 720px){
        display: none;
    }
`
const Contatos = styled.li`
    width: 45%;
    p{
        margin: 0;
    }
`

export const InformacoesContato = () => {
    return (
        <InformacoesContatoContainer>

            <EmailTelefone>
                <Contatos>
                    <img src={emailIcone} />
                    <p>alissoncdbritto@gmail.com</p>
                </Contatos>
                <Contatos>
                    <a href='https://wa.me/5542999202232'>
                        <img src={telefoneIcone} />
                        <p>Entre em contato!</p>
                    </a>
                </Contatos>
            </EmailTelefone>

            <InformacoesContatoAdicionais />

        </InformacoesContatoContainer>
    )
}