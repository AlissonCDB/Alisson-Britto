import React from "react";
import { Link } from "react-router-dom"; // O QUE ESTAVA FALTANDO!
import { motion } from "framer-motion";
import { Home as HomeIcon } from "lucide-react";

export const GlobalStyles = () => (
    <style>{`
        @keyframes orbit { 
            from { transform: rotate(0deg); } 
            to { transform: rotate(360deg); } 
        }
        @keyframes anti-spin-billboard {
            0% { transform: rotate(0deg) rotateX(-65deg); }
            100% { transform: rotate(-360deg) rotateX(-65deg); }
        }
    `}</style>
);

export const StarBackground = () => (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.15 }}>
        <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px), radial-gradient(circle, #fff 0.5px, transparent 0.5px)`,
            backgroundSize: '150px 150px, 50px 50px'
        }} />
    </div>
);

export const CentralSun = ({ image }) => (
    <div style={{ position: 'absolute', zIndex: 100, transform: 'rotateX(-65deg)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Link to="/" style={{ textDecoration: 'none' }}>
            <div style={{ 
                width: '200px', 
                height: '200px', 
                position: 'relative', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
            }}>
                <motion.img
                    src={image}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
                {/* Ícone da Home também escala */}
                <div style={{ position: 'absolute' }}>
                    <HomeIcon size={window.innerWidth < 768 ? 18 : 24} color="white" />
                </div>
            </div>
        </Link>
    </div>
);