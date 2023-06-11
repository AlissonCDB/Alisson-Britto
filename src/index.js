import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { Footer } from './componentes/Footer';
import { Header } from './componentes/rotas/Header';
import { Skills } from './componentes/rotas/Skills'
import { Home } from './componentes/rotas/Home'
import { Projetos } from './componentes/rotas/Projetos';

const GlobalStyle = createGlobalStyle`
  html {
    background-color: black;
    color: #cfb072;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`

const App = () => {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projetos' element={<Projetos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

reportWebVitals();
