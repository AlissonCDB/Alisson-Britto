import React, { useState } from 'react'
import { styled } from 'styled-components'
import { Cabecalho } from "../Cabecalho"
import { InformacoesContato } from "../InformacoesContato"
import { Botao } from '../Botao'

import emailIcone from '../Imagens/Gmail-icone-30.png'
import githubIcone from '../Imagens/GitHub-icone-30.png'
import localizacaoIcone from '../Imagens/Localizacao-icone-30.png'
import telefoneIcone from '../Imagens/Telefone-icone-30.png'
import linkedinIcone from '../Imagens/Linkedin-icone-30.png'
import maisIcone from '../Imagens/Mostrar-mais-icone-30.png'
import menosIcone from '../Imagens/Mostrar-menos-icone-30.png'


const linkGitHub = 'https://github.com/AlissonCDB';
const linkLinkedin = 'https://www.linkedin.com/in/alisson-cunha-de-britto-715a52270/';

const CabecalhoContainer = styled.div``
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

  const handleClick = () => {
    setValor(!valor);
  };

  return (
    <CabecalhoContainer>
      <Cabecalho />
      <InformacoesTelaMobile>

        <Botao onClick={handleClick}>
          {valor ? true : false}
          {!valor && <img src={telefoneIcone} alt='Ícone telefone ' />}
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