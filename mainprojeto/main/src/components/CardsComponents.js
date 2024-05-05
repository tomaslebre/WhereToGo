import React from 'react';
import { motion } from 'framer-motion';
import useInView from '../hooks/useInView'; // Ajuste o caminho conforme necessário

function CardsComponents({ children }) {
  const [ref, inView] = useInView();

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, type: 'spring', stiffness: 120 }
    },
    exit: { opacity: 0, y: -50, transition: { duration: 0.5 } }
  };

  return (
    <motion.div className='container' ref={ref} variants={cardVariants} initial="hidden" animate={inView ? "visible" : "hidden"} exit={inView ? "exit" : undefined}>
        {children && <p className='tag-container'>{children}</p>}
        <div className='containers'>
          <motion.div className='cards-container' variants={cardVariants}>
            {/* Conteúdo do card */}
          </motion.div>
          <motion.div className='cards-container' variants={cardVariants}>
            {/* Conteúdo do card */}
          </motion.div>
          <motion.div className='cards-container' variants={cardVariants}>
            {/* Conteúdo do card */}
          </motion.div>
        </div>
    </motion.div>
  );
}

export default CardsComponents;