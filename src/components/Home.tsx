'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, FileText, Briefcase, User } from 'lucide-react';

interface HomeProps {
  setActivePage: (page: string) => void;
}

export default function Home({ setActivePage }: HomeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-accent-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center space-y-8">
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
                Welcome to
              </h1>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold gradient-text">
                Ms. Irene's Portfolio
              </h2>
            </motion.div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto"
            >
              ESL Instructor, Trainer, Researcher and a Lifelong Learner.
            </motion.p>
          </div>
        </div>
      </div>

      {/* About Me Content */}
      <div className="section-padding bg-dark-bg" ref={ref}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              Experienced ESL Teacher & Language Expert
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-secondary text-lg leading-relaxed"
            >
              I am a dedicated professional with extensive experience in education, language instruction, and customer service. With academic credentials in TESOL, Education, and minors in Psychology and Special Education, I have consistently demonstrated a strong commitment to creating inclusive and effective learning environments. Over the years, I have honed my expertise in teaching English as a Second Language (ESL) through roles at institutions like Brigham Young University and Utah Valley University, as well as through international teaching experiences spanning more than a decade.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex justify-center"
            >
              <button
                onClick={() => {
                  setActivePage('about-me');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn-primary"
                aria-label="Learn more about Ms. Irene"
              >
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* TESOL & ME Section */}
      <div className="section-padding bg-dark-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">TESOL & ME</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              onClick={() => {
                setActivePage('about-me');
                window.location.href = '/about-me';
              }}
              className="card-dark text-center group cursor-pointer min-h-[200px] flex flex-col items-center justify-center"
              aria-label="View About Me"
            >
              <div className="mb-4">
                <div className="w-16 h-16 bg-accent-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <User className="w-8 h-8 text-accent-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold group-hover:text-accent-primary transition-colors duration-300">
                About Me
              </h3>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              onClick={() => {
                window.location.href = '/teaching-curriculum';
              }}
              className="card-dark text-center group cursor-pointer min-h-[200px] flex flex-col items-center justify-center"
              aria-label="View Teaching & Curriculum Practice"
            >
              <div className="mb-4">
                <div className="w-16 h-16 bg-accent-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-accent-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold group-hover:text-accent-primary transition-colors duration-300">
                Teaching & Curriculum Practice
              </h3>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              onClick={() => {
                window.location.href = '/research-scholarship';
              }}
              className="card-dark text-center group cursor-pointer min-h-[200px] flex flex-col items-center justify-center"
              aria-label="View Research, Assessment & Scholarship"
            >
              <div className="mb-4">
                <div className="w-16 h-16 bg-accent-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-accent-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold group-hover:text-accent-primary transition-colors duration-300">
                Research, Assessment & Scholarship
              </h3>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              onClick={() => {
                window.location.href = '/professional-experience';
              }}
              className="card-dark text-center group cursor-pointer min-h-[200px] flex flex-col items-center justify-center"
              aria-label="View Professional Experience & Development"
            >
              <div className="mb-4">
                <div className="w-16 h-16 bg-accent-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-8 h-8 text-accent-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold group-hover:text-accent-primary transition-colors duration-300">
                Professional Experience & Development
              </h3>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Quote and Additional Content */}
      <div className="section-padding bg-dark-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border-l-4 border-accent-primary bg-dark-elevated p-6 rounded-r-xl my-8"
            >
              <p className="text-text-primary italic text-lg leading-relaxed">
                "Language learning is the bridge that connects cultures, unlocks opportunities, and allows us to see the world through new perspectives."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Experienced ESL Teacher
              </h3>
              <p className="text-text-secondary text-lg leading-relaxed">
                Passionate ESL teacher dedicated to helping students achieve language proficiency. With over 10 years of experience, I have taught English to diverse groups of students from various cultural backgrounds. My teaching approach focuses on interactive and engaging methods to make learning enjoyable and effective. I am committed to creating a supportive and inclusive learning environment where students feel motivated to succeed. Let's embark on this language learning journey together!
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Start Your Language Journey Section */}
      <div className="section-padding bg-dark-surface">
        <div className="container-custom">
          {/* CTA Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-accent-primary text-2xl font-bold">
              Start Your Language Journey Now
            </p>
          </motion.div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* English Tutoring */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="card-dark text-center flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-3">English Tutoring</h3>
              <p className="text-text-secondary mb-6 flex-1">
                Unlock the Power of English
              </p>
              <div className="mb-6">
                <p className="text-4xl font-bold text-accent-primary">$50</p>
              </div>
              <button
                className="btn-primary w-full"
                aria-label="Book English Tutoring session"
              >
                Book Now
              </button>
            </motion.div>

            {/* Conversation Class */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="card-dark text-center flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-3">Conversation Class</h3>
              <p className="text-text-secondary mb-6 flex-1">
                Engage with English
              </p>
              <div className="mb-6">
                <p className="text-4xl font-bold text-accent-primary">$30</p>
              </div>
              <button
                className="btn-primary w-full"
                aria-label="Book Conversation Class session"
              >
                Book Now
              </button>
            </motion.div>

            {/* Skill Building Course */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="card-dark text-center flex flex-col relative"
            >
              {/* Ended Badge */}
              <div className="absolute top-4 right-4 bg-text-tertiary px-3 py-1 rounded-full text-xs text-dark-bg font-medium">
                Ended
              </div>
              <h3 className="text-2xl font-bold mb-3">Skill Building Course</h3>
              <p className="text-text-secondary mb-6 flex-1">
                From Novice to Natural
              </p>
              <div className="mb-6">
                <p className="text-4xl font-bold text-accent-primary">$150</p>
              </div>
              <button
                className="btn-secondary w-full"
                aria-label="View Skill Building Course details"
              >
                View Course
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
