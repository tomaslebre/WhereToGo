import React from 'react';
import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';

function CardsComponents({ children }) {
  const [ref, inView] = useInView();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      }
    },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, type: 'spring', stiffness: 120 }
    },
    exit: { y: -50, opacity: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div className='container mt-4 ' ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} exit={inView ? "exit" : undefined}>
      {children && (
        <div className="row justify-content-left">
          <div className="col-md-2">
            <motion.p className="tag-container text-center mx-auto" style={{ maxWidth: "300px" }} variants={cardVariants}>
              {children}
            </motion.p>
          </div>
        </div>
      )}
      <div className="row justify-content-center" >
        <div className="col-md-4">
          <motion.div className='cards-container' variants={cardVariants}>
            {/* Content of the first card */}
          </motion.div>
        </div>
        <div className="col-md-4">
          <motion.div className='cards-container' variants={cardVariants}>
            {/* Content of the second card */}
          </motion.div>
        </div>
        <div className="col-md-4">
          <motion.div className='cards-container' variants={cardVariants}>
            {/* Content of the third card */}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default CardsComponents;
