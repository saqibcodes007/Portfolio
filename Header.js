import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-deep-space-blue bg-opacity-80 backdrop-blur-md' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-2xl font-space-grotesk font-bold text-electric-cyan">
            S<span className="text-space-white">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-cosmic-silver hover:text-electric-cyan transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-space-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="#ECF0F1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="#ECF0F1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
        className={`md:hidden absolute top-full left-0 w-full bg-midnight-indigo bg-opacity-95 backdrop-blur-md ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block py-2 text-cosmic-silver hover:text-electric-cyan transition-colors duration-300"
                  onClick={closeMenu}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
