import styled from "styled-components";
import { motion } from "framer-motion";

export const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const Panel = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 320px; /* Largura compacta e fixa para Desktop */
  background: #111;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  z-index: 1001;

  @media (max-width: 480px) {
    max-width: 100%; /* Ocupa tudo apenas no celular */
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;

  span {
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 0.9rem;
  }

  button {
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    opacity: 0.6;
    transition: opacity 0.2s;
    &:hover { opacity: 1; }
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MenuLink = styled.a`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 1.5rem; /* Tamanho confortável, não exagerado */
  font-weight: 500;
  padding: 0.5rem 0;
  transition: all 0.2s;

  &:hover {
    color: #fff;
    transform: translateX(5px);
  }

  @media (max-width: 480px) {
    font-size: 1.8rem; /* Um pouco maior no touch para facilitar o clique */
  }
`;