'use client';

import { Heart } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { href: 'https://www.linkedin.com/in/vidya-irene-584680a6/', label: 'LinkedIn' },
];

const footerLinks = [
  { title: 'Resume', page: 'resume', href: '/resume', isExternal: true },
];

interface FooterProps {
  setActivePage: (page: string) => void;
}

export default function Footer({ setActivePage }: FooterProps) {
  const currentYear = new Date().getFullYear();

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
                <Link
                  key={link.title}
                  href={link.href}
                  target={link.isExternal ? '_blank' : undefined}
                  rel={link.isExternal ? 'noopener noreferrer' : undefined}
                  className="block text-text-secondary hover:text-accent-primary transition-colors duration-300 text-sm text-left py-2 min-h-[44px]"
                  aria-label={`Navigate to ${link.title}`}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-text-secondary hover:text-accent-primary transition-colors duration-300 text-sm text-left py-2 min-h-[44px]"
                  aria-label={`Visit ${social.label} profile`}
                >
                  {social.label}
                </a>
              ))}
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
