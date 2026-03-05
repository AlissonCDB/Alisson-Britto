import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { Footer } from './componentes/Footer';
import { Header } from './rotas/Header';
import { Skills } from './rotas/Skills';
import { Home } from './rotas/Home';
import { Projetos } from './rotas/Projetos';
import { SobreMim } from './rotas/SobreMim';

const GlobalStyle = createGlobalStyle`
  html {
    background-color: white;
    color: #cfb072;
    height: 100vh;
    width: 100vw;
  }

  body {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%:
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body, ul {
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
`;

const App = () => {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/skills" element={<Home />} />
          <Route path="/projetos" element={<Home />} />
          <Route path='/SobreMim' element={<SobreMim />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App />);