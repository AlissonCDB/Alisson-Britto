import { styled } from "styled-components";
import whatsappIcone from '../../imagens/Whatsapp-icone-30.png'
import emailIcone from '../../imagens/Gmail-icone-30.png'

const ContatosContainer = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    text-align: center;

    p{
        margin: 0;
        padding: 0;
        padding-left: 0;
    }
    a{
        text-decoration: none;
        color: #cfb072;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    

    @media screen and (min-width: 720px){
        display: flex;
        flex-direction: column;

        p{
            padding-left: 10px;
        }
        a:hover{
            color: white;
        }
    }
`
const Contato = styled.li`
    padding: 8px 0;
    
    @media screen and (min-width: 720px){
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        a{
            display: flex;
            flex-direction: row;
        }
        a:hover {
            color: white;
        }
    }
`

export const Contatos = () => {
    return(
    <ContatosContainer>
        <Contato>
            <img src={emailIcone} />  <p>alissoncdbritto@gmail.com</p>
        </Contato>
        <Contato>
            <a href='https://wa.me/5542999202232'>
                <img src={whatsappIcone} /> <p>Entre em contato!</p>
            </a>
        </Contato>
    </ContatosContainer>
    )
}