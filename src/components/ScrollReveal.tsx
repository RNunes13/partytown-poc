
import { useEffect, useRef } from 'react';

const ScrollReveal = () => {
  const revealRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    revealRef.current = new IntersectionObserver(callback, {
      threshold: 0.1,
    });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => revealRef.current?.observe(el));

    return () => {
      if (revealRef.current) {
        elements.forEach((el) => revealRef.current?.unobserve(el));
      }
    };
  }, []);

  return null;
};

export default ScrollReveal;
