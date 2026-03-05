import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket } from "lucide-react";

import { menuItems, SOLAR_SYSTEM_CONFIG } from "../componentes/constants.js";

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

export const SobreMim = () => {

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
        <div style={{ width: '100vw', height: '100vh', backgroundColor: 'black' }}>
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

            Hello
        </div>
    )
}