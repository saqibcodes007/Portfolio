import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // GSAP animations for section elements
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }).from(contentRef.current.children, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power3.out'
    }, '-=0.4');

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
      id="about"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-electric-cyan opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-neon-purple opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            ref={headingRef}
            variants={itemVariants}
            className="text-4xl md:text-5xl font-space-grotesk font-bold mb-12 text-gradient"
          >
            About Me
          </motion.h2>
          
          <div 
            ref={contentRef}
            className="glassmorphism p-6 md:p-8 lg:p-10 max-w-4xl"
          >
            <p className="text-cosmic-silver mb-6">
              Accomplished and innovative US healthcare domain expert with over eight years of comprehensive experience, possessing deep expertise in operations at all levels. Demonstrated proficiency in client management, performance optimization, strategic staffing, training and development, budgeting, product innovation, and program management.
            </p>
            
            <p className="text-cosmic-silver mb-6">
              Architect and developer of a comprehensive Medical Scribe Training Program, built from the ground up. Spearheaded the onboarding of 120+ graduate trainees from nationwide campus hiring drives and personally trained over 40 full-time medical scribes, setting new standards for onboarding and readiness in clinical support roles.
            </p>
            
            <p className="text-cosmic-silver mb-6">
              Certified AI Prompt Engineer, driving AI and automation integration across all organizational verticals—including RCM, Medical Scribing, HR, and Marketing—by leveraging Python and prompt engineering to streamline workflows and enhance outcomes.
            </p>
            
            <p className="text-cosmic-silver mb-6">
              Self-taught in Python, Machine Learning, and Generative AI, with a consistent weekend learning routine dedicated to mastering emerging technologies and applying them to real-world business challenges and automation opportunities.
            </p>
            
            <p className="text-cosmic-silver mb-6">
              Experienced team leader and mentor, having successfully led and developed teams of 50+ full-time employees, fostering innovation, performance, and a culture of continuous improvement.
            </p>
            
            <p className="text-cosmic-silver mb-6">
              Strategic thinker and cross-functional contributor, regularly introducing impactful ideas, tools, and process optimizations across departments—particularly in HR and Marketing—to boost organizational productivity.
            </p>
            
            <p className="text-cosmic-silver mb-6">
              Visionary leader with strong strategic planning, execution, and resource allocation capabilities. Adept at navigating complex, high-pressure environments while consistently meeting deadlines and business goals.
            </p>
            
            <p className="text-cosmic-silver mb-6">
              Results-driven professional focused on maximizing resource efficiency and consistently delivering high-quality outcomes. Proven success in executing mission-critical initiatives with lasting impact.
            </p>
            
            <p className="text-cosmic-silver mb-6">
              Rapid learner with the ability to quickly adapt to new tools and technologies, enabling swift implementation of cutting-edge solutions across business functions.
            </p>
            
            <p className="text-cosmic-silver mb-6">
              The most tenured employee in my current organization, exemplifying commitment, adaptability, and sustained value creation across years of service.
            </p>
            
            <p className="text-cosmic-silver">
              Proactive problem-solver known for identifying scalable solutions and forward-thinking strategies that drive growth and operational excellence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
