import { styled } from 'styled-components'
import { MinhaFoto } from './MinhaFoto'
import { MeuNome } from './MeuNome'
import { Contatos } from './Contatos'
import { OpcoesPaginas } from '../OpcoesPaginas'

import minhaFoto from '../Imagens/Minha-foto.jpeg'
import Logo from '../Imagens/Logo.jpeg'
import { Link } from 'react-router-dom'


const CabecalhoContainer = styled.header` 
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #cfb072;
    background-color: black;
    background-image: url(${Logo});
    background-repeat: no-repeat;
    height: 181px;

    @media screen and (min-width: 720px) {
        height: 308px;
    }

    a:link, a:visited, a:active {
        text-decoration: none;
        color: #cfb072;
    }
`
const ItensCabecalho = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 125px;

    @media screen and (min-width: 720px) {
        height: 250px;
    }
`

export const Cabecalho = () => {

    return (
        <CabecalhoContainer>
            <ItensCabecalho>
                <Link to={'/'}>
                    <MinhaFoto>
                        <img src={minhaFoto} alt='Minha foto' />
                    </MinhaFoto>
                </Link>
                <Link to={'/'}>
                    <MeuNome>
                        Alisson Cunha de Britto
                    </MeuNome>
                </Link>
                <Contatos>
                    <p>
                        Email: <br /> alissoncdbritto@gmail.com
                    </p>
                    <p>
                        Telefone: <br /> (42) 9 9920-2232
                    </p>
                </Contatos>
            </ItensCabecalho>
            <OpcoesPaginas />
        </CabecalhoContainer>

    )
}