import React from 'react'
import { motion } from 'framer-motion';
import bridgeImage from '../imgs/imagens/ponte_azul.png';
import '../App.css';
import CardsComponents from './CardsComponents';


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

          </motion.div>
          </motion.div>
    
          <motion.div className="about-us-container"  initial="hidden" animate="visible"> 
              {/* Sobre nós  */}
        </motion.div>
        <div className='container'>
      <span className='tag-container'>Português</span>
        <div className='containers'>

          <div className='cards-container'>
            
          </div>
          <div className='cards-container'> 

          </div>
          <div className='cards-container'>
            
          </div>
        </div>
        </div>

        <div className='container'>
      <span className='tag-container'>Mexicano</span>
        <div className='containers'>

          <div className='cards-container'>
            
          </div>
          <div className='cards-container'> 

          </div>
          <div className='cards-container'>
            
          </div>
        </div>
        </div>

        <div className='container'>
      <span className='tag-container'>Asiático</span>
        <div className='containers'>

          <div className='cards-container'>
            
          </div>
          <div className='cards-container'> 

          </div>
          <div className='cards-container'>
            
          </div>
        </div>
        </div>

        <div className='container'>
      <span className='tag-container'>Japonês</span>
        <div className='containers'>

          <div className='cards-container'>
            
          </div>
          <div className='cards-container'> 

          </div>
          <div className='cards-container'>
            
          </div>
        </div>
        </div>

        <div className='container'>
      <span className='tag-container'>Indiano</span>
        <div className='containers'>

          <div className='cards-container'>
            
          </div>
          <div className='cards-container'> 

          </div>
          <div className='cards-container'>
            
          </div>
        </div>
        </div>

        <div className='container'>
      <span className='tag-container'>Italiano</span>
        <div className='containers'>

          <div className='cards-container'>
            
          </div>
          <div className='cards-container'> 

          </div>
          <div className='cards-container'>
            
          </div>
        </div>
        </div>

        <div className='container'>
      <span className='tag-container'>Marisqueira</span>
        <div className='containers'>

          <div className='cards-container'>
            
          </div>
          <div className='cards-container'> 

          </div>
          <div className='cards-container'>
            
          </div>
        </div>
        </div>

        
        </>
        
        
      );
}

export default EatComponents
