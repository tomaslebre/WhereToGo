import React from 'react'
import { motion } from 'framer-motion';
import bridgeImage from '../imgs/imagens/ponte_azul.png';


function EatComponents() {
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
        <>
        <motion.div className="feature-card" variants={cardVariants} initial="hidden" animate="visible">
          <motion.div className="text-container" variants={textContainerVariants} initial="hidden" animate="visible">
            
            <p className="sloganeat-p">Para cada fome, um destino delicioso</p>
            <button className="new-roteiro">
              <span style={{ position: 'relative', zIndex: 1 }}>Novo Roteiro</span>
            </button>
          </motion.div>
          <motion.img src={bridgeImage} alt="Ponte" className="feature-image" variants={imageVariants} initial="hidden" animate="visible" />
          </motion.div>
    
          <motion.div className="about-us-container"  initial="hidden" animate="visible"> 
              {/* Sobre nós  */}
        </motion.div>
        </>
      );
}

export default EatComponents
