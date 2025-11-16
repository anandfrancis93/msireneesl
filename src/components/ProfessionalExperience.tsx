'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Users, Award, FileDown, Mail, Linkedin } from 'lucide-react';

export default function ProfessionalExperience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-dark-bg min-h-screen" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Professional Experience & <span className="gradient-text">Development</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            A comprehensive overview of my professional roles, development, and contributions to the field
          </p>
        </motion.div>

        {/* TESOL-Related Roles Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-accent-primary" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">TESOL-Related Roles</h3>
          </div>

          <div className="space-y-6">
            {/* Teaching Role 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card-dark"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-accent-primary">Teaching Position Title</h4>
                  <p className="text-text-secondary">Institution Name • Location</p>
                </div>
                <p className="text-text-tertiary mt-2 md:mt-0">Year - Year</p>
              </div>
              <p className="text-text-secondary mb-3">
                Brief description of the teaching role and context
              </p>
              <div className="space-y-2 text-text-secondary">
                <p><strong className="text-text-primary">Responsibilities:</strong></p>
                <ul className="ml-6 space-y-1">
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
              className="card-dark"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-accent-primary">Tutoring Role Title</h4>
                  <p className="text-text-secondary">Institution/Organization Name • Location</p>
                </div>
                <p className="text-text-tertiary mt-2 md:mt-0">Year - Year</p>
              </div>
              <p className="text-text-secondary mb-3">
                Brief description of the tutoring role and student demographics
              </p>
              <div className="space-y-2 text-text-secondary">
                <p><strong className="text-text-primary">Responsibilities:</strong></p>
                <ul className="ml-6 space-y-1">
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
              className="card-dark"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-accent-primary">Language Center Position Title</h4>
                  <p className="text-text-secondary">Language Center Name • Location</p>
                </div>
                <p className="text-text-tertiary mt-2 md:mt-0">Year - Year</p>
              </div>
              <p className="text-text-secondary mb-3">
                Brief description of the language center work and teaching context
              </p>
              <div className="space-y-2 text-text-secondary">
                <p><strong className="text-text-primary">Responsibilities:</strong></p>
                <ul className="ml-6 space-y-1">
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
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-accent-primary" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">Other Professional Experience</h3>
          </div>

          <div className="space-y-6">
            {/* Social Work / Community Work */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="card-dark"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-accent-primary">Social Work / Community Role Title</h4>
                  <p className="text-text-secondary">Organization Name • Location</p>
                </div>
                <p className="text-text-tertiary mt-2 md:mt-0">Year - Year</p>
              </div>
              <p className="text-text-secondary mb-3">
                Brief description of social work, counseling, or community engagement role
              </p>
              <div className="space-y-2 text-text-secondary">
                <p><strong className="text-text-primary">Key Responsibilities & Transferable Skills:</strong></p>
                <ul className="ml-6 space-y-1">
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
              className="card-dark"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-accent-primary">Program Coordination / Leadership Role</h4>
                  <p className="text-text-secondary">Organization Name • Location</p>
                </div>
                <p className="text-text-tertiary mt-2 md:mt-0">Year - Year</p>
              </div>
              <p className="text-text-secondary mb-3">
                Brief description of program coordination, leadership, or event management role
              </p>
              <div className="space-y-2 text-text-secondary">
                <p><strong className="text-text-primary">Key Responsibilities & Transferable Skills:</strong></p>
                <ul className="ml-6 space-y-1">
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
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-accent-primary" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">Professional Development & Service</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Conferences, Workshops, Webinars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="card-dark"
            >
              <h4 className="text-lg font-bold text-accent-primary mb-3">Conferences, Workshops & Webinars</h4>
              <p className="text-text-secondary text-sm mb-3">
                Professional development activities attended to enhance teaching practice and stay current in the field
              </p>
              <ul className="space-y-2 text-text-secondary text-sm">
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
              className="card-dark"
            >
              <h4 className="text-lg font-bold text-accent-primary mb-3">Professional Memberships</h4>
              <p className="text-text-secondary text-sm mb-3">
                Active memberships in professional organizations and associations
              </p>
              <ul className="space-y-2 text-text-secondary text-sm">
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
              className="card-dark md:col-span-2"
            >
              <h4 className="text-lg font-bold text-accent-primary mb-3">Service & Volunteer Work</h4>
              <p className="text-text-secondary text-sm mb-3">
                Committee work, volunteer roles, curriculum projects, and community service contributions
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-text-primary font-semibold text-sm mb-2">Committee Work & Leadership</p>
                  <ul className="space-y-1 text-text-secondary text-sm">
                    <li>• Committee Name - Role (Year - Year)</li>
                    <li>• Curriculum Development Project - Role (Year)</li>
                    <li>• Program Review Committee - Member (Year)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-text-primary font-semibold text-sm mb-2">Community Service & Volunteer Roles</p>
                  <ul className="space-y-1 text-text-secondary text-sm">
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
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center">
              <FileDown className="w-6 h-6 text-accent-primary" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">CV & Contact</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Download CV */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="card-dark"
            >
              <h4 className="text-lg font-bold text-accent-primary mb-4">Download Documents</h4>
              <p className="text-text-secondary text-sm mb-4">
                Download my full curriculum vitae and résumé for a comprehensive overview of my qualifications and experience.
              </p>
              <div className="space-y-3">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <FileDown size={18} />
                  Download CV
                </a>
                <button className="btn-secondary w-full flex items-center justify-center gap-2">
                  <FileDown size={18} />
                  Download Résumé
                </button>
              </div>
            </motion.div>

            {/* Contact & Professional Profiles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="card-dark"
            >
              <h4 className="text-lg font-bold text-accent-primary mb-4">Get In Touch</h4>
              <p className="text-text-secondary text-sm mb-4">
                I'm always interested in connecting with fellow educators, researchers, and language learning professionals.
              </p>
              <div className="space-y-3">
                <a
                  href="/contactus"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <Mail size={18} />
                  Contact Form
                </a>
                <button className="btn-secondary w-full flex items-center justify-center gap-2">
                  <Linkedin size={18} />
                  LinkedIn Profile
                </button>
                <button className="btn-secondary w-full flex items-center justify-center gap-2">
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
