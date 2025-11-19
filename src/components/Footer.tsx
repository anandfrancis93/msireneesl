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
    <footer className="bg-editorial-bg border-t border-editorial-border pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-serif font-bold text-editorial-navy mb-6">Ms. Irene</h3>
            <p className="text-editorial-subtext text-sm leading-relaxed max-w-xs">
              Dedicated ESL instructor empowering students to achieve language proficiency and unlock new opportunities through communicative and task-based learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-editorial-navy mb-6">Quick Links</h4>
            <div className="space-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  target={link.isExternal ? '_blank' : undefined}
                  rel={link.isExternal ? 'noopener noreferrer' : undefined}
                  className="block text-editorial-subtext hover:text-editorial-navy hover:translate-x-1 transition-all duration-300 text-sm"
                  aria-label={`Navigate to ${link.title}`}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-serif text-lg text-editorial-navy mb-6">Connect</h4>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-editorial-subtext hover:text-editorial-navy hover:translate-x-1 transition-all duration-300 text-sm"
                  aria-label={`Visit ${social.label} profile`}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-editorial-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-editorial-subtext uppercase tracking-widest">
            <p className="flex items-center gap-1">
              © {currentYear} Ms. Irene. Teaching with{' '}
              <Heart size={12} className="text-editorial-accent fill-current" /> and dedication
            </p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
