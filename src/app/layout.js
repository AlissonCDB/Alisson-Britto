import StyledComponentsRegistry from '@/lib/registry';
import './globals.css';

import { Header } from '@/rotas/Header'; 
import { Footer } from '@/componentes/Footer';

export const metadata = {
  title: 'Meu Portfólio',
  description: 'Portfólio de Projetos e Skills',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <Header />
          
          <main style={{ flex: 1 }}>
            {children}
          </main>
          
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}