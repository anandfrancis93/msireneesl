'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About Me', href: '#about' },
  {
    name: 'TESOL',
    href: '#tesol',
    submenu: [
      { name: 'Book Reports', href: '#book-reports' },
      { name: 'Lesson Plans', href: '#lesson-plans' },
      { name: 'Test Technical Manual', href: '#test-manual' },
    ]
  },
  { name: 'Work Experience', href: '#experience' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-surface/80 backdrop-blur-xl border-b border-dark-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold gradient-text"
          >
            Ms. Irene
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => item.submenu && setActiveDropdown(null)}
              >
                {item.submenu ? (
                  <>
                    <button
                      className="text-text-secondary hover:text-text-primary transition-colors duration-300 text-sm font-medium flex items-center gap-1"
                    >
                      {item.name}
                      <ChevronDown size={16} className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 bg-dark-surface border border-dark-border rounded-xl shadow-xl overflow-hidden min-w-[200px]"
                        >
                          {item.submenu.map((subItem) => (
                            <button
                              key={subItem.name}
                              onClick={() => {
                                scrollToSection(subItem.href);
                                setActiveDropdown(null);
                              }}
                              className="block w-full text-left px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-dark-elevated transition-colors duration-200 text-sm"
                            >
                              {subItem.name}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <motion.button
                    onClick={() => scrollToSection(item.href)}
                    className="text-text-secondary hover:text-text-primary transition-colors duration-300 text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.button>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-text-primary hover:text-accent-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark-surface border-b border-dark-border"
          >
            <div className="container-custom py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="flex items-center justify-between w-full text-left text-text-secondary hover:text-text-primary transition-colors duration-300 py-2"
                      >
                        {item.name}
                        <ChevronDown size={16} className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 space-y-2 overflow-hidden"
                          >
                            {item.submenu.map((subItem) => (
                              <motion.button
                                key={subItem.name}
                                onClick={() => {
                                  scrollToSection(subItem.href);
                                  setIsOpen(false);
                                  setActiveDropdown(null);
                                }}
                                className="block w-full text-left text-text-secondary hover:text-text-primary transition-colors duration-300 py-2 text-sm"
                                whileHover={{ x: 10 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                {subItem.name}
                              </motion.button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.button
                      onClick={() => {
                        scrollToSection(item.href);
                        setIsOpen(false);
                      }}
                      className="block w-full text-left text-text-secondary hover:text-text-primary transition-colors duration-300 py-2"
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                    </motion.button>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
