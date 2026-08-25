'use client';
import { styled } from 'styled-components';
import { Contatos } from '../Contatos';

const ContatosContainer = styled.div`
    padding: 0;
    margin: 0;
    width: 100%;
`;

const ContatosDisplay = styled.div`
    @media screen and (min-width: 720px){
        display: none;
    }
`;

const AdicionaisContainer = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center; /* Alinha todos os blocos pelo centro vertical */
    color: #cfb072;
    background-color: black;
    text-align: center;
    padding: 16px 0;
    margin: 0;
    list-style: none;
`;

const ItemContato = styled.li`
    width: 33.33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 5px;

    img {
        display: block;
        height: 24px;
        width: auto;
        margin-bottom: 6px; /* Distância uniforme entre o ícone e o texto */
    }

    p { 
        margin: 0; 
        font-size: 13px;
        line-height: 1.3;
    }

    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: gold;

        &:link, &:visited, &:active {
            color: gold;
        }

        @media screen and (min-width: 720px){
            color: #cfb072;
            &:link, &:visited, &:active {
                color: #cfb072;
            }
            &:hover {
                color: DodgerBlue;
            }
        }
    }
`;

export const InformacoesContato = () => {
    return (
        <ContatosContainer>
            <ContatosDisplay>
                <Contatos />
            </ContatosDisplay>
            <AdicionaisContainer>
                <ItemContato>
                    <img src="/imagens/Localizacao-icone-30.png" alt="Icone localização" />
                    <p>Rio Bonito do Iguaçu - PR</p>
                    <p>Indaiatuba - SP</p>
                </ItemContato>
                <ItemContato>
                    <a href="https://github.com/AlissonCDB" target="_blank" rel="noopener noreferrer">
                        <img src="/imagens/GitHub-icone-30.png" alt="Icone GitHub" />
                        <p>AlissonCDB</p>
                    </a>
                </ItemContato>
                <ItemContato>
                    <a href="https://www.linkedin.com/in/alisson-cunha-de-britto-715a52270/" target="_blank" rel="noopener noreferrer">
                        <img src="/imagens/Linkedin-icone-30.png" alt="Icone Linkedin" />
                        <p>Alisson Cunha de Britto</p>
                    </a>
                </ItemContato>
            </AdicionaisContainer>
        </ContatosContainer>
    );
};