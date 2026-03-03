import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket } from "lucide-react";

import { menuItems, SOLAR_SYSTEM_CONFIG } from "../componentes/constants.js";
import { GlobalStyles, StarBackground, CentralSun } from "../componentes/SistemaSolar/ElementosSistemaSolar.jsx";
import { OrbitingPlanet } from "../componentes/SistemaSolar/OrbitasPlanetas.jsx";
import { NavigationMenu } from "../componentes/NavigationMenu/index.jsx";

const linkGitHub = 'https://github.com/AlissonCDB';
import githubIcone from '../../public/imagens/GitHub-icone-30.png'

const ContainerHome = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 2000px;
`;

const RocketButton = styled.button`
  position: fixed;
  top: ${props => props.$isMobile ? '20px' : '40px'};
  right: ${props => props.$isMobile ? '20px' : 'center'}; 
  z-index: 1000;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  padding: 16px;
  cursor: pointer;
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
`;

const AvisoOverlay = styled.div`
  display: flex;
  align-items: flex-start; // Alinha no topo
  justify-content: flex-start; // Alinha à esquerda
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4); // Escurece um pouco o fundo
  backdrop-filter: blur(5px); // Efeito de desfoque moderno
  position: fixed; // Garante que fique sobre tudo
  top: 0;
  left: 0;
  z-index: 1001;
  padding: 20px;
`;

// Card do Aviso
const Card = styled.div`
  width: 90%;
  max-width: 400px; // Limita o tamanho em telas grandes
  padding: 25px;
  background: rgba(75, 129, 129, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  color: white;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  text-align: center;

  h2 {
    margin-bottom: 15px;
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  p {
    line-height: 1.6;
    margin-bottom: 20px;
    font-size: 0.95rem;
  }
`;

const LinkGitHub = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #00ffff; // Um ciano para destacar no fundo escuro
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
    text-decoration: underline;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

export const Home = () => {
    const [isPaused, setIsPaused] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scale, setScale] = useState(1);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            setIsMobile(width < 768);

            if (width > 1024) {
                const scaleW = width / 1080;
                const scaleH = height / 720;
                setScale(Math.min(scaleW, scaleH, 1));
            } else {
                setScale(1);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <ContainerHome>
            <AvisoOverlay>
                <Card>
                    <h2>Aviso</h2>
                    <p>
                        Este portfólio está sendo atualizado, mas você já pode
                        conferir um pouco da nova temática e acompanhar o progresso. <br />
                        Enquanto isso que tal, acompanhar um poquinho dos meus repositorios, 
                        logo logo os links para os projetos estarão disponíveis por aqui!
                        Recomendo a dar uma olhada no projeto <a href="https://github.com/AlissonCDB/group-leveling">Group Leveling</a>, meu TCC em desenvolvimento.
                    </p>
                    <LinkGitHub href={linkGitHub} target="_blank" rel="noopener noreferrer">
                        <img src={githubIcone} alt="Ícone GitHub" />
                        <span>Ver Repositórios</span>
                    </LinkGitHub>
                </Card>
            </AvisoOverlay>
            <GlobalStyles />
            <StarBackground />

            {/* Menu: Botão de Foguete */}
            <RocketButton $isMobile={isMobile} onClick={() => setIsMenuOpen(true)}>
                <motion.div whileHover={{ scale: 1.2, rotate: -45 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Rocket size={isMobile ? 32 : 24} color="white" />
                </motion.div>
            </RocketButton>

            <AnimatePresence>
                {isMenuOpen && (
                    <NavigationMenu
                        items={menuItems}
                        onClose={() => setIsMenuOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Container do Sistema Solar */}
            <div
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                style={{
                    position: 'absolute',
                    width: `100vw`,
                    height: `100vh`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: `rotateX(65deg) scale(${scale})`,
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    pointerEvents: 'all'
                }}
            >
                <CentralSun image={SOLAR_SYSTEM_CONFIG.blackHoleImg} />
                {menuItems.map((planet) => (
                    <OrbitingPlanet key={planet.id} planet={planet} isPaused={isPaused} />
                ))}
            </div>
        </ContainerHome>
    );
};