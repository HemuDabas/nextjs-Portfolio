"use client";

import { motion } from "framer-motion";
import React from "react";

interface CardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        padding: "1.5rem",
        margin: "0.5rem",
        borderRadius: "1rem",
        background: "linear-gradient(135deg, #fff, #f9f9f9)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        border: "1px solid #e5e5e5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        lineHeight: "1.5",
        cursor: "pointer",
      }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
