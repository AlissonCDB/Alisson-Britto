import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import * as S from "./NavigationMenu.js";

export const NavigationMenu = ({ items = [], onClose }) => (
  <AnimatePresence>
    <S.Overlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    />
    <S.Panel
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
    >
      <S.Header>
        <span>MENU</span>
        <button onClick={onClose}><X size={24} /></button>
      </S.Header>

      <S.Nav>
        {items.map((item) => (
          <S.MenuLink key={item.id} as={Link} to={item.path} onClick={onClose}>
            {item.name}
          </S.MenuLink>
        ))}
      </S.Nav>
    </S.Panel>
  </AnimatePresence>
);