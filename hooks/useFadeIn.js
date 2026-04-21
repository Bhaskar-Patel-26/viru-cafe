'use client';
import { useEffect } from 'react';

const useFadeIn = (deps = []) => {
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
    elements.forEach((el) => {
      // If it's already visible (due to previous filter), don't re-observe
      if (!el.classList.contains('visible')) {
        io.observe(el);
      }
    });

    return () => {
      elements.forEach((el) => io.unobserve(el));
    };
  }, deps);
};

export default useFadeIn;
