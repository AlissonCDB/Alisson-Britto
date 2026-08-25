'use client'
import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import { Cabecalho } from "../componentes/Cabecalho"
import { InformacoesContato } from "../componentes/InformacoesContato"
import { Botao } from '../componentes/Botao'

const linkGitHub = 'https://github.com/AlissonCDB';
const linkLinkedin = 'https://www.linkedin.com/in/alisson-cunha-de-britto-715a52270/';
const linkWhatsapp = 'https://wa.me/5542999202232';

const CabecalhoContainer = styled.div`
  border-bottom: ${props => props.$borda || '2px solid #cfb072'};
  box-shadow: ${props => props.$sombra || '0px 6px 10px rgba(207, 176, 72, 0.5)'};
`
const InformacoesTelaMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: black;
  
  @media screen and (min-width: 720px) {
    display: none;
  }
`
const InformacoesTelaDesktop = styled.div`
  display: none;
  @media screen and (min-width: 720px) {
    display: inline;
  }
`

export const Header = () => {
  const [valor, setValor] = useState(false);
  const [borderOn, setBorderOn] = useState(false);

  const handleClick = () => {
    setValor(!valor);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const isScreenLarge = window.innerWidth >= 720;
      setBorderOn(scrollTop > (valor ? (isScreenLarge ? 352 : 346) : (isScreenLarge ? 352 : 169)));
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [valor])

  return (
    <CabecalhoContainer
      $borda={borderOn ? 'none' : undefined}
      $sombra={borderOn ? 'none' : undefined}
    >
      <Cabecalho valor={valor} />
      <InformacoesTelaMobile>

        <Botao onClick={handleClick}>
          {!valor && <a href={linkWhatsapp} target="_blank" rel="noopener noreferrer"><img src="/imagens/Whatsapp-icone-30.png" alt='Ícone telefone ' /> </a>}
          {!valor && <img src="/imagens/Gmail-icone-30.png" alt='Ícone Gmail' />}
          {!valor && <img src="/imagens/Localizacao-icone-30.png" alt='Ícone localização' />}
          {!valor && <a href={linkGitHub} target="_blank" rel="noopener noreferrer"> <img src="/imagens/GitHub-icone-30.png" alt='Ícone GitHub' /> </a>}
          {!valor && <a href={linkLinkedin} target="_blank" rel="noopener noreferrer"> <img src="/imagens/Linkedin-icone-30.png" alt='Ícone Linkedin' /> </a>}
          {!valor && <img src="/imagens/Mostrar-mais-icone-30.png" alt='Ícone Mais' />}
          {valor && <img src="/imagens/Mostrar-menos-icone-30.png" alt='Ícone Menos' />}
        </Botao>

        {valor && <InformacoesContato />}
      </InformacoesTelaMobile>

      <InformacoesTelaDesktop>
        <InformacoesContato />
      </InformacoesTelaDesktop>

    </CabecalhoContainer>
  )
}