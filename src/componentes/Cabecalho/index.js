'use client';
import { styled } from 'styled-components';
import Link from 'next/link';
import { OpcoesPaginas } from '../OpcoesPaginas';
import { Contatos } from '../Contatos';

const CabecalhoContainer = styled.header`
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #cfb072;
    background-color: black;
    background-image: url('/imagens/Logo.jpeg');
    background-repeat: no-repeat;
    height: 181px;

    @media screen and (min-width: 720px) {
        height: 308px;
    }
`;

const ItensCabecalho = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 125px;

    @media screen and (min-width: 720px) {
        height: 250px;
    }
`;

const DisplayLink = styled.div`
    a:link, a:visited, a:active {
        text-decoration: none;
        color: #cfb072;
    }

    @media screen and (min-width: 720px){
        display: flex;
        align-items: center;
        justify-content: center;
        width: 33.33%;

        a:hover{
            color: #cfb072;
        }
    }
`;

const MinhaFoto = styled.li`
    list-style: none;
    img {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        @media screen and (min-width: 721px) {
            width: 150px;
            height: 150px;
        }
    }
`;

const MeuNome = styled.p`
    text-align: center;
    font-size: 24px;
    font-family: sans-serif;
    text-transform: uppercase;
    width: 150px;
    margin: 0;
    @media screen and (min-width: 720px) {
        font-size: 36px;
        width: 300px;
    }
`;

const DisplayContato = styled.div`
    display: none;
    @media screen and (min-width: 720px){
        display: inline;
        width: 33.33%;
    }
`;

export const Cabecalho = ({ valor }) => {
    return (
        <CabecalhoContainer>
            <ItensCabecalho>
                <DisplayLink>
                    <Link href="/">
                        <MinhaFoto>
                            <img src="/imagens/Minha-foto.jpeg" alt="Minha foto" />
                        </MinhaFoto>
                    </Link>
                </DisplayLink>
                <DisplayLink>
                    <Link href="/">
                        <MeuNome>Alisson Cunha de Britto</MeuNome>
                    </Link>
                </DisplayLink>
                <DisplayContato>
                    <Contatos />
                </DisplayContato>
            </ItensCabecalho>
            <OpcoesPaginas valor={valor} />
        </CabecalhoContainer>
    );
};