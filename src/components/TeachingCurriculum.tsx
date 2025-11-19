'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, FileText, Layers } from 'lucide-react';

export default function TeachingCurriculum() {
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
            Teaching & <span className="italic text-editorial-accent">Curriculum Practice</span>
          </h2>
          <p className="text-editorial-subtext max-w-2xl mx-auto text-lg leading-relaxed font-light">
            A comprehensive overview of my teaching experience, lesson plans, and curriculum design work
          </p>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <button
            onClick={() => {
              const element = document.getElementById('teaching-experience');
              element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="px-6 py-3 border border-editorial-border text-editorial-navy hover:bg-white hover:border-editorial-accent transition-all duration-300 font-serif"
          >
            Teaching Experience
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('lesson-plans');
              element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="px-6 py-3 border border-editorial-border text-editorial-navy hover:bg-white hover:border-editorial-accent transition-all duration-300 font-serif"
          >
            Lesson Plans & Classroom Materials
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('curriculum-design');
              element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="px-6 py-3 border border-editorial-border text-editorial-navy hover:bg-white hover:border-editorial-accent transition-all duration-300 font-serif"
          >
            Curriculum & Course Design
          </button>
        </motion.div>

        {/* Teaching Experience Section */}
        <motion.div
          id="teaching-experience"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-24"
          style={{ scrollMarginTop: '100px' }}
        >
          <div className="flex items-center mb-10 border-b border-editorial-border pb-4">
            <BookOpen className="w-8 h-8 text-editorial-accent mr-4" />
            <h3 className="text-3xl font-serif font-bold text-editorial-navy">Teaching Experience</h3>
          </div>

          <div className="space-y-8">
            {/* Course/Context 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h4 className="text-2xl font-serif font-bold text-editorial-navy mb-4">Course/Context 1</h4>
              <p className="text-editorial-subtext mb-6 leading-relaxed">
                Brief role description placeholder - Overview of responsibilities, student demographics, and teaching context.
              </p>

              <div className="space-y-4 text-editorial-subtext text-sm bg-editorial-bg p-6 border-l-2 border-editorial-accent">
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
            </motion.div>

            {/* Course/Context 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h4 className="text-2xl font-serif font-bold text-editorial-navy mb-4">Course/Context 2</h4>
              <p className="text-editorial-subtext mb-6 leading-relaxed">
                Brief role description placeholder - Overview of responsibilities, student demographics, and teaching context.
              </p>

              <div className="space-y-4 text-editorial-subtext text-sm bg-editorial-bg p-6 border-l-2 border-editorial-accent">
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
            </motion.div>

            {/* Course/Context 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h4 className="text-2xl font-serif font-bold text-editorial-navy mb-4">Course/Context 3</h4>
              <p className="text-editorial-subtext mb-6 leading-relaxed">
                Brief role description placeholder - Overview of responsibilities, student demographics, and teaching context.
              </p>

              <div className="space-y-4 text-editorial-subtext text-sm bg-editorial-bg p-6 border-l-2 border-editorial-accent">
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
            </motion.div>
          </div>
        </motion.div>

        {/* Lesson Plans & Classroom Materials Section */}
        <motion.div
          id="lesson-plans"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-24"
          style={{ scrollMarginTop: '100px' }}
        >
          <div className="flex items-center mb-10 border-b border-editorial-border pb-4">
            <FileText className="w-8 h-8 text-editorial-accent mr-4" />
            <h3 className="text-3xl font-serif font-bold text-editorial-navy">Lesson Plans & Classroom Materials</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Skill-based lessons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300"
            >
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
            </motion.div>

            {/* Integrated skills lessons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h4 className="text-xl font-serif font-bold text-editorial-navy mb-4">Integrated Skills Lessons</h4>
              <p className="text-editorial-subtext text-sm mb-4 leading-relaxed">
                Placeholder for integrated skills lessons that combine multiple language skills in authentic, meaningful contexts.
              </p>
              <p className="text-editorial-subtext text-xs italic border-t border-editorial-border pt-3">
                (Each with level, context, objectives, and rationale)
              </p>
            </motion.div>

            {/* Grammar/PACE-model lessons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h4 className="text-xl font-serif font-bold text-editorial-navy mb-4">Grammar / PACE-Model Lessons</h4>
              <p className="text-editorial-subtext text-sm mb-4 leading-relaxed">
                Placeholder for grammar lessons using the PACE model (Presentation, Attention, Co-construction, Extension).
              </p>
              <p className="text-editorial-subtext text-xs italic border-t border-editorial-border pt-3">
                (Each with level, context, objectives, and rationale)
              </p>
            </motion.div>

            {/* Vocabulary activities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h4 className="text-xl font-serif font-bold text-editorial-navy mb-4">Vocabulary Activities</h4>
              <p className="text-editorial-subtext text-sm mb-4 leading-relaxed">
                Placeholder for vocabulary-building activities and materials designed for various proficiency levels.
              </p>
              <p className="text-editorial-subtext text-xs italic border-t border-editorial-border pt-3">
                (Each with level, context, objectives, and rationale)
              </p>
            </motion.div>

            {/* Task-based / project-based lessons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300 md:col-span-2"
            >
              <h4 className="text-xl font-serif font-bold text-editorial-navy mb-4">Task-Based / Project-Based Lessons</h4>
              <p className="text-editorial-subtext text-sm mb-4 leading-relaxed">
                Placeholder for task-based and project-based learning activities that engage students in real-world language use and collaborative problem-solving.
              </p>
              <p className="text-editorial-subtext text-xs italic border-t border-editorial-border pt-3">
                (Each with level, context, objectives, and rationale)
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Curriculum & Course Design Section */}
        <motion.div
          id="curriculum-design"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-24"
          style={{ scrollMarginTop: '100px' }}
        >
          <div className="flex items-center mb-10 border-b border-editorial-border pb-4">
            <Layers className="w-8 h-8 text-editorial-accent mr-4" />
            <h3 className="text-3xl font-serif font-bold text-editorial-navy">Curriculum & Course Design</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Full course outlines & syllabi */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h4 className="text-xl font-serif font-bold text-editorial-navy mb-4">Full Course Outlines & Syllabi</h4>
              <p className="text-editorial-subtext text-sm leading-relaxed">
                Placeholder for complete course syllabi with learning outcomes, assessment methods, weekly schedules, and grading policies.
              </p>
            </motion.div>

            {/* Unit plans / thematic units */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h4 className="text-xl font-serif font-bold text-editorial-navy mb-4">Unit Plans / Thematic Units</h4>
              <p className="text-editorial-subtext text-sm leading-relaxed">
                Placeholder for thematic unit plans that organize instruction around topics, themes, or real-world scenarios.
              </p>
            </motion.div>

            {/* Scope & sequence documents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h4 className="text-xl font-serif font-bold text-editorial-navy mb-4">Scope & Sequence Documents</h4>
              <p className="text-editorial-subtext text-sm leading-relaxed">
                Placeholder for scope and sequence charts showing the progression of skills, grammar, and vocabulary across course levels or units.
              </p>
            </motion.div>

            {/* Curriculum projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h4 className="text-xl font-serif font-bold text-editorial-navy mb-4">Curriculum Projects (ADDIE / ACTFL / CEFR)</h4>
              <p className="text-editorial-subtext text-sm leading-relaxed">
                Placeholder for curriculum development projects using frameworks like ADDIE (instructional design), ACTFL standards, or CEFR proficiency levels.
              </p>
            </motion.div>

            {/* Design rationales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.7 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300 md:col-span-2"
            >
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
