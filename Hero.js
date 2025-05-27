import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const backgroundRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    // Animate background pattern
    gsap.to(backgroundRef.current, {
      backgroundPosition: '100% 100%',
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Animate name and title reveal
    const tl = gsap.timeline();
    tl.from(nameRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }).from(titleRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.5').from(scrollIndicatorRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power3.out',
      repeat: -1,
      yoyo: true
    }, '+=0.5');

    return () => {
      tl.kill();
    };
  }, []);

  // Animation variants for motion components
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background pattern */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px',
          backgroundPosition: '0% 0%'
        }}
      ></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 z-10 text-center"
      >
        <motion.h1
          ref={nameRef}
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-space-grotesk font-bold mb-4 text-gradient"
        >
          Saqib Sherwani
        </motion.h1>
        
        <motion.h2
          ref={titleRef}
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl font-inter text-cosmic-silver mb-8 max-w-3xl mx-auto"
        >
          Assistant Operations Manager | Training Manager | Integrating AI/ML and automation in healthcare documentation and RCM
        </motion.h2>
        
        <motion.div
          variants={itemVariants}
          className="glassmorphism inline-block px-8 py-4 mt-8"
        >
          <p className="text-space-white">South Delhi, Delhi, India</p>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          ref={scrollIndicatorRef}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 5L12 19M12 19L19 12M12 19L5 12"
              stroke="#5BC0BE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
