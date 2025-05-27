import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-10 bg-midnight-indigo bg-opacity-30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-space-grotesk font-bold text-electric-cyan">
              Saqib Sherwani
            </h3>
            <p className="text-cosmic-silver mt-2">
              Assistant Operations Manager | Training Manager
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-cosmic-silver mb-2">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/saqibsherwani/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-nebula-gray hover:text-electric-cyan transition-colors duration-300"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
