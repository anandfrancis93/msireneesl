'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { BookOpen, FileText, Layers } from 'lucide-react';

type TabType = 'experience' | 'lesson-plans' | 'curriculum';

export default function TeachingCurriculum() {
  const [activeTab, setActiveTab] = useState<TabType>('experience');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  return (
    <section className="section-padding bg-editorial-bg min-h-screen" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 text-editorial-navy">
            Teaching & <span className="italic text-editorial-accent">Curriculum Practice</span>
          </h2>
          <p className="text-editorial-subtext max-w-2xl mx-auto text-lg leading-relaxed font-light">
            A comprehensive overview of my teaching experience, lesson plans, and curriculum design work
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-6 py-3 rounded-xl font-serif font-bold transition-all duration-300 ${activeTab === 'experience'
                ? 'bg-editorial-navy text-white shadow-md scale-105'
                : 'bg-white border border-editorial-border text-editorial-navy hover:border-editorial-accent hover:text-editorial-accent'
              }`}
          >
            Teaching Experience
          </button>
          <button
            onClick={() => setActiveTab('lesson-plans')}
            className={`px-6 py-3 rounded-xl font-serif font-bold transition-all duration-300 ${activeTab === 'lesson-plans'
                ? 'bg-editorial-navy text-white shadow-md scale-105'
                : 'bg-white border border-editorial-border text-editorial-navy hover:border-editorial-accent hover:text-editorial-accent'
              }`}
          >
            Lesson Plans & Materials
          </button>
          <button
            onClick={() => setActiveTab('curriculum')}
            className={`px-6 py-3 rounded-xl font-serif font-bold transition-all duration-300 ${activeTab === 'curriculum'
                ? 'bg-editorial-navy text-white shadow-md scale-105'
                : 'bg-white border border-editorial-border text-editorial-navy hover:border-editorial-accent hover:text-editorial-accent'
              }`}
          >
            Curriculum Design
          </button>
        </motion.div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {activeTab === 'experience' && (
            <motion.div
              key="experience"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center mb-10 border-b border-editorial-border pb-4">
                <BookOpen className="w-8 h-8 text-editorial-accent mr-4" />
                <h3 className="text-3xl font-serif font-bold text-editorial-navy">Teaching Experience</h3>
              </div>

              <div className="space-y-8">
                {/* Course/Context 1 */}
                <div className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300 rounded-xl">
                  <h4 className="text-2xl font-serif font-bold text-editorial-navy mb-4">Course/Context 1</h4>
                  <p className="text-editorial-subtext mb-6 leading-relaxed">
                    Brief role description placeholder - Overview of responsibilities, student demographics, and teaching context.
                  </p>
                  <div className="space-y-4 text-editorial-subtext text-sm bg-editorial-bg p-6 border-l-2 border-editorial-accent rounded-r-xl">
                    <div>
                      <strong className="text-editorial-navy font-semibold block mb-1">Sample Lesson Plans:</strong>
                      <p>Placeholder for sample lesson plan descriptions and links</p>
                    </div>
                    <div>
                      <strong className="text-editorial-navy font-semibold block mb-1">Activities & Materials:</strong>
                      <p>Placeholder for activities and teaching materials used</p>
                    </div>
                    <div>
                      <strong className="text-editorial-navy font-semibold block mb-1">Short Reflections:</strong>
                      <p>Placeholder for reflective insights and teaching outcomes</p>
                    </div>
                  </div>
                </div>

                {/* Course/Context 2 */}
                <div className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300 rounded-xl">
                  <h4 className="text-2xl font-serif font-bold text-editorial-navy mb-4">Course/Context 2</h4>
                  <p className="text-editorial-subtext mb-6 leading-relaxed">
                    Brief role description placeholder - Overview of responsibilities, student demographics, and teaching context.
                  </p>
                  <div className="space-y-4 text-editorial-subtext text-sm bg-editorial-bg p-6 border-l-2 border-editorial-accent rounded-r-xl">
                    <div>
                      <strong className="text-editorial-navy font-semibold block mb-1">Sample Lesson Plans:</strong>
                      <p>Placeholder for sample lesson plan descriptions and links</p>
                    </div>
                    <div>
                      <strong className="text-editorial-navy font-semibold block mb-1">Activities & Materials:</strong>
                      <p>Placeholder for activities and teaching materials used</p>
                    </div>
                    <div>
                      <strong className="text-editorial-navy font-semibold block mb-1">Short Reflections:</strong>
                      <p>Placeholder for reflective insights and teaching outcomes</p>
                    </div>
                  </div>
                </div>

                {/* Course/Context 3 */}
                <div className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300 rounded-xl">
                  <h4 className="text-2xl font-serif font-bold text-editorial-navy mb-4">Course/Context 3</h4>
                  <p className="text-editorial-subtext mb-6 leading-relaxed">
                    Brief role description placeholder - Overview of responsibilities, student demographics, and teaching context.
                  </p>
                  <div className="space-y-4 text-editorial-subtext text-sm bg-editorial-bg p-6 border-l-2 border-editorial-accent rounded-r-xl">
                    <div>
                      <strong className="text-editorial-navy font-semibold block mb-1">Sample Lesson Plans:</strong>
                      <p>Placeholder for sample lesson plan descriptions and links</p>
                    </div>
                    <div>
                      <strong className="text-editorial-navy font-semibold block mb-1">Activities & Materials:</strong>
                      <p>Placeholder for activities and teaching materials used</p>
                    </div>
                    <div>
                      <strong className="text-editorial-navy font-semibold block mb-1">Short Reflections:</strong>
                      <p>Placeholder for reflective insights and teaching outcomes</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'lesson-plans' && (
            <motion.div
              key="lesson-plans"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="max-w-5xl mx-auto"
            >
              <div className="flex items-center mb-10 border-b border-editorial-border pb-4">
                <FileText className="w-8 h-8 text-editorial-accent mr-4" />
                <h3 className="text-3xl font-serif font-bold text-editorial-navy">Lesson Plans & Classroom Materials</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Skill-based lessons */}
                <div className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300 rounded-xl">
                  <h4 className="text-xl font-serif font-bold text-editorial-navy mb-4">Skill-Based Lessons</h4>
                  <ul className="space-y-3 text-editorial-subtext text-sm mb-4">
                    <li className="flex items-center"><span className="text-editorial-accent mr-2">•</span> Reading: Placeholder for reading skill lessons</li>
                    <li className="flex items-center"><span className="text-editorial-accent mr-2">•</span> Writing: Placeholder for writing skill lessons</li>
                    <li className="flex items-center"><span className="text-editorial-accent mr-2">•</span> Speaking: Placeholder for speaking skill lessons</li>
                    <li className="flex items-center"><span className="text-editorial-accent mr-2">•</span> Listening: Placeholder for listening skill lessons</li>
                  </ul>
                  <p className="text-editorial-subtext text-xs italic border-t border-editorial-border pt-3">
                    (Each with level, context, objectives, and rationale)
                  </p>
                </div>

                {/* Integrated skills lessons */}
                <div className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300 rounded-xl">
                  <h4 className="text-xl font-serif font-bold text-editorial-navy mb-4">Integrated Skills Lessons</h4>
                  <p className="text-editorial-subtext text-sm mb-4 leading-relaxed">
                    Placeholder for integrated skills lessons that combine multiple language skills in authentic, meaningful contexts.
                  </p>
                  <p className="text-editorial-subtext text-xs italic border-t border-editorial-border pt-3">
                    (Each with level, context, objectives, and rationale)
                  </p>
                </div>

                {/* Grammar/PACE-model lessons */}
                <div className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300 rounded-xl">
                  <h4 className="text-xl font-serif font-bold text-editorial-navy mb-4">Grammar / PACE-Model Lessons</h4>
                  <p className="text-editorial-subtext text-sm mb-4 leading-relaxed">
                    Placeholder for grammar lessons using the PACE model (Presentation, Attention, Co-construction, Extension).
                  </p>
                  <p className="text-editorial-subtext text-xs italic border-t border-editorial-border pt-3">
                    (Each with level, context, objectives, and rationale)
                  </p>
                </div>

                {/* Vocabulary activities */}
                <div className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300 rounded-xl">
                  <h4 className="text-xl font-serif font-bold text-editorial-navy mb-4">Vocabulary Activities</h4>
                  <p className="text-editorial-subtext text-sm mb-4 leading-relaxed">
                    Placeholder for vocabulary-building activities and materials designed for various proficiency levels.
                  </p>
                  <p className="text-editorial-subtext text-xs italic border-t border-editorial-border pt-3">
                    (Each with level, context, objectives, and rationale)
                  </p>
                </div>

                {/* Task-based / project-based lessons */}
                <div className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300 md:col-span-2 rounded-xl">
                  <h4 className="text-xl font-serif font-bold text-editorial-navy mb-4">Task-Based / Project-Based Lessons</h4>
                  <p className="text-editorial-subtext text-sm mb-4 leading-relaxed">
                    Placeholder for task-based and project-based learning activities that engage students in real-world language use and collaborative problem-solving.
                  </p>
                  <p className="text-editorial-subtext text-xs italic border-t border-editorial-border pt-3">
                    (Each with level, context, objectives, and rationale)
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'curriculum' && (
            <motion.div
              key="curriculum"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="max-w-5xl mx-auto"
            >
              <div className="flex items-center mb-10 border-b border-editorial-border pb-4">
                <Layers className="w-8 h-8 text-editorial-accent mr-4" />
                <h3 className="text-3xl font-serif font-bold text-editorial-navy">Curriculum & Course Design</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Full course outlines & syllabi */}
                <div className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300 rounded-xl">
                  <h4 className="text-xl font-serif font-bold text-editorial-navy mb-4">Full Course Outlines & Syllabi</h4>
                  <p className="text-editorial-subtext text-sm leading-relaxed">
                    Placeholder for complete course syllabi with learning outcomes, assessment methods, weekly schedules, and grading policies.
                  </p>
                </div>

                {/* Unit plans / thematic units */}
                <div className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300 rounded-xl">
                  <h4 className="text-xl font-serif font-bold text-editorial-navy mb-4">Unit Plans / Thematic Units</h4>
                  <p className="text-editorial-subtext text-sm leading-relaxed">
                    Placeholder for thematic unit plans that organize instruction around topics, themes, or real-world scenarios.
                  </p>
                </div>

                {/* Scope & sequence documents */}
                <div className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300 rounded-xl">
                  <h4 className="text-xl font-serif font-bold text-editorial-navy mb-4">Scope & Sequence Documents</h4>
                  <p className="text-editorial-subtext text-sm leading-relaxed">
                    Placeholder for scope and sequence charts showing the progression of skills, grammar, and vocabulary across course levels or units.
                  </p>
                </div>

                {/* Curriculum projects */}
                <div className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300 rounded-xl">
                  <h4 className="text-xl font-serif font-bold text-editorial-navy mb-4">Curriculum Projects (ADDIE / ACTFL / CEFR)</h4>
                  <p className="text-editorial-subtext text-sm leading-relaxed">
                    Placeholder for curriculum development projects using frameworks like ADDIE (instructional design), ACTFL standards, or CEFR proficiency levels.
                  </p>
                </div>

                {/* Design rationales */}
                <div className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300 md:col-span-2 rounded-xl">
                  <h4 className="text-xl font-serif font-bold text-editorial-navy mb-4">Design Rationales</h4>
                  <p className="text-editorial-subtext text-sm mb-4 leading-relaxed">
                    Placeholder for explanations of curriculum design decisions, including:
                  </p>
                  <ul className="space-y-2 text-editorial-subtext text-sm ml-4">
                    <li className="flex items-center"><span className="text-editorial-accent mr-2">•</span> Why specific topics were chosen</li>
                    <li className="flex items-center"><span className="text-editorial-accent mr-2">•</span> Rationale for sequencing and ordering</li>
                    <li className="flex items-center"><span className="text-editorial-accent mr-2">•</span> Selection of tasks and activities</li>
                    <li className="flex items-center"><span className="text-editorial-accent mr-2">•</span> Alignment with learning objectives and standards</li>
                    <li className="flex items-center"><span className="text-editorial-accent mr-2">•</span> Pedagogical approaches and theoretical foundations</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
