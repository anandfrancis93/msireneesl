'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, BookOpen, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-dark-bg">
      <div className="container-custom" ref={ref}>
        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <button
            onClick={() => {
              const element = document.getElementById('about-me');
              element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="btn-secondary inline-flex items-center justify-center"
            aria-label="Jump to About Me section"
          >
            About Me
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('teaching-philosophy');
              element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="btn-secondary inline-flex items-center justify-center"
            aria-label="Jump to Teaching Philosophy & Approach section"
          >
            Teaching Philosophy & Approach
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('highlights');
              element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="btn-secondary inline-flex items-center justify-center"
            aria-label="Jump to Highlights / Featured Work section"
          >
            Highlights / Featured Work
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('photo-gallery');
              element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="btn-secondary inline-flex items-center justify-center"
            aria-label="Jump to Photo Gallery section"
          >
            Photo Gallery
          </button>
        </motion.div>

        {/* About Me Section */}
        <motion.div
          id="about-me"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
          style={{ scrollMarginTop: '100px' }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            About Me
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Professional Bio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-2 space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">Professional Bio</h3>
                <p className="text-text-secondary leading-relaxed">
                  My name is Irene. I am from New Delhi, India. I'm married and my husband is from Nepal. I have over 13 years of work experience in Administration, Customer Service, Training, and ESL Teaching. I have traveled to different countries teaching students and prospective ESL Teachers. I currently live in the USA; where I am studying to be a trained TESOL teacher.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">What This Portfolio Is About</h3>
                <p className="text-text-secondary leading-relaxed">
                  This portfolio showcases my journey as an ESL/TESOL educator, highlighting my teaching philosophy, professional development, and instructional materials. It serves as a comprehensive collection of my pedagogical approaches, lesson plans, and classroom experiences. Through this portfolio, I demonstrate my commitment to student-centered learning, cultural responsiveness, and evidence-based teaching practices that empower language learners to achieve their goals.
                </p>
              </div>
            </motion.div>

            {/* Professional Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-1"
            >
              <div className="aspect-square bg-dark-surface border border-dark-border rounded-2xl overflow-hidden relative">
                <Image
                  src="/professional-photo.avif"
                  alt="Professional photo of Ms. Irene"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Teaching Philosophy & Approach */}
        <motion.div
          id="teaching-philosophy"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto mb-20"
          style={{ scrollMarginTop: '100px' }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            Teaching Philosophy & Approach
          </h3>

          <div className="space-y-8">
            {/* Teaching Philosophy Statement */}
            <div className="card-dark">
              <h4 className="text-xl font-bold mb-4">Teaching Philosophy Statement</h4>
              <p className="text-text-secondary leading-relaxed">
                My teaching philosophy is rooted in the belief that language learning combines cognitive processes with social, emotional, and experiential journeys that enable students to connect, communicate, and excel in their personal and professional pursuits. As an ESL teacher, my main objective is to create an engaging, comprehensive, and supportive environment where students from diverse cultural and educational backgrounds can enhance their English language abilities.
              </p>
            </div>

            {/* Beliefs About Language Learning */}
            <div className="card-dark">
              <h4 className="text-xl font-bold mb-4">Beliefs About Language Learning & Learner-Centered Teaching</h4>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  I believe that effective language learning occurs when students are at the center of the instructional process. Every learner presents unique needs, skills, and experiences in the classroom, and it is essential to customize teaching strategies to address these variances. I aim to promote an environment where all students feel supported and challenged through methods like differentiated instruction, scaffolding, and collaborative activities.
                </p>
                <p>
                  Understanding that language and culture are intrinsically linked, I integrate cultural awareness within language instruction. I create lessons that include cultural comparisons and discussions, encouraging students to expand their perspectives while respecting their cultural backgrounds. This approach promotes intercultural competence, preparing learners with the skills to navigate the cultural and social complexities of communication with both confidence and sensitivity.
                </p>
              </div>
            </div>

            {/* Key TESOL Principles */}
            <div className="card-dark">
              <h4 className="text-xl font-bold mb-4">Key TESOL Principles I Value</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h5 className="font-bold text-text-primary mb-3">Communicative Approach</h5>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    I emphasize real-world communication and functional language use, encouraging students to use English meaningfully through role-playing, discussions, and authentic interactions.
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-text-primary mb-3">Task-Based Learning</h5>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    My lessons are oriented around practical tasks that prompt students to use English in real-world situations, such as ordering food, job interviews, or group problem-solving exercises.
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-text-primary mb-3">Inclusive Practices</h5>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    I create a supportive, positive classroom environment where humor and connection are essential, encouraging students to take risks, face challenges with confidence, and learn from mistakes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Highlights / Featured Work Section */}
        <motion.div
          id="highlights"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-20"
          style={{ scrollMarginTop: '100px' }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            Highlights / Featured Work
          </h3>
          <p className="text-text-secondary text-center max-w-2xl mx-auto mb-12">
            A showcase of my best lessons, projects, and presentations that demonstrate my teaching approach and instructional design skills.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Featured Lesson Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="card-dark hover:border-accent-primary/50 transition-all duration-300"
            >
              <h4 className="text-lg font-bold mb-4">Featured Lesson Plans</h4>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Comprehensive lesson plans demonstrating communicative language teaching and task-based learning approaches for various proficiency levels.
              </p>
              <a
                href="/tesol/lesson-plans"
                className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors duration-300 text-sm font-medium"
              >
                View Lesson Plans →
              </a>
            </motion.div>

            {/* Book Reports & Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="card-dark hover:border-accent-primary/50 transition-all duration-300"
            >
              <h4 className="text-lg font-bold mb-4">TESOL Book Reports</h4>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                In-depth analysis and reflections on influential TESOL literature, demonstrating theoretical understanding and practical application.
              </p>
              <a
                href="/tesol/book-reports"
                className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors duration-300 text-sm font-medium"
              >
                View Book Reports →
              </a>
            </motion.div>

            {/* Teaching Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="card-dark hover:border-accent-primary/50 transition-all duration-300"
            >
              <h4 className="text-lg font-bold mb-4">Teaching Philosophy</h4>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Detailed philosophy statement and action research case studies showcasing my student-centered approach to language education.
              </p>
              <a
                href="/teaching-philosophy"
                className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors duration-300 text-sm font-medium"
              >
                Read More →
              </a>
            </motion.div>

            {/* Work Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="card-dark hover:border-accent-primary/50 transition-all duration-300"
            >
              <h4 className="text-lg font-bold mb-4">Professional Experience</h4>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Over 13 years of experience in ESL teaching, training, and curriculum development across multiple countries and educational contexts.
              </p>
              <a
                href="/work-experience"
                className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors duration-300 text-sm font-medium"
              >
                View Experience →
              </a>
            </motion.div>

            {/* Portfolio Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="card-dark hover:border-accent-primary/50 transition-all duration-300"
            >
              <h4 className="text-lg font-bold mb-4">Portfolio & Projects</h4>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Collection of instructional materials, presentations, and innovative teaching projects showcasing creativity and pedagogical expertise.
              </p>
              <a
                href="/portfolio"
                className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors duration-300 text-sm font-medium"
              >
                View Portfolio →
              </a>
            </motion.div>

            {/* Student Testimonials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="card-dark hover:border-accent-primary/50 transition-all duration-300"
            >
              <h4 className="text-lg font-bold mb-4">Student Testimonials</h4>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Feedback and evaluations from students highlighting the impact of my teaching methods and supportive learning environment.
              </p>
              <a
                href="/testimonials"
                className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors duration-300 text-sm font-medium"
              >
                Read Testimonials →
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Gallery Section */}
        <motion.div
          id="photo-gallery"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          style={{ scrollMarginTop: '100px' }}
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
