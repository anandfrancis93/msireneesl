'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';

const navItems = [
  { name: 'Home', page: 'home', href: '/home' },
  { name: 'About Me', page: 'about-me', href: '/about-me' },
  {
    name: 'More',
    page: 'more',
    href: '#',
    submenu: [
      { name: 'TESOL', page: 'tesol', href: '/tesol' },
      { name: 'Book Reports', page: 'book-reports', href: '/tesol/book-reports' },
      { name: 'Lesson Plans', page: 'lesson-plans', href: '/tesol/lesson-plans' },
      { name: 'Test Technical Manual', page: 'test-manual', href: '/tesol#test-manual' },
      { name: 'Work Experience', page: 'work-experience', href: '/work-experience' },
      { name: 'Portfolio', page: 'portfolio', href: '/portfolio' },
      { name: 'Blog', page: 'blog', href: '/blog' },
      { name: 'Testimonials', page: 'testimonials', href: '/testimonials' },
      { name: 'Contact', page: 'contactus', href: '/contactus' },
    ]
  },
];

interface NavigationProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export default function Navigation({ activePage, setActivePage }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePageChange = (page: string) => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-editorial-bg/95 backdrop-blur-md border-b border-editorial-border py-2'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-serif font-bold text-editorial-navy tracking-tight"
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
                      className={`transition-all duration-300 text-sm font-medium flex items-center gap-1 tracking-wide ${activePage === item.page || item.submenu.some(sub => sub.page === activePage)
                          ? 'text-editorial-navy'
                          : 'text-editorial-subtext hover:text-editorial-navy'
                        }`}
                      aria-label={`${item.name} menu`}
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === item.name}
                    >
                      {item.name}
                      <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute top-full mt-4 bg-white border border-editorial-border shadow-xl min-w-[220px] py-2 ${item.name === 'More' ? 'right-0' : 'left-0'
                            }`}
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => handlePageChange(subItem.page)}
                              className={`block w-full text-left px-6 py-2.5 transition-colors duration-200 text-sm font-medium ${activePage === subItem.page
                                  ? 'text-editorial-navy bg-editorial-bg'
                                  : 'text-editorial-subtext hover:text-editorial-navy hover:bg-editorial-bg'
                                }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                          {item.name === 'More' && (
                            <button
                              onClick={() => {
                                toggleTheme();
                                setActiveDropdown(null);
                              }}
                              className="block w-full text-left px-6 py-2.5 transition-colors duration-200 text-sm font-medium text-editorial-subtext hover:text-editorial-navy hover:bg-editorial-bg border-t border-editorial-border mt-2 pt-3"
                            >
                              {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
                            </button>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => handlePageChange(item.page)}
                    className={`transition-all duration-300 text-sm font-medium tracking-wide relative group ${activePage === item.page
                        ? 'text-editorial-navy'
                        : 'text-editorial-subtext hover:text-editorial-navy'
                      }`}
                    aria-label={`Navigate to ${item.name}`}
                    aria-current={activePage === item.page ? 'page' : undefined}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 w-full h-px bg-editorial-accent transform origin-left transition-transform duration-300 ${activePage === item.page ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                  </Link>
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
            className="md:hidden p-2 text-editorial-navy hover:text-editorial-accent transition-colors"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
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
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-editorial-bg fixed inset-0 top-[60px] z-40 overflow-y-auto"
          >
            <div className="container-custom py-8 space-y-6">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-editorial-border pb-4 last:border-0">
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className={`flex items-center justify-between w-full text-left text-xl font-serif ${activePage === item.page || item.submenu.some(sub => sub.page === activePage)
                            ? 'text-editorial-navy'
                            : 'text-editorial-subtext'
                          }`}
                      >
                        {item.name}
                        <ChevronDown size={20} className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 mt-4 space-y-4 border-l border-editorial-border ml-2"
                          >
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                onClick={() => handlePageChange(subItem.page)}
                                className={`block text-base ${activePage === subItem.page
                                    ? 'text-editorial-navy font-medium'
                                    : 'text-editorial-subtext'
                                  }`}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => handlePageChange(item.page)}
                      className={`block text-xl font-serif ${activePage === item.page
                          ? 'text-editorial-navy'
                          : 'text-editorial-subtext'
                        }`}
                    >
                      {item.name}
                    </Link>
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
