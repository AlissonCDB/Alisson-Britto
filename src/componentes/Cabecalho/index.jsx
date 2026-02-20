import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import { MinhaFoto } from './MinhaFoto'
import { MeuNome } from './MeuNome'
import { OpcoesPaginas } from '../OpcoesPaginas'
import { Contatos } from '../Contatos'

import minhaFoto from '../../imagens/Minha-foto.jpeg'
import Logo from '../../imagens/Logo.jpeg'

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
const DisplayLink = styled.div`
    a:link, a:visited, a:active {
        text-decoration: none;
        color: #cfb072;
    }

    @media screen and (min-width: 720px){
        display: flex;
        aling-items: center;
        justify-content: center;
        width: ${100 / 3}%;

        a:hover{
            color: #cfb072;
        }
    }
`
const DisplayContato = styled.div`
    display: none;

    @media screen and (min-width: 720px){
        display: inline;
        width: ${100 / 3}%;
    }
`
export const Cabecalho = ({valor}) => {

    return (
        <CabecalhoContainer>
            <ItensCabecalho>
                <DisplayLink>
                    <Link>
                        <MinhaFoto >
                            <img src={minhaFoto} alt='Minha foto' />
                        </MinhaFoto>
                    </Link>
                </DisplayLink>
                <DisplayLink>
                    <Link to={'/'}>
                        <MeuNome >
                            Alisson Cunha de Britto
                        </MeuNome>
                    </Link>
                </DisplayLink>

                <DisplayContato>
                    <Contatos />
                </DisplayContato>
            </ItensCabecalho>
            <OpcoesPaginas valor={valor} />
        </CabecalhoContainer >

    )
}