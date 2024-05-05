// src/hooks/useInView.js
import { useEffect, useRef, useState } from 'react';

function useInView(options = { threshold: 0.5 }) {  // Ajustei o threshold para 0.5 para melhor detecção
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          setInView(entry.isIntersecting);
        });
      },
      {
        root: null,  // observa as mudanças em relação ao viewport
        rootMargin: '0px',
        threshold: options.threshold  // 50% do item deve estar visível
      }
    );

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, options.threshold]);  // Depende do ref e do threshold

  return [ref, inView];
}

export default useInView;
