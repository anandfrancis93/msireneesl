'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { GraduationCap, Award, BookOpen, Users, Globe2, Target } from 'lucide-react';

const qualifications = [
  {
    icon: GraduationCap,
    title: 'TESOL Certification',
    description: 'Certified in Teaching English to Speakers of Other Languages with specialized training in modern methodologies.',
  },
  {
    icon: Award,
    title: 'Education Degree',
    description: 'Bachelor\'s degree in Education with focus on language acquisition and pedagogical practices.',
  },
  {
    icon: BookOpen,
    title: 'Psychology Minor',
    description: 'Understanding of cognitive development and learning psychology to enhance student engagement.',
  },
  {
    icon: Users,
    title: 'Special Education Minor',
    description: 'Training in inclusive teaching practices and differentiated instruction for diverse learners.',
  },
];

const expertise = [
  {
    icon: Globe2,
    title: 'Cross-Cultural Communication',
    description: 'Expertise in teaching students from diverse cultural backgrounds and adapting teaching methods accordingly.',
  },
  {
    icon: Target,
    title: 'Curriculum Design',
    description: 'Developing comprehensive, student-centered curricula that align with language proficiency standards.',
  },
];

interface TesolProps {
  activePage: string;
}

export default function Tesol({ activePage }: TesolProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Scroll to the specific subsection when activePage changes
  useEffect(() => {
    if (activePage === 'book-reports' || activePage === 'lesson-plans' || activePage === 'test-manual') {
      setTimeout(() => {
        const element = document.getElementById(activePage);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [activePage]);

  return (
    <section className="section-padding bg-dark-surface">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">TESOL</span> Credentials
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Professional qualifications and expertise in English language teaching
          </p>
        </motion.div>

        {/* Academic Qualifications */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-bold mb-8 text-center"
          >
            Academic Credentials
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualifications.map((qual, index) => {
              const Icon = qual.icon;
              return (
                <motion.div
                  key={qual.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="card-dark text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-accent-primary/10 rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-accent-primary" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-3">{qual.title}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {qual.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Teaching Expertise */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-2xl font-bold mb-8 text-center"
          >
            Teaching Expertise
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="card-dark"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-accent-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-accent-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-text-secondary leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Philosophy Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center max-w-3xl mx-auto">
            <BookOpen className="w-12 h-12 text-accent-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-6">Teaching Philosophy</h3>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              "Language learning is the bridge that connects cultures, unlocks opportunities,
              and allows us to see the world through new perspectives."
            </p>
            <p className="text-text-secondary leading-relaxed">
              With over a decade of experience and comprehensive training in TESOL, Education,
              Psychology, and Special Education, I am committed to creating inclusive, engaging,
              and effective learning environments where every student can thrive and achieve their
              language learning goals.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Book Reports Section */}
      <div id="book-reports" className="section-padding bg-dark-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Book <span className="gradient-text">Reports</span>
            </h2>
            <p className="text-2xl font-semibold text-text-primary mb-4">
              My Journey with Books
            </p>
            <p className="text-text-secondary max-w-3xl mx-auto text-lg leading-relaxed">
              Explore a collection of captivating book reports that have inspired me during my TESOL Journey. Each book holds a special place in my heart and teaching philosophy. Join me in delving into the world of English language learning through the lens of these remarkable stories.
            </p>
          </motion.div>

          {/* Main Book Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-5xl mx-auto mb-16"
          >
            <div className="card-dark">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-accent-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-8 h-8 text-accent-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Reading in a Second Language</h3>
                  <p className="text-text-secondary mb-1">William Grabe</p>
                  <p className="text-accent-primary text-sm font-medium">Interactive synthesis by Vidya Irene</p>
                  <p className="text-text-tertiary text-sm">MA TESOL | LING 670 / Brigham Young University</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <button className="btn-secondary text-sm py-3">
                  Foundations of Reading
                </button>
                <button className="btn-secondary text-sm py-3">
                  Patterns of Variation in Reading
                </button>
                <button className="btn-secondary text-sm py-3">
                  Developing Reading Comprehension Abilities
                </button>
                <button className="btn-secondary text-sm py-3">
                  Expanding Reading Comprehension Skills
                </button>
                <button className="btn-secondary text-sm py-3">
                  Applications of Reading Research
                </button>
                <button className="btn-primary text-sm py-3">
                  View Full Report
                </button>
              </div>
            </div>
          </motion.div>

          {/* Detailed Book Report */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-dark-surface border border-dark-border rounded-2xl p-8 md:p-12 space-y-10">
              {/* Book Report Header */}
              <div className="border-b border-dark-border pb-6">
                <h3 className="text-3xl font-bold mb-3">Book Report</h3>
                <h4 className="text-2xl font-semibold text-accent-primary mb-2">
                  Reading in a Second Language — Part I: Foundations of Reading
                </h4>
                <p className="text-text-secondary mb-4">by William Grabe • Simple, classroom-focused summary for my portfolio</p>

                <div className="flex flex-wrap gap-2 text-sm">
                  <a href="#introduction" className="text-accent-primary hover:underline">Introduction</a>
                  <span className="text-text-tertiary">•</span>
                  <a href="#key-theories" className="text-accent-primary hover:underline">Key Theories & Findings</a>
                  <span className="text-text-tertiary">•</span>
                  <a href="#major-themes" className="text-accent-primary hover:underline">Major Themes & Findings</a>
                  <span className="text-text-tertiary">•</span>
                  <a href="#classroom-applications" className="text-accent-primary hover:underline">Classroom Applications</a>
                  <span className="text-text-tertiary">•</span>
                  <a href="#teacher-toolkit" className="text-accent-primary hover:underline">Teacher Toolkit</a>
                  <span className="text-text-tertiary">•</span>
                  <a href="#reflection" className="text-accent-primary hover:underline">Reflection</a>
                  <span className="text-text-tertiary">•</span>
                  <a href="#extras" className="text-accent-primary hover:underline">Extras</a>
                </div>
              </div>

              {/* Introduction */}
              <div id="introduction">
                <h5 className="text-xl font-bold text-accent-primary mb-4">Introduction</h5>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    Part I lays the foundation for how second‑language reading actually works. The big idea: skilled reading is complex, goal‑driven, and shaped by context. Students read for different purposes (learn, compare, evaluate, apply), and those purposes change what good reading looks like. That's why effective instruction flexes to learner needs, text types, and program goals.
                  </p>
                  <p>
                    Academic reading especially asks for more than "getting the gist." Learners often need to track main ideas, follow arguments, synthesize multiple sources, and use information in new tasks. This part of the book explains the systems that make that possible.
                  </p>
                </div>
              </div>

              {/* Key Theories & Findings */}
              <div id="key-theories">
                <h5 className="text-xl font-bold text-accent-primary mb-4">Key Theories & Findings</h5>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-accent-primary mt-1">•</span>
                    <p className="text-text-secondary"><strong className="text-text-primary">Automatic word recognition matters.</strong> Fluent readers build a huge sight vocabulary through lots of meaningful exposure. Repeated encounters and decoding knowledge make recognition fast and effortless over time.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-primary mt-1">•</span>
                    <p className="text-text-secondary"><strong className="text-text-primary">Comprehension is built step‑by‑step.</strong> Readers link each new phrase to what came before and to what they already know. Most of this happens automatically; conscious strategies kick in when the text is tough or the task is demanding.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-primary mt-1">•</span>
                    <p className="text-text-secondary"><strong className="text-text-primary">Two products of understanding.</strong> Readers form a text representation (what the text says) and sometimes a richer situation model (how it connects to goals and prior knowledge). Different genres and tasks emphasize one or both.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-primary mt-1">•</span>
                    <p className="text-text-secondary"><strong className="text-text-primary">General learning systems drive progress.</strong> Implicit learning, frequency effects, chunking, working memory, and long‑term knowledge all support reading growth and automaticity.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-primary mt-1">•</span>
                    <p className="text-text-secondary"><strong className="text-text-primary">Neurocognitive view.</strong> Reading relies on distributed networks that connect visual word forms with sound, meaning, attention, and control. Automaticity comes from practice that wires these systems together.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-primary mt-1">•</span>
                    <p className="text-text-secondary"><strong className="text-text-primary">Organizing models.</strong> Frameworks like the Simple View, Construction‑Integration, Landscape Model, Lexical Quality/Word‑to‑Text Integration, and Reading Systems Framework explain different parts of how comprehension emerges.</p>
                  </li>
                </ul>
              </div>

              {/* Major Themes & Findings */}
              <div id="major-themes">
                <h5 className="text-xl font-bold text-accent-primary mb-4">Major Themes & Findings</h5>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-accent-primary mt-1">•</span>
                    <p className="text-text-secondary"><strong className="text-text-primary">Purpose first.</strong> Clarifying the goal of a task improves performance and strategy choice.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-primary mt-1">•</span>
                    <p className="text-text-secondary"><strong className="text-text-primary">Automaticity is powerful.</strong> Much comprehension is fast and memory‑driven; instruction should respect and build it.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-primary mt-1">•</span>
                    <p className="text-text-secondary"><strong className="text-text-primary">Exposure fuels growth.</strong> Massive, meaningful reading builds vocabulary depth, fluency, and better parsing.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-primary mt-1">•</span>
                    <p className="text-text-secondary"><strong className="text-text-primary">Build the text representation.</strong> For academic texts, help learners track structure (claims, support, discourse signals) before asking for interpretation or critique.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-primary mt-1">•</span>
                    <p className="text-text-secondary"><strong className="text-text-primary">Cognition matters.</strong> Attention, working memory, and background knowledge are part of the picture—not just language rules.</p>
                  </li>
                </ul>
              </div>

              {/* Classroom Applications */}
              <div id="classroom-applications">
                <h5 className="text-xl font-bold text-accent-primary mb-4">Classroom Applications</h5>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-accent-primary mt-1">1.</span>
                    <p className="text-text-secondary"><strong className="text-text-primary">Make goals explicit.</strong> State the reading purpose (e.g., learn main ideas, compare sources, evaluate evidence) so students choose appropriate strategies.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-primary mt-1">2.</span>
                    <p className="text-text-secondary"><strong className="text-text-primary">Front‑load coherence.</strong> Use short previews, key terms, and guiding questions to connect prior knowledge with the text.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-primary mt-1">3.</span>
                    <p className="text-text-secondary"><strong className="text-text-primary">Work the structure.</strong> Have students find the claim, underline support, and mark transitions before higher‑level synthesis.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-primary mt-1">4.</span>
                    <p className="text-text-secondary"><strong className="text-text-primary">Lean on ease + repetition.</strong> Extensive reading, rereading, and quick retells build speed and confidence.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-primary mt-1">5.</span>
                    <p className="text-text-secondary"><strong className="text-text-primary">Blend implicit + explicit.</strong> Let wide reading do the heavy lifting, but model strategies when sections are hard.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-primary mt-1">6.</span>
                    <p className="text-text-secondary"><strong className="text-text-primary">Assess what you teach.</strong> Align tasks with the stated purpose so success is visible and fair.</p>
                  </li>
                </ul>
              </div>

              {/* Teacher Toolkit */}
              <div id="teacher-toolkit">
                <h5 className="text-xl font-bold text-accent-primary mb-4">Teacher Toolkit</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-dark-bg p-4 rounded-xl border border-dark-border">
                    <h6 className="font-semibold text-text-primary mb-2">Goal cards (20 seconds)</h6>
                    <p className="text-text-secondary text-sm">At the top of each reading, learners choose/annotate a goal: learn, compare, evaluate, apply.</p>
                  </div>
                  <div className="bg-dark-bg p-4 rounded-xl border border-dark-border">
                    <h6 className="font-semibold text-text-primary mb-2">Preview strips</h6>
                    <p className="text-text-secondary text-sm">One page with headings, 3 key terms, and 3 guiding statements to confirm/deny while reading.</p>
                  </div>
                  <div className="bg-dark-bg p-4 rounded-xl border border-dark-border">
                    <h6 className="font-semibold text-text-primary mb-2">Semantic maps</h6>
                    <p className="text-text-secondary text-sm">Link new terms to known ideas to reduce inferencing load during reading.</p>
                  </div>
                  <div className="bg-dark-bg p-4 rounded-xl border border-dark-border">
                    <h6 className="font-semibold text-text-primary mb-2">Fluency loops</h6>
                    <p className="text-text-secondary text-sm">Timed re‑reads of short, easier texts + quick retells to consolidate ideas.</p>
                  </div>
                  <div className="bg-dark-bg p-4 rounded-xl border border-dark-border">
                    <h6 className="font-semibold text-text-primary mb-2">Strategy hotspots</h6>
                    <p className="text-text-secondary text-sm">Pause at tough paragraphs to model micro‑inferences and monitoring.</p>
                  </div>
                  <div className="bg-dark-bg p-4 rounded-xl border border-dark-border">
                    <h6 className="font-semibold text-text-primary mb-2">Discourse noticing</h6>
                    <p className="text-text-secondary text-sm">Mark transitions and claim‑evidence patterns to strengthen text representation.</p>
                  </div>
                </div>
              </div>

              {/* Reflection */}
              <div id="reflection">
                <h5 className="text-xl font-bold text-accent-primary mb-4">Reflection</h5>
                <p className="text-text-secondary leading-relaxed">
                  Reading in another language is a system, not a single skill. The balance that works for me: set clear goals, build lots of easy, meaningful reading to grow automaticity, and teach targeted strategies only where the text gets tough. That mix respects what the mind already does well while giving students practical tools they can see.
                </p>
              </div>

              {/* Extras */}
              <div id="extras">
                <h5 className="text-xl font-bold text-accent-primary mb-4">Extras</h5>
                <div className="space-y-3 text-text-secondary">
                  <p><strong className="text-text-primary">Mini‑glossary:</strong> text representation (what the text says), situation model (how it connects to your goals/knowledge), lexical quality (how well you know a word's form/meaning/connections).</p>
                  <p><strong className="text-text-primary">Chapters covered in Part I:</strong> 1–6 (word recognition, comprehension processes, cognition, neurocognition, big models).</p>
                  <p><strong className="text-text-primary">Re‑use tip:</strong> Keep the 7‑section order so your future parts match this style on your site.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lesson Plans Section */}
      <div id="lesson-plans" className="section-padding bg-dark-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Lesson <span className="gradient-text">Plans</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              Detailed lesson plans and teaching materials for ESL instruction
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="card-dark text-center py-20">
              <Target className="w-16 h-16 text-accent-primary mx-auto mb-6" />
              <p className="text-text-secondary text-lg">
                Lesson plans content coming soon
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Test Technical Manual Section */}
      <div id="test-manual" className="section-padding bg-dark-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Test <span className="gradient-text">Technical Manual</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              Technical documentation and guidelines for ESL testing and assessment
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="card-dark text-center py-20">
              <GraduationCap className="w-16 h-16 text-accent-primary mx-auto mb-6" />
              <p className="text-text-secondary text-lg">
                Test technical manual content coming soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
