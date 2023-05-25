import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';

import './index.css';
import { Cabecalho } from './componentes/Cabecalho';
import { Experiencias } from './componentes/Experiencias';
import { InformacoesContato } from './componentes/InformacoesContato';
import { Projetos } from './componentes/Projetos';
import { Copyright } from './componentes/Copyright';

const App = () => {
  const [valor, setValor] = useState(false);

  const handleClick = () => {
    setValor(!valor);
  };

  return (
    <React.StrictMode>
      <Cabecalho />
      <nav id='logo_mais'>
        <button className="button_link" onClick={handleClick}>
          {valor ? true : false}
          {!valor && <img src='images/icons8-volume-da-campainha-30.png' alt='Ícone Campainha' />}
          {!valor && <img src='images/icons8-gmail-30.png' alt='Ícone Gmail' />}
          {!valor && <img src='images/icons8-pontos-de-interesse-30.png' alt='Ícone Pontos de Interesse' />}
          {!valor && <a href='https://github.com/AlissonCDB'> <img src='images/icons8-github-30.png' alt='Ícone GitHub' /></a>}
          {!valor && <a href='https://www.linkedin.com/in/alisson-cunha-de-britto-715a52270/'><img src='images/icons8-linkedin-30.png' alt='Ícone LinkedIn' /></a>}
          {!valor && <img src='images/icons8-mais-30.png' alt='Ícone Mais' />}
          {valor && <img src="images/icons8-menos-30.png" alt='Ícone Menos' />}
        </button>
        {valor && <InformacoesContato />}
      </nav>
      <nav className="tela_cheia">
        <InformacoesContato />
      </nav>
      <Experiencias />
      <Projetos />
      <Copyright />
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

reportWebVitals();
