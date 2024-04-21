import React from 'react'
import { motion } from 'framer-motion'
import "../styles/Contactos.css";

function BodyContactos() {
    const textContainerVariants = {
        hidden: { x: '-50vw', opacity: 0 },
        visible: {
          x: 0,
          opacity: 1,
          transition: { duration: 0.5, type: 'spring', stiffness: 120 }
        },
      };
    
      // Variantes para a animação da imagem
      const imageVariants = {
        hidden: { x: '50vw', opacity: 0 },
        visible: {
          x: 0,
          opacity: 1,
          transition: { duration: 0.5, type: 'spring', stiffness: 120 }
        },
      };
    
      // Variante para a animação do card
      const cardVariants = {
        hidden: { scale: 0 },
        visible: {
          scale: 1,
          transition: { delay: 0.2, duration: 0.5, type: 'spring', stiffness: 120 }
        },
      };
    
      return (
            <motion.div className="feature-card" variants={cardVariants} initial="hidden" animate="visible">
                
            </motion.div>
           
        );
    }

export default BodyContactos
