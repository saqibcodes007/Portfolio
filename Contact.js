import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Contact = () => {
  const sectionRef = useRef(null);
  
  const contactInfo = {
    email1: "sherwanisaqib@gmail.com",
    email2: "saqib@panaceasolutionsllc.com",
    phone: "+91 971 766 7625",
    location: "South Delhi, Delhi, India",
    linkedin: "www.linkedin.com/in/saqibsherwani"
  };

  useEffect(() => {
    // GSAP animations for contact cards
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.from('.contact-card', {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power3.out'
    });

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
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      id="contact"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-1/3 w-1/3 h-1/3 bg-electric-cyan opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1/4 h-1/4 bg-neon-purple opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-space-grotesk font-bold mb-12 text-gradient"
          >
            Contact Me
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-cosmic-silver max-w-2xl mx-auto text-center mb-12"
          >
            Feel free to reach out for collaborations, opportunities, or just to connect. I'm always open to discussing new projects and ideas.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Email 1 */}
            <motion.a
              href={`mailto:${contactInfo.email1}`}
              variants={itemVariants}
              className="contact-card glassmorphism p-6 flex flex-col items-center text-center cursor-pointer"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="w-16 h-16 rounded-full bg-tech-charcoal flex items-center justify-center mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#5BC0BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="#5BC0BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-space-grotesk font-medium text-electric-cyan mb-2">
                Primary Email
              </h3>
              <p className="text-space-white mb-4">{contactInfo.email1}</p>
              <span className="text-sm text-nebula-gray">Click to send an email</span>
            </motion.a>
            
            {/* Email 2 */}
            <motion.a
              href={`mailto:${contactInfo.email2}`}
              variants={itemVariants}
              className="contact-card glassmorphism p-6 flex flex-col items-center text-center cursor-pointer"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="w-16 h-16 rounded-full bg-tech-charcoal flex items-center justify-center mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#00F5D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="#00F5D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-space-grotesk font-medium text-bright-teal mb-2">
                Work Email
              </h3>
              <p className="text-space-white mb-4">{contactInfo.email2}</p>
              <span className="text-sm text-nebula-gray">Click to send an email</span>
            </motion.a>
            
            {/* Phone */}
            <motion.a
              href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`}
              variants={itemVariants}
              className="contact-card glassmorphism p-6 flex flex-col items-center text-center cursor-pointer"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="w-16 h-16 rounded-full bg-tech-charcoal flex items-center justify-center mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22 20.4704 21.7893 20.9996 21.4142 21.3747C21.0391 21.7498 20.5099 21.9605 19.96 21.96C16.4223 21.6894 13.0093 20.5396 10.06 18.62C7.32858 16.8896 5.0607 14.6217 3.33 11.89C1.4 8.92371 0.250187 5.4908 0 1.93999C-0.000737648 1.39109 0.209133 0.862718 0.582806 0.487835C0.956479 0.112952 1.48436 -0.0981478 2.03 0.0399902H5.03C6.08344 0.0279464 6.9726 0.823638 7.07 1.86999C7.18584 3.16337 7.44578 4.4393 7.84 5.65999C8.0766 6.3731 7.94937 7.15151 7.51 7.73999L6.12 9.12999C7.72208 12.0324 10.0075 14.3178 12.91 15.92L14.3 14.53C14.8885 14.0906 15.6669 13.9634 16.38 14.2C17.6007 14.5942 18.8766 14.8542 20.17 14.97C21.2265 15.0684 22.0263 15.9729 22 17.03V16.92Z" stroke="#7B68EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-space-grotesk font-medium text-neon-purple mb-2">
                Phone
              </h3>
              <p className="text-space-white mb-4">{contactInfo.phone}</p>
              <span className="text-sm text-nebula-gray">Click to call</span>
            </motion.a>
            
            {/* LinkedIn */}
            <motion.a
              href={`https://${contactInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="contact-card glassmorphism p-6 flex flex-col items-center text-center cursor-pointer md:col-span-2 lg:col-span-1"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="w-16 h-16 rounded-full bg-tech-charcoal flex items-center justify-center mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="#5BC0BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 9H2V21H6V9Z" stroke="#5BC0BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#5BC0BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-space-grotesk font-medium text-electric-cyan mb-2">
                LinkedIn
              </h3>
              <p className="text-space-white mb-4">{contactInfo.linkedin}</p>
              <span className="text-sm text-nebula-gray">Visit profile</span>
            </motion.a>
            
            {/* Location */}
            <motion.div
              variants={itemVariants}
              className="contact-card glassmorphism p-6 flex flex-col items-center text-center md:col-span-2 lg:col-span-2"
            >
              <div className="w-16 h-16 rounded-full bg-tech-charcoal flex items-center justify-center mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#00F5D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#00F5D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-space-grotesk font-medium text-bright-teal mb-2">
                Location
              </h3>
              <p className="text-space-white mb-4">{contactInfo.location}</p>
              <div className="w-full h-40 bg-tech-charcoal rounded-lg overflow-hidden">
                {/* Placeholder for map or location visualization */}
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-cosmic-silver">Map visualization</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
