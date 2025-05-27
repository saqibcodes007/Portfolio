import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Experience = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const [activeJob, setActiveJob] = useState(null);

  const jobs = [
    {
      id: 'job1',
      title: 'Assistant Operations Manager',
      company: 'Panacea Smart Solutions',
      period: 'January 2025 - Present',
      location: 'Sheboygan, Wisconsin, United States',
      description: `As Assistant Manager of Operations and Training Manager at Panacea Smart Solutions LLC, I spearhead the Medical Scribing/US Healthcare Documentation division at PanaHealth while managing a team of 40+ medical scribes (and upto 60+ FTEs) providing real-time documentation support to US healthcare providers. My major duties include overseeing training, operations, and compliance with US healthcare regulations (HIPAA, SOAP documentation, EHR/EMR systems).

I established and currently lead the training program, audit department, and quality assurance team, ensuring high standards in clinical documentation. As the most tenured employee, I have trained 30+ medical scribes over the last 2 years in US healthcare protocols, including SOAP documentation, EHR/EMR systems, and HIPAA compliance. My innovative training methods reduced onboarding time by 20% while maintaining a 95% provider satisfaction rate.

I am spearheading the implementation of AI-driven solutions across the medical scribing and Revenue Cycle Management (RCM) operations, enhancing efficiency and accuracy. Additionally, I streamlined workflows, improved EHR/EMR usage, and achieved 30% year-on-year client base growth through operational excellence and strategic initiatives. My role also involves monitoring scribe performance, ensuring quality targets are met, onboarding new clients, maintaining/improving client relationships, and fostering professional development.

With over 8 years of experience, I bring expertise in medical scribing, US healthcare operations, and training & development. My technical skills include proficiency in C++, Python, generative AI, machine learning, prompt engineering, along with a deep understanding of EHR/EMR systems. I am passionate about leveraging technology to drive innovation in the US healthcare industry especially documentation and RCM.`
    },
    {
      id: 'job2',
      title: 'Training Manager',
      company: 'Panacea Smart Solutions',
      period: 'August 2022 - Present',
      location: 'Noida, Uttar Pradesh, India',
      description: 'Led the training department for medical scribing operations, developing comprehensive training programs and materials for new hires.'
    },
    {
      id: 'job3',
      title: 'Senior Team Lead',
      company: 'Panacea Smart Solutions',
      period: 'January 2023 - May 2025',
      location: 'Noida, Uttar Pradesh, India',
      description: 'Managed a team of medical scribes, ensuring quality documentation and compliance with healthcare regulations.'
    },
    {
      id: 'job4',
      title: 'Implementation Specialist',
      company: 'Panacea Smart Solutions',
      period: 'January 2022 - September 2022',
      location: 'Noida, Uttar Pradesh, India',
      description: 'Facilitated the implementation of new systems and processes for healthcare documentation.'
    },
    {
      id: 'job5',
      title: 'Senior Process Associate',
      company: 'Panacea Smart Solutions',
      period: 'June 2018 - January 2022',
      location: 'Noida, India',
      description: 'Provided specialized support for healthcare documentation processes and quality assurance.'
    },
    {
      id: 'job6',
      title: 'Process Associate',
      company: 'IDS Infotech Limited',
      period: 'May 2017 - May 2018',
      location: 'Noida, Uttar Pradesh, India',
      description: 'Supported healthcare documentation processes and client requirements.'
    }
  ];

  useEffect(() => {
    // Set first job as active by default
    if (!activeJob && jobs.length > 0) {
      setActiveJob(jobs[0].id);
    }

    // GSAP animations for timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.from('.timeline-item', {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power3.out'
    }).from('.timeline-connector', {
      height: 0,
      duration: 1.5,
      ease: 'power3.inOut'
    }, '-=1');

    return () => {
      tl.kill();
    };
  }, [activeJob, jobs]);

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

  const handleJobClick = (jobId) => {
    setActiveJob(jobId);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      id="experience"
    >
      {/* Background elements */}
      <div className="absolute top-1/3 right-1/4 w-1/3 h-1/3 bg-neon-purple opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1/4 h-1/4 bg-electric-cyan opacity-5 rounded-full blur-3xl"></div>
      
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
            Experience
          </motion.h2>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Timeline navigation */}
            <div className="lg:w-1/3">
              <div ref={timelineRef} className="relative">
                {/* Timeline connector line */}
                <div className="timeline-connector hidden lg:block absolute top-0 bottom-0 left-4 h-full"></div>
                
                {jobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    variants={itemVariants}
                    className={`timeline-item relative mb-8 pl-10 cursor-pointer transition-all duration-300 ${activeJob === job.id ? 'scale-105' : 'opacity-70 hover:opacity-100'}`}
                    onClick={() => handleJobClick(job.id)}
                  >
                    {/* Timeline dot */}
                    <div 
                      className={`absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center z-10 transition-all duration-300 ${activeJob === job.id ? 'bg-electric-cyan' : 'bg-tech-charcoal border border-electric-cyan'}`}
                    >
                      <span className="text-xs font-bold">{index + 1}</span>
                    </div>
                    
                    <h3 className={`text-xl font-space-grotesk font-medium transition-all duration-300 ${activeJob === job.id ? 'text-electric-cyan' : 'text-space-white'}`}>
                      {job.title}
                    </h3>
                    <p className="text-cosmic-silver">{job.company}</p>
                    <p className="text-sm text-nebula-gray">{job.period}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Job details */}
            <div className="lg:w-2/3">
              {activeJob && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  key={activeJob}
                  className="glassmorphism p-6 md:p-8"
                >
                  {jobs.find(job => job.id === activeJob) && (
                    <>
                      <h3 className="text-2xl font-space-grotesk font-medium text-electric-cyan mb-2">
                        {jobs.find(job => job.id === activeJob).title}
                      </h3>
                      <h4 className="text-xl text-space-white mb-1">
                        {jobs.find(job => job.id === activeJob).company}
                      </h4>
                      <p className="text-cosmic-silver mb-2">
                        {jobs.find(job => job.id === activeJob).period}
                      </p>
                      <p className="text-nebula-gray mb-6">
                        {jobs.find(job => job.id === activeJob).location}
                      </p>
                      <div className="text-cosmic-silver whitespace-pre-line">
                        {jobs.find(job => job.id === activeJob).description.split('\n\n').map((paragraph, i) => (
                          <p key={i} className="mb-4">{paragraph}</p>
                        ))}
                      </div>
                    </>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
