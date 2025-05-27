import '../styles/globals.css';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  // Custom cursor effect
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
    };

    const addHoverClass = () => cursor.classList.add('hover');
    const removeHoverClass = () => cursor.classList.remove('hover');

    document.addEventListener('mousemove', moveCursor);
    
    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', addHoverClass);
      el.addEventListener('mouseleave', removeHoverClass);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', addHoverClass);
        el.removeEventListener('mouseleave', removeHoverClass);
      });
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}

export default MyApp;
