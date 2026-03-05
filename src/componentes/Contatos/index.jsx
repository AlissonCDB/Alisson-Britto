import { styled } from "styled-components";
import whatsappIcone from '/imagens/Whatsapp-icone-30.png'
import emailIcone from '/imagens/Gmail-icone-30.png'

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
        color: gold;
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
        a{
            color: #cfb072;
        }
        a:hover{
            color: DodgerBlue;
        }
    }
`
const Contato = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    @media screen and (min-width: 720px){
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        a{
            display: flex;
            flex-direction: row;
        }
    }
`

export const Contatos = () => {
    return(
    <ContatosContainer>
        <Contato>
            <img src={emailIcone} alt="Icone email"/>  <p>alissoncdbritto@gmail.com</p>
        </Contato>
        <Contato>
            <a href='https://wa.me/5542999202232'>
                <img src={whatsappIcone} alt="Icone whatsapp"/> <p>Entre em contato!</p>
            </a>
        </Contato>
    </ContatosContainer>
    )
}