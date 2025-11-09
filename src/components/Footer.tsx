'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

const footerLinks = [
  { title: 'Home', page: 'home' },
  { title: 'About Me', page: 'about' },
  { title: 'TESOL', page: 'tesol' },
  { title: 'Work Experience', page: 'experience' },
  { title: 'Portfolio', page: 'portfolio' },
  { title: 'Contact', page: 'contact' },
];

interface FooterProps {
  setActivePage: (page: string) => void;
}

export default function Footer({ setActivePage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handlePageChange = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-bg border-t border-dark-border">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Ms. Irene</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Dedicated ESL instructor empowering students to achieve language proficiency and unlock new opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <button
                  key={link.title}
                  onClick={() => handlePageChange(link.page)}
                  className="block text-text-secondary hover:text-accent-primary transition-colors duration-300 text-sm text-left py-2 min-h-[44px]"
                  aria-label={`Navigate to ${link.title}`}
                >
                  {link.title}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${social.label} profile`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="min-w-[44px] min-h-[44px] w-11 h-11 bg-dark-elevated border border-dark-border rounded-xl flex items-center justify-center hover:bg-dark-hover hover:border-accent-primary transition-all duration-300"
                  >
                    <Icon size={18} className="text-text-secondary hover:text-accent-primary transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-text-tertiary">
            <p className="flex items-center gap-1">
              © {currentYear} Ms. Irene. Teaching with{' '}
              <Heart size={14} className="text-accent-primary fill-current" /> and dedication
            </p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
