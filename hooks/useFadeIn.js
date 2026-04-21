'use client';
import { useEffect } from 'react';

const useFadeIn = () => {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => io.observe(el));

    return () => {
      elements.forEach((el) => io.unobserve(el));
    };
  }, []);
};

export default useFadeIn;
