'use client';
import React from 'react';
import { styled } from "styled-components";

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
        text-decoration: none; /* Adicionado para garantir que o link não fique sublinhado */
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
            <img src="/imagens/Gmail-icone-30.png" alt="Icone email"/>  
            <p>alissoncdbritto@gmail.com</p>
        </Contato>
        <Contato>
            <a href='https://wa.me/5542999202232' target="_blank" rel="noopener noreferrer">
                <img src="/imagens/Whatsapp-icone-30.png" alt="Icone whatsapp"/> 
                <p>Entre em contato!</p>
            </a>
        </Contato>
    </ContatosContainer>
    )
}