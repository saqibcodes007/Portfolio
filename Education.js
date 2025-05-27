import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Education = () => {
  const sectionRef = useRef(null);
  
  const educationData = [
    {
      id: 'edu1',
      degree: 'Bachelor of Technology | BTech',
      field: 'Biochemical Engineering',
      institution: 'University School of Chemical Technology',
      period: '2013 - 2017',
    },
    {
      id: 'edu2',
      degree: 'Higher Secondary School (12th)',
      field: 'Mathematics and Computer Science',
      institution: 'New Green Field School, Delhi | CBSE',
      period: '2013',
    }
  ];
  
  const certifications = [
    {
      id: 'cert1',
      name: 'Six Sigma Yellow Belt (SSYB)',
      issuer: '',
      date: '',
    },
    {
      id: 'cert2',
      name: 'Introduction to Prompt Engineering',
      issuer: '',
      date: '',
    },
    {
      id: 'cert3',
      name: 'AI Aware Badge - AI For All',
      issuer: '',
      date: '',
    },
    {
      id: 'cert4',
      name: 'Scrum Fundamentals Certified (SFC)',
      issuer: '',
      date: '',
    },
    {
      id: 'cert5',
      name: 'Academy Accreditation - Generative AI Fundamentals',
      issuer: '',
      date: '',
    }
  ];

  useEffect(() => {
    // GSAP animations for education cards
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.from('.education-card', {
      y: 50,
      opacity: 0,
      stagger: 0.3,
      duration: 0.8,
      ease: 'power3.out'
    }).from('.certification-card', {
      scale: 0.9,
      opacity: 0,
      stagger: 0.15,
      duration: 0.6,
      ease: 'back.out(1.7)'
    }, '-=0.5');

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
      id="education"
    >
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-neon-purple opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-1/4 h-1/4 bg-bright-teal opacity-5 rounded-full blur-3xl"></div>
      
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
            Education & Certifications
          </motion.h2>
          
          {/* Education Section */}
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-space-grotesk font-medium text-electric-cyan mb-8"
          >
            Academic Background
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {educationData.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="education-card glassmorphism p-6 hover-glow transition-all duration-300"
              >
                <div className="flex flex-col h-full">
                  <h4 className="text-xl font-space-grotesk font-medium text-space-white mb-2">
                    {item.degree}
                  </h4>
                  <p className="text-electric-cyan mb-1">{item.field}</p>
                  <p className="text-cosmic-silver mb-4">{item.institution}</p>
                  <div className="mt-auto">
                    <span className="inline-block px-4 py-1 bg-tech-charcoal rounded-full text-sm text-nebula-gray">
                      {item.period}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Certifications Section */}
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-space-grotesk font-medium text-electric-cyan mb-8"
          >
            Professional Certifications
          </motion.h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="certification-card glassmorphism p-5 hover-glow transition-all duration-300 flex items-center"
              >
                <div className="w-10 h-10 mr-4 rounded-full bg-tech-charcoal flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15L8.5 12L12 9L15.5 12L12 15Z" fill="#5BC0BE"/>
                    <path d="M19 6L19 18L12 22L5 18L5 6L12 2L19 6Z" stroke="#5BC0BE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-space-white font-medium">{cert.name}</h4>
                  {cert.issuer && (
                    <p className="text-sm text-cosmic-silver">{cert.issuer}</p>
                  )}
                  {cert.date && (
                    <p className="text-xs text-nebula-gray">{cert.date}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
