'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Users, Award, FileDown, Mail, Linkedin } from 'lucide-react';

export default function ProfessionalExperience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-editorial-bg min-h-screen" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 text-editorial-navy">
            Professional <span className="italic text-editorial-accent">Development</span>
          </h2>
          <p className="text-editorial-subtext max-w-2xl mx-auto text-lg leading-relaxed">
            A comprehensive overview of my professional roles, development, and contributions to the field.
          </p>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {[
            { id: 'tesol-roles', label: 'TESOL-Related Roles' },
            { id: 'other-experience', label: 'Other Experience' },
            { id: 'professional-development', label: 'Professional Development' },
            { id: 'cv-contact', label: 'CV & Contact' }
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => {
                const element = document.getElementById(btn.id);
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="px-6 py-3 border border-editorial-border text-editorial-navy hover:border-editorial-navy hover:bg-editorial-navy hover:text-white transition-all duration-300 font-serif"
            >
              {btn.label}
            </button>
          ))}
        </motion.div>

        {/* TESOL-Related Roles Section */}
        <motion.div
          id="tesol-roles"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-24"
          style={{ scrollMarginTop: '100px' }}
        >
          <h3 className="text-3xl font-serif font-bold mb-10 text-editorial-navy border-b border-editorial-border pb-4">TESOL-Related Roles</h3>

          <div className="space-y-8">
            {/* Teaching Role 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h4 className="text-xl font-serif font-bold text-editorial-navy">Teaching Position Title</h4>
                  <p className="text-editorial-subtext uppercase tracking-wider text-sm mt-1">Institution Name • Location</p>
                </div>
                <p className="text-editorial-accent font-serif italic mt-2 md:mt-0">Year - Year</p>
              </div>
              <p className="text-editorial-subtext mb-6 leading-relaxed">
                Brief description of the teaching role and context
              </p>
              <div className="space-y-3 text-editorial-subtext">
                <p><strong className="text-editorial-navy">Responsibilities:</strong></p>
                <ul className="space-y-2">
                  <li>• Placeholder for key responsibility or achievement 1</li>
                  <li>• Placeholder for key responsibility or achievement 2</li>
                  <li>• Placeholder for key responsibility or achievement 3</li>
                  <li>• Placeholder for key responsibility or achievement 4</li>
                </ul>
              </div>
            </motion.div>

            {/* Teaching Role 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h4 className="text-xl font-serif font-bold text-editorial-navy">Tutoring Role Title</h4>
                  <p className="text-editorial-subtext uppercase tracking-wider text-sm mt-1">Institution/Organization Name • Location</p>
                </div>
                <p className="text-editorial-accent font-serif italic mt-2 md:mt-0">Year - Year</p>
              </div>
              <p className="text-editorial-subtext mb-6 leading-relaxed">
                Brief description of the tutoring role and student demographics
              </p>
              <div className="space-y-3 text-editorial-subtext">
                <p><strong className="text-editorial-navy">Responsibilities:</strong></p>
                <ul className="space-y-2">
                  <li>• Placeholder for key responsibility or achievement 1</li>
                  <li>• Placeholder for key responsibility or achievement 2</li>
                  <li>• Placeholder for key responsibility or achievement 3</li>
                  <li>• Placeholder for key responsibility or achievement 4</li>
                </ul>
              </div>
            </motion.div>

            {/* Language Center Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h4 className="text-xl font-serif font-bold text-editorial-navy">Language Center Position Title</h4>
                  <p className="text-editorial-subtext uppercase tracking-wider text-sm mt-1">Language Center Name • Location</p>
                </div>
                <p className="text-editorial-accent font-serif italic mt-2 md:mt-0">Year - Year</p>
              </div>
              <p className="text-editorial-subtext mb-6 leading-relaxed">
                Brief description of the language center work and teaching context
              </p>
              <div className="space-y-3 text-editorial-subtext">
                <p><strong className="text-editorial-navy">Responsibilities:</strong></p>
                <ul className="space-y-2">
                  <li>• Placeholder for key responsibility or achievement 1</li>
                  <li>• Placeholder for key responsibility or achievement 2</li>
                  <li>• Placeholder for key responsibility or achievement 3</li>
                  <li>• Placeholder for key responsibility or achievement 4</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Other Professional Experience Section */}
        <motion.div
          id="other-experience"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-24"
          style={{ scrollMarginTop: '100px' }}
        >
          <h3 className="text-3xl font-serif font-bold mb-10 text-editorial-navy border-b border-editorial-border pb-4">Other Professional Experience</h3>

          <div className="space-y-8">
            {/* Social Work / Community Work */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h4 className="text-xl font-serif font-bold text-editorial-navy">Social Work / Community Role Title</h4>
                  <p className="text-editorial-subtext uppercase tracking-wider text-sm mt-1">Organization Name • Location</p>
                </div>
                <p className="text-editorial-accent font-serif italic mt-2 md:mt-0">Year - Year</p>
              </div>
              <p className="text-editorial-subtext mb-6 leading-relaxed">
                Brief description of social work, counseling, or community engagement role
              </p>
              <div className="space-y-3 text-editorial-subtext">
                <p><strong className="text-editorial-navy">Key Responsibilities & Transferable Skills:</strong></p>
                <ul className="space-y-2">
                  <li>• Intercultural communication and community outreach</li>
                  <li>• Mentoring and counseling diverse populations</li>
                  <li>• Documentation and case management</li>
                  <li>• Program evaluation and improvement initiatives</li>
                </ul>
              </div>
            </motion.div>

            {/* Program Coordination / Leadership */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h4 className="text-xl font-serif font-bold text-editorial-navy">Program Coordination / Leadership Role</h4>
                  <p className="text-editorial-subtext uppercase tracking-wider text-sm mt-1">Organization Name • Location</p>
                </div>
                <p className="text-editorial-accent font-serif italic mt-2 md:mt-0">Year - Year</p>
              </div>
              <p className="text-editorial-subtext mb-6 leading-relaxed">
                Brief description of program coordination, leadership, or event management role
              </p>
              <div className="space-y-3 text-editorial-subtext">
                <p><strong className="text-editorial-navy">Key Responsibilities & Transferable Skills:</strong></p>
                <ul className="space-y-2">
                  <li>• Program planning and coordination</li>
                  <li>• Leadership and team management</li>
                  <li>• Event organization and logistics</li>
                  <li>• Stakeholder communication and collaboration</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Professional Development & Service Section */}
        <motion.div
          id="professional-development"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-24"
          style={{ scrollMarginTop: '100px' }}
        >
          <h3 className="text-3xl font-serif font-bold mb-10 text-editorial-navy border-b border-editorial-border pb-4">Professional Development & Service</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Conferences, Workshops, Webinars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h4 className="text-lg font-serif font-bold text-editorial-navy mb-4">Conferences, Workshops & Webinars</h4>
              <p className="text-editorial-subtext text-sm mb-4 leading-relaxed">
                Professional development activities attended to enhance teaching practice and stay current in the field
              </p>
              <ul className="space-y-3 text-editorial-subtext text-sm">
                <li>• Conference Name - Location (Year)</li>
                <li>• Workshop Title - Institution/Organization (Year)</li>
                <li>• Webinar Series - Platform/Provider (Year)</li>
                <li>• Professional Development Event - Location (Year)</li>
              </ul>
            </motion.div>

            {/* Professional Memberships */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h4 className="text-lg font-serif font-bold text-editorial-navy mb-4">Professional Memberships</h4>
              <p className="text-editorial-subtext text-sm mb-4 leading-relaxed">
                Active memberships in professional organizations and associations
              </p>
              <ul className="space-y-3 text-editorial-subtext text-sm">
                <li>• TESOL International Association (Member since Year)</li>
                <li>• Local TESOL Organization (Member since Year)</li>
                <li>• Professional Association Name (Member since Year)</li>
                <li>• Educational Organization Name (Member since Year)</li>
              </ul>
            </motion.div>

            {/* Service & Volunteer Work */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-shadow duration-300 md:col-span-2"
            >
              <h4 className="text-lg font-serif font-bold text-editorial-navy mb-4">Service & Volunteer Work</h4>
              <p className="text-editorial-subtext text-sm mb-4 leading-relaxed">
                Committee work, volunteer roles, curriculum projects, and community service contributions
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-editorial-navy font-semibold text-sm mb-3">Committee Work & Leadership</p>
                  <ul className="space-y-2 text-editorial-subtext text-sm">
                    <li>• Committee Name - Role (Year - Year)</li>
                    <li>• Curriculum Development Project - Role (Year)</li>
                    <li>• Program Review Committee - Member (Year)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-editorial-navy font-semibold text-sm mb-3">Community Service & Volunteer Roles</p>
                  <ul className="space-y-2 text-editorial-subtext text-sm">
                    <li>• Citizenship Clinic - Volunteer Instructor (Year - Year)</li>
                    <li>• Community Tutoring Program - Volunteer (Year - Year)</li>
                    <li>• Educational Outreach - Volunteer (Year)</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CV & Contact Section */}
        <motion.div
          id="cv-contact"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mb-24"
          style={{ scrollMarginTop: '100px' }}
        >
          <h3 className="text-3xl font-serif font-bold mb-10 text-editorial-navy border-b border-editorial-border pb-4">CV & Contact</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Download CV */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h4 className="text-lg font-serif font-bold text-editorial-navy mb-4">Download Documents</h4>
              <p className="text-editorial-subtext text-sm mb-6 leading-relaxed">
                Download my full curriculum vitae and résumé for a comprehensive overview of my qualifications and experience.
              </p>
              <div className="space-y-4">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-6 py-3 bg-editorial-navy text-white hover:bg-editorial-accent transition-colors duration-300 font-medium"
                >
                  Download CV
                </a>
                <button className="w-full flex items-center justify-center px-6 py-3 border border-editorial-navy text-editorial-navy hover:bg-editorial-navy hover:text-white transition-colors duration-300 font-medium">
                  Download Résumé
                </button>
              </div>
            </motion.div>

            {/* Contact & Professional Profiles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h4 className="text-lg font-serif font-bold text-editorial-navy mb-4">Get In Touch</h4>
              <p className="text-editorial-subtext text-sm mb-6 leading-relaxed">
                I'm always interested in connecting with fellow educators, researchers, and language learning professionals.
              </p>
              <div className="space-y-4">
                <a
                  href="/contactus"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-editorial-navy text-white hover:bg-editorial-accent transition-colors duration-300 font-medium"
                >
                  <Mail size={18} />
                  Contact Form
                </a>
                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-editorial-navy text-editorial-navy hover:bg-editorial-navy hover:text-white transition-colors duration-300 font-medium">
                  <Linkedin size={18} />
                  LinkedIn Profile
                </button>
                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-editorial-navy text-editorial-navy hover:bg-editorial-navy hover:text-white transition-colors duration-300 font-medium">
                  Professional Profile
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
