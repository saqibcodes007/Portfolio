import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const sectionRef = useRef(null);
  const skillsRef = useRef(null);

  // Skills data with categories
  const skillsData = {
    technical: [
      { name: 'Python', level: 90 },
      { name: 'C++', level: 75 },
      { name: 'Machine Learning', level: 80 },
      { name: 'Generative AI', level: 85 },
      { name: 'Prompt Engineering', level: 95 },
    ],
    healthcare: [
      { name: 'Medical Scribing', level: 95 },
      { name: 'HIPAA Compliance', level: 90 },
      { name: 'EHR/EMR Systems', level: 85 },
      { name: 'SOAP Documentation', level: 95 },
      { name: 'Revenue Cycle Management', level: 90 },
    ],
    management: [
      { name: 'Operations Management', level: 95 },
      { name: 'Team Leadership', level: 90 },
      { name: 'Training & Development', level: 95 },
      { name: 'Process Automation', level: 85 },
      { name: 'Strategic Planning', level: 80 },
    ]
  };

  // State for active category
  const [activeCategory, setActiveCategory] = useState('technical');

  useEffect(() => {
    // GSAP animations for skills constellation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.from('.skill-node', {
      scale: 0,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: 'back.out(1.7)'
    }).from('.skill-line', {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.inOut'
    }, '-=0.5');

    // Subtle animation for constellation
    gsap.to('.skills-constellation', {
      rotation: '+=1',
      duration: 20,
      repeat: -1,
      ease: 'none',
      transformOrigin: 'center center'
    });

    return () => {
      tl.kill();
    };
  }, [activeCategory]);

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

  // Function to generate constellation coordinates
  const generateConstellationCoords = (skills) => {
    const coords = [];
    const centerX = 250;
    const centerY = 250;
    const radius = 180;
    
    skills.forEach((skill, index) => {
      const angle = (index / skills.length) * Math.PI * 2;
      // Adjust radius based on skill level
      const adjustedRadius = radius * (0.5 + (skill.level / 200));
      const x = centerX + Math.cos(angle) * adjustedRadius;
      const y = centerY + Math.sin(angle) * adjustedRadius;
      
      coords.push({
        ...skill,
        x,
        y,
        size: 10 + (skill.level / 10)
      });
    });
    
    return coords;
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const activeSkills = skillsData[activeCategory] || [];
  const constellationCoords = generateConstellationCoords(activeSkills);

  return (
    <section 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      id="skills"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-1/3 h-1/3 bg-electric-cyan opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-1/4 h-1/4 bg-bright-teal opacity-5 rounded-full blur-3xl"></div>
      
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
            Skills
          </motion.h2>
          
          {/* Category selection */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {Object.keys(skillsData).map(category => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-electric-cyan text-deep-space-blue font-medium' 
                    : 'bg-tech-charcoal text-cosmic-silver hover:bg-midnight-indigo'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </motion.div>
          
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Skills constellation visualization */}
            <div className="lg:w-1/2 relative">
              <div 
                ref={skillsRef}
                className="skills-constellation relative w-[500px] h-[500px] mx-auto"
              >
                {/* Connecting lines */}
                <svg width="500" height="500" className="absolute top-0 left-0">
                  {constellationCoords.map((coord, i) => (
                    <g key={`lines-${i}`}>
                      {constellationCoords.map((otherCoord, j) => {
                        // Only connect some nodes to avoid too many lines
                        if (i < j && (i + j) % 3 === 0) {
                          return (
                            <line
                              key={`line-${i}-${j}`}
                              x1={coord.x}
                              y1={coord.y}
                              x2={otherCoord.x}
                              y2={otherCoord.y}
                              className="skill-line"
                              stroke="rgba(91, 192, 190, 0.2)"
                              strokeWidth="1"
                            />
                          );
                        }
                        return null;
                      })}
                    </g>
                  ))}
                </svg>
                
                {/* Skill nodes */}
                {constellationCoords.map((coord, index) => (
                  <motion.div
                    key={`node-${index}`}
                    className="skill-node absolute rounded-full flex items-center justify-center cursor-pointer hover-glow"
                    style={{
                      left: `${coord.x}px`,
                      top: `${coord.y}px`,
                      width: `${coord.size}px`,
                      height: `${coord.size}px`,
                      backgroundColor: `rgba(91, 192, 190, ${coord.level / 100})`,
                      transform: 'translate(-50%, -50%)',
                      zIndex: 10
                    }}
                    whileHover={{
                      scale: 1.5,
                      backgroundColor: '#00F5D4',
                      transition: { duration: 0.3 }
                    }}
                    data-skill={coord.name}
                    data-level={coord.level}
                  >
                    <span className="skill-tooltip absolute whitespace-nowrap bg-midnight-indigo text-space-white px-3 py-1 rounded text-sm opacity-0 transition-opacity duration-300 pointer-events-none"
                      style={{
                        bottom: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        marginBottom: '10px'
                      }}
                    >
                      {coord.name} - {coord.level}%
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Skills details */}
            <div className="lg:w-1/2">
              <motion.div
                variants={itemVariants}
                className="glassmorphism p-6 md:p-8"
              >
                <h3 className="text-2xl font-space-grotesk font-medium text-electric-cyan mb-6">
                  {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Skills
                </h3>
                
                <div className="space-y-6">
                  {activeSkills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-space-white">{skill.name}</span>
                        <span className="text-cosmic-silver">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-tech-charcoal rounded-full h-2">
                        <div 
                          className="h-full rounded-full bg-gradient-to-r from-electric-cyan to-bright-teal"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <p className="mt-8 text-cosmic-silver">
                  Hover over the constellation nodes to see skill details. The size and brightness of each node represents proficiency level.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
