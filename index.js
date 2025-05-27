import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Import components
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Register ScrollTrigger plugin
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
    
    // Preloader animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Performance optimization
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top bottom-=100',
        end: 'bottom top+=100',
        toggleClass: { targets: section, className: 'active' },
        once: true
      });
    });

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Animation variants for page transitions
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-deep-space-blue text-space-white">
      <Head>
        <title>Saqib Sherwani | Portfolio</title>
        <meta name="description" content="Saqib Sherwani - Assistant Operations Manager | Training Manager | Integrating AI/ML and automation in healthcare documentation and RCM" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0A1128" />
        <meta property="og:title" content="Saqib Sherwani | Portfolio" />
        <meta property="og:description" content="Assistant Operations Manager | Training Manager | Integrating AI/ML and automation in healthcare" />
        <meta property="og:type" content="website" />
      </Head>

      {loading ? (
        <div className="preloader">
          <div className="preloader-content">
            <div className="preloader-circle"></div>
            <div className="preloader-circle"></div>
            <div className="preloader-circle"></div>
          </div>
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            className="overflow-hidden"
          >
            <Header />
            <main>
              <Hero />
              <About />
              <Experience />
              <Skills />
              <Education />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
