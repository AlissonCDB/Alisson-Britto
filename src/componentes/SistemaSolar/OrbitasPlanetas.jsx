import React from "react";
import { Link } from "react-router-dom"; // Necessário aqui também
import { motion, AnimatePresence } from "framer-motion";

export const OrbitingPlanet = ({ planet, isPaused }) => {
    const isSaturn = planet.name === "Saturno";
    const actualWidth = isSaturn ? planet.size * 1.8 : planet.size;

    return (
        <div style={{
            position: 'absolute',
            width: planet.distance * 2,
            height: planet.distance * 2,
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            animation: `orbit ${planet.orbitSpeed}s linear infinite`,
            animationPlayState: isPaused ? 'paused' : 'running',
            pointerEvents: 'none',
            transformStyle: 'preserve-3d'
        }}>
            <div style={{
                animation: `anti-spin-billboard ${planet.orbitSpeed}s linear infinite`,
                animationPlayState: isPaused ? 'paused' : 'running',
                marginRight: `-${actualWidth / 2}px`,
                pointerEvents: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                transformStyle: 'preserve-3d'
            }}>
                {/* Balão de Nome */}
                <AnimatePresence>
                    {isPaused && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, x: "-50%", scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                            exit={{ opacity: 0, y: 10, x: "-50%", scale: 0.8 }}
                            style={{
                                position: 'absolute', bottom: '100%', marginBottom: '12px', left: '50%',
                                backgroundColor: 'rgba(15, 15, 15, 0.85)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                padding: '6px 14px', borderRadius: '12px', zIndex: 200,
                                boxShadow: '0 4px 15px rgba(0,0,0,0.8)',
                                pointerEvents: 'none'
                            }}
                        >
                            <span style={{ color: '#fff', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                                {planet.name}
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Planeta */}
                <Link to={planet.path} style={{ textDecoration: 'none' }}>
                    <motion.div whileHover={{ scale: 1.1 }}>
                        <img src={planet.image} alt={planet.name} style={{
                            width: `${actualWidth}px`, height: `${planet.size}px`,
                            objectFit: 'contain', borderRadius: isSaturn ? '0' : '50%'
                        }} />
                    </motion.div>
                </Link>
            </div>
        </div>
    );
};