'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, FileText, Layers } from 'lucide-react';

export default function TeachingCurriculum() {
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
            Teaching & <span className="gradient-text">Curriculum Practice</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            A comprehensive overview of my teaching experience, lesson plans, and curriculum design work
          </p>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() => {
              const element = document.getElementById('teaching-experience');
              element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="btn-secondary"
          >
            Teaching Experience
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('lesson-plans');
              element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="btn-secondary"
          >
            Lesson Plans & Classroom Materials
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('curriculum-design');
              element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="btn-secondary"
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
          className="mb-20"
          style={{ scrollMarginTop: '100px' }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-accent-primary" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">Teaching Experience</h3>
          </div>

          <div className="space-y-6">
            {/* Course/Context 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card-dark"
            >
              <h4 className="text-xl font-bold text-accent-primary mb-4">Course/Context 1</h4>
              <p className="text-text-secondary mb-4">
                Brief role description placeholder - Overview of responsibilities, student demographics, and teaching context.
              </p>

              <div className="space-y-3 text-text-secondary">
                <div>
                  <strong className="text-text-primary">Sample Lesson Plans:</strong>
                  <p className="ml-4 mt-1">Placeholder for sample lesson plan descriptions and links</p>
                </div>
                <div>
                  <strong className="text-text-primary">Activities & Materials:</strong>
                  <p className="ml-4 mt-1">Placeholder for activities and teaching materials used</p>
                </div>
                <div>
                  <strong className="text-text-primary">Short Reflections:</strong>
                  <p className="ml-4 mt-1">Placeholder for reflective insights and teaching outcomes</p>
                </div>
              </div>
            </motion.div>

            {/* Course/Context 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card-dark"
            >
              <h4 className="text-xl font-bold text-accent-primary mb-4">Course/Context 2</h4>
              <p className="text-text-secondary mb-4">
                Brief role description placeholder - Overview of responsibilities, student demographics, and teaching context.
              </p>

              <div className="space-y-3 text-text-secondary">
                <div>
                  <strong className="text-text-primary">Sample Lesson Plans:</strong>
                  <p className="ml-4 mt-1">Placeholder for sample lesson plan descriptions and links</p>
                </div>
                <div>
                  <strong className="text-text-primary">Activities & Materials:</strong>
                  <p className="ml-4 mt-1">Placeholder for activities and teaching materials used</p>
                </div>
                <div>
                  <strong className="text-text-primary">Short Reflections:</strong>
                  <p className="ml-4 mt-1">Placeholder for reflective insights and teaching outcomes</p>
                </div>
              </div>
            </motion.div>

            {/* Course/Context 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="card-dark"
            >
              <h4 className="text-xl font-bold text-accent-primary mb-4">Course/Context 3</h4>
              <p className="text-text-secondary mb-4">
                Brief role description placeholder - Overview of responsibilities, student demographics, and teaching context.
              </p>

              <div className="space-y-3 text-text-secondary">
                <div>
                  <strong className="text-text-primary">Sample Lesson Plans:</strong>
                  <p className="ml-4 mt-1">Placeholder for sample lesson plan descriptions and links</p>
                </div>
                <div>
                  <strong className="text-text-primary">Activities & Materials:</strong>
                  <p className="ml-4 mt-1">Placeholder for activities and teaching materials used</p>
                </div>
                <div>
                  <strong className="text-text-primary">Short Reflections:</strong>
                  <p className="ml-4 mt-1">Placeholder for reflective insights and teaching outcomes</p>
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
          className="mb-20"
          style={{ scrollMarginTop: '100px' }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-accent-primary" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">Lesson Plans & Classroom Materials</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Skill-based lessons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="card-dark"
            >
              <h4 className="text-lg font-bold text-accent-primary mb-3">Skill-Based Lessons</h4>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Reading: Placeholder for reading skill lessons</li>
                <li>• Writing: Placeholder for writing skill lessons</li>
                <li>• Speaking: Placeholder for speaking skill lessons</li>
                <li>• Listening: Placeholder for listening skill lessons</li>
              </ul>
              <p className="text-text-tertiary text-xs mt-3">
                (Each with level, context, objectives, and rationale)
              </p>
            </motion.div>

            {/* Integrated skills lessons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="card-dark"
            >
              <h4 className="text-lg font-bold text-accent-primary mb-3">Integrated Skills Lessons</h4>
              <p className="text-text-secondary text-sm">
                Placeholder for integrated skills lessons that combine multiple language skills in authentic, meaningful contexts.
              </p>
              <p className="text-text-tertiary text-xs mt-3">
                (Each with level, context, objectives, and rationale)
              </p>
            </motion.div>

            {/* Grammar/PACE-model lessons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="card-dark"
            >
              <h4 className="text-lg font-bold text-accent-primary mb-3">Grammar / PACE-Model Lessons</h4>
              <p className="text-text-secondary text-sm">
                Placeholder for grammar lessons using the PACE model (Presentation, Attention, Co-construction, Extension).
              </p>
              <p className="text-text-tertiary text-xs mt-3">
                (Each with level, context, objectives, and rationale)
              </p>
            </motion.div>

            {/* Vocabulary activities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="card-dark"
            >
              <h4 className="text-lg font-bold text-accent-primary mb-3">Vocabulary Activities</h4>
              <p className="text-text-secondary text-sm">
                Placeholder for vocabulary-building activities and materials designed for various proficiency levels.
              </p>
              <p className="text-text-tertiary text-xs mt-3">
                (Each with level, context, objectives, and rationale)
              </p>
            </motion.div>

            {/* Task-based / project-based lessons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="card-dark md:col-span-2"
            >
              <h4 className="text-lg font-bold text-accent-primary mb-3">Task-Based / Project-Based Lessons</h4>
              <p className="text-text-secondary text-sm">
                Placeholder for task-based and project-based learning activities that engage students in real-world language use and collaborative problem-solving.
              </p>
              <p className="text-text-tertiary text-xs mt-3">
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
          className="mb-20"
          style={{ scrollMarginTop: '100px' }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center">
              <Layers className="w-6 h-6 text-accent-primary" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">Curriculum & Course Design</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Full course outlines & syllabi */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="card-dark"
            >
              <h4 className="text-lg font-bold text-accent-primary mb-3">Full Course Outlines & Syllabi</h4>
              <p className="text-text-secondary text-sm">
                Placeholder for complete course syllabi with learning outcomes, assessment methods, weekly schedules, and grading policies.
              </p>
            </motion.div>

            {/* Unit plans / thematic units */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="card-dark"
            >
              <h4 className="text-lg font-bold text-accent-primary mb-3">Unit Plans / Thematic Units</h4>
              <p className="text-text-secondary text-sm">
                Placeholder for thematic unit plans that organize instruction around topics, themes, or real-world scenarios.
              </p>
            </motion.div>

            {/* Scope & sequence documents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="card-dark"
            >
              <h4 className="text-lg font-bold text-accent-primary mb-3">Scope & Sequence Documents</h4>
              <p className="text-text-secondary text-sm">
                Placeholder for scope and sequence charts showing the progression of skills, grammar, and vocabulary across course levels or units.
              </p>
            </motion.div>

            {/* Curriculum projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="card-dark"
            >
              <h4 className="text-lg font-bold text-accent-primary mb-3">Curriculum Projects (ADDIE / ACTFL / CEFR)</h4>
              <p className="text-text-secondary text-sm">
                Placeholder for curriculum development projects using frameworks like ADDIE (instructional design), ACTFL standards, or CEFR proficiency levels.
              </p>
            </motion.div>

            {/* Design rationales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.7 }}
              className="card-dark md:col-span-2"
            >
              <h4 className="text-lg font-bold text-accent-primary mb-3">Design Rationales</h4>
              <p className="text-text-secondary text-sm mb-3">
                Placeholder for explanations of curriculum design decisions, including:
              </p>
              <ul className="space-y-2 text-text-secondary text-sm ml-4">
                <li>• Why specific topics were chosen</li>
                <li>• Rationale for sequencing and ordering</li>
                <li>• Selection of tasks and activities</li>
                <li>• Alignment with learning objectives and standards</li>
                <li>• Pedagogical approaches and theoretical foundations</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
