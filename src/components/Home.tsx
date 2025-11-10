'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Quote, Star, BookOpen, FileText, Users, Presentation } from 'lucide-react';

const evaluations = [
  {
    name: 'Isabella M.',
    role: 'Student',
    content: "Ms. Irene changed my vision about grammar and writing because she taught me with love, and the Holy ghost company. I learned a lot with her, and I am so grateful for her. She is amazing, and she is a big example to learn another language, and how to be patient with English Students.",
    rating: 5,
  },
  {
    name: 'Sarah T.',
    role: 'Student',
    content: "Ms. Irene's teaching style is incredibly effective. I have seen a remarkable improvement in my English skills since I started learning with her.",
    rating: 5,
  },
  {
    name: 'Daniel L.',
    role: 'Student',
    content: "Learning English with Ms. Irene has been a game-changer for me. Her dedication and support have boosted my confidence in using the language.",
    rating: 5,
  },
  {
    name: 'Sarah L-M.',
    role: 'Supervisor, ELC',
    content: "Irene is an excellent teacher who believes in really teaching students. She is always willing to try new methods and activities to engage students and tries to meet the students where they are at. She follows through on her assignments and is helpful and kind to her fellow teachers.",
    rating: 5,
  },
  {
    name: 'Jessica M.',
    role: 'Trainer & Mentor',
    content: "Irene is a confident, friendly, and imaginative teacher of ESL. She thinks of things to do with her students that are outside the usual classroom activities, but that still contribute to their learning and practice of the language. I have often been amazed at her creativity. She gives lots of positive feedback, consistently calls her students by name, monitors well, and uses gestures creatively to help her students understand what she expects of them. She carefully plans lessons, understands cultural differences, and is loved by her students.",
    rating: 5,
  },
];

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
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="bg-dark-elevated p-4 rounded-2xl border border-dark-border">
                <Sparkles className="w-8 h-8 text-accent-primary" />
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
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
              transition={{ duration: 0.8, delay: 0.5 }}
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
                  setActivePage('about');
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
              className="card-dark text-center group cursor-pointer min-h-[200px] flex flex-col items-center justify-center"
              aria-label="View Teaching Philosophy"
            >
              <div className="mb-4">
                <div className="w-16 h-16 bg-accent-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-accent-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold group-hover:text-accent-primary transition-colors duration-300">
                Teaching Philosophy
              </h3>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="card-dark text-center group cursor-pointer min-h-[200px] flex flex-col items-center justify-center"
              aria-label="View Lesson Plans and Syllabi"
            >
              <div className="mb-4">
                <div className="w-16 h-16 bg-accent-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-accent-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold group-hover:text-accent-primary transition-colors duration-300">
                Lesson Plans & Syllabi
              </h3>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="card-dark text-center group cursor-pointer min-h-[200px] flex flex-col items-center justify-center"
              aria-label="View Case Studies"
            >
              <div className="mb-4">
                <div className="w-16 h-16 bg-accent-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-accent-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold group-hover:text-accent-primary transition-colors duration-300">
                Case Studies
              </h3>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="card-dark text-center group cursor-pointer min-h-[200px] flex flex-col items-center justify-center"
              aria-label="View Presentations and Publications"
            >
              <div className="mb-4">
                <div className="w-16 h-16 bg-accent-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Presentation className="w-8 h-8 text-accent-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold group-hover:text-accent-primary transition-colors duration-300">
                Presentations & Publications
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

      {/* Evaluations Section */}
      <div className="section-padding bg-dark-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">Evaluations</span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-8">
            {evaluations.map((evaluation, index) => (
              <motion.div
                key={evaluation.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-dark-bg border border-dark-border rounded-2xl p-6 md:p-8"
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-accent-primary opacity-50" />
                </div>

                {/* Content */}
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  {evaluation.content}
                </p>

                {/* Author */}
                <div className="flex items-center justify-between pt-4 border-t border-dark-border">
                  <div>
                    <div className="font-bold text-text-primary text-lg">
                      {evaluation.name}
                    </div>
                    <div className="text-sm text-text-tertiary">{evaluation.role}</div>
                  </div>
                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(evaluation.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-accent-primary text-accent-primary"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-accent-primary text-2xl font-bold">
              Start Your Language Journey Now
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
