'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, BookOpen, Image as ImageIcon } from 'lucide-react';

const educationCourses = {
  education: [
    'EDU 212: Foundations of Education',
    'EDU 200: Human Growth and Learning in Schools',
    'EDU 340: Multiculturalism and Culturally Responsive Teaching Through Sheltered Instruction',
    'EDU 305: Computer and Technology Assisted Instruction',
    'EDU 312: Effective Pedagogy',
    'EDU 385: Education Assessment in the Classroom',
  ],
  tesol: [
    'TESOL 240: Introduction to TESOL',
    'TESOL 310: TESOL Principles and Methods',
    'TESOL 328: Teaching Reading',
    'TESOL 327: Teaching Speaking',
    'TESOL 426: Teaching Grammar',
    'TESOL 425: Teaching Vocabulary',
    'TESOL 405: Technology Assisted Language Instruction',
  ],
  psychology: [
    'PSYC 111: General Psychology',
    'PSYC 340: Community Mental Health',
    'PSYC 341: Personality',
  ],
};

export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-dark-bg">
      <div className="container-custom" ref={ref}>
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
            Finding Inspiration in Every Turn
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <p className="text-text-secondary text-lg leading-relaxed mb-6">
            My name is Irene. I am from New Delhi, India. I'm married and my husband is from Nepal. I have over 13 years of work experience in Administration, Customer Service, Training, and ESL Teaching. I have traveled to different countries teaching students and prospective ESL Teachers. I currently live in the USA; where I am studying to be a trained TESOL teacher.
          </p>
        </motion.div>

        {/* My Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">My Story</h3>

          <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
            <p>
              Growing up in India, I, Irene, always had a fascination with languages and the connections they foster. In a country as diverse as India, where languages and cultures intersect at every turn, I developed a deep appreciation for communication and its power to bring people together. My journey to becoming an ESL teacher was not linear, but it was driven by my unwavering desire to help others find their voice in a globalized world.
            </p>

            <p>
              After completing my education in India, I started my career in corporate roles, including customer service and sales management. These positions taught me the value of clear communication and understanding cultural nuances. However, I felt a pull toward a profession that would allow me to make a more direct impact on individuals' lives. That calling led me to teaching, and I began as an instructor at Manipal Institute of Computer Education in Goa. It was during this time that I discovered my passion for education.
            </p>

            <p>
              In 2013, I joined Inlingua, a language school, as an English instructor, marking my formal entry into the world of language teaching. Teaching English opened my eyes to the challenges learners face when navigating a new language and culture. I found immense satisfaction in helping my students overcome those barriers and achieve their goals. Yet, I wanted to expand my horizons further and develop my skills on an international scale.
            </p>

            <p>
              In 2017, I moved to the United States to pursue higher education and broaden my teaching experience. My time at Brigham Young University-Hawaii proved pivotal. While completing my studies, I worked as an ESL tutor and teaching assistant, honing my expertise and gaining deeper insights into pedagogical strategies. I also had the opportunity to serve as the President of the BYU-Hawaii TESOL Society, where I collaborated with peers to promote best practices in language instruction.
            </p>

            <p>
              Teaching adults at the US Ling Institute and other institutions further enriched my journey, exposing me to learners from diverse backgrounds with unique aspirations. Each role deepened my commitment to creating inclusive and supportive learning environments. Today, as an ESL instructor at Utah Valley University and Brigham Young University-Provo, I feel incredibly grateful for how far I have come.
            </p>

            <p>
              What started as a fascination with language in India has transformed into a meaningful career that spans continents. My journey from India to becoming an ESL teacher has not only shaped my professional identity but also affirmed my belief in the power of education to change lives. I am proud to help my students find their voice, just as I found mine in this incredible journey.
            </p>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Education</h3>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-accent-primary/10 px-6 py-3 rounded-full border border-accent-primary/20">
              <GraduationCap className="w-5 h-5 text-accent-primary" />
              <span className="text-text-primary font-semibold">Bachelor - Course Work</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Education Classes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="card-dark"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent-primary/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-accent-primary" />
                </div>
                <h4 className="text-xl font-bold">Education Classes</h4>
              </div>
              <ul className="space-y-3">
                {educationCourses.education.map((course, index) => (
                  <li key={index} className="text-text-secondary text-sm leading-relaxed">
                    {course}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* TESOL Classes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="card-dark"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent-primary/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-accent-primary" />
                </div>
                <h4 className="text-xl font-bold">TESOL Classes</h4>
              </div>
              <ul className="space-y-3">
                {educationCourses.tesol.map((course, index) => (
                  <li key={index} className="text-text-secondary text-sm leading-relaxed">
                    {course}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Psychology Classes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="card-dark"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent-primary/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-accent-primary" />
                </div>
                <h4 className="text-xl font-bold">Psychology Classes</h4>
              </div>
              <ul className="space-y-3">
                {educationCourses.psychology.map((course, index) => (
                  <li key={index} className="text-text-secondary text-sm leading-relaxed">
                    {course}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                className="aspect-square bg-dark-surface border border-dark-border rounded-2xl flex items-center justify-center hover:bg-dark-elevated transition-colors duration-300 cursor-pointer group"
              >
                <ImageIcon className="w-12 h-12 text-text-tertiary group-hover:text-accent-primary transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
          <p className="text-center text-text-tertiary text-sm mt-6">
            Gallery images coming soon
          </p>
        </motion.div>
      </div>
    </section>
  );
}
