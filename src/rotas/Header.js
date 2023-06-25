import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import { Cabecalho } from "../componentes/Cabecalho"
import { InformacoesContato } from "../componentes/InformacoesContato"
import { Botao } from '../componentes/Botao'

import emailIcone from '../imagens/Gmail-icone-30.png'
import githubIcone from '../imagens/GitHub-icone-30.png'
import localizacaoIcone from '../imagens/Localizacao-icone-30.png'
import whatsappIcone from '../imagens/Whatsapp-icone-30.png'
import linkedinIcone from '../imagens/Linkedin-icone-30.png'
import maisIcone from '../imagens/Mostrar-mais-icone-30.png'
import menosIcone from '../imagens/Mostrar-menos-icone-30.png'

const linkGitHub = 'https://github.com/AlissonCDB';
const linkLinkedin = 'https://www.linkedin.com/in/alisson-cunha-de-britto-715a52270/';
const linkWhatsapp = 'https://wa.me/5542999202232'

const CabecalhoContainer = styled.div`
  border-bottom: ${props => props.borda || '2px solid #cfb072'};
  box-shadow: ${props => props.sombra || '0px 6px 10px rgba(207, 176, 72, 0.5)'};
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

  useEffect(() =>{
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
      borda={borderOn && 'none'}
      sombra={borderOn && 'none'}
    >
      <Cabecalho valor={valor} />
      <InformacoesTelaMobile>

        <Botao onClick={handleClick}>
          {valor ? true : false}
          {!valor && <a href={linkWhatsapp}><img src={whatsappIcone}alt='Íconetelefone ' /> </a>}
          {!valor && <img src={emailIcone} alt='Ícone Gmail' />}
          {!valor && <img src={localizacaoIcone} alt='Ícone localização' />}
          {!valor && <a href={linkGitHub}> <img src={githubIcone} alt='Ícone GitHub' /> </a>}
          {!valor && <a href={linkLinkedin}> <img src={linkedinIcone} alt='Ícone Linkedin' /> </a>}
          {!valor && <img src={maisIcone} alt='Ícone Mais' />}
          {valor && <img src={menosIcone} alt='Ícone Menos' />}
        </Botao>

        {valor && <InformacoesContato />}
      </InformacoesTelaMobile>

      <InformacoesTelaDesktop>
        <InformacoesContato />
      </InformacoesTelaDesktop>

    </CabecalhoContainer>
  )
}