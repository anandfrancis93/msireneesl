'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, FileText, Presentation, ClipboardCheck } from 'lucide-react';

export default function ResearchScholarship() {
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
            Research, Assessment & <span className="gradient-text">Scholarship</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            A comprehensive collection of research projects, academic writing, presentations, and assessment tools
          </p>
        </motion.div>

        {/* Research & Academic Writing Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-accent-primary" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">Research & Academic Writing</h3>
          </div>

          <div className="space-y-6">
            {/* Research Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card-dark"
            >
              <h4 className="text-xl font-bold text-accent-primary mb-4">Term Paper / Research Report 1</h4>
              <p className="text-text-secondary mb-4">
                Placeholder for research paper abstract or summary. This could cover topics in reading, vocabulary, grammar, curriculum, or other TESOL-related areas.
              </p>
              <div className="space-y-2 text-text-secondary text-sm">
                <p><strong className="text-text-primary">Type:</strong> Term Paper / Research Report</p>
                <p><strong className="text-text-primary">Topic:</strong> Placeholder topic (e.g., reading, vocabulary, grammar, curriculum)</p>
                <p><strong className="text-text-primary">Abstract:</strong> Brief summary of research findings and implications</p>
                <button className="btn-secondary mt-3">
                  Download PDF
                </button>
              </div>
            </motion.div>

            {/* Research Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card-dark"
            >
              <h4 className="text-xl font-bold text-accent-primary mb-4">Small-Scale Classroom Research / Action Research</h4>
              <p className="text-text-secondary mb-4">
                Placeholder for classroom-based research or action research project. This could include investigations of teaching methods, student learning outcomes, or classroom interventions.
              </p>
              <div className="space-y-2 text-text-secondary text-sm">
                <p><strong className="text-text-primary">Type:</strong> Action Research / Classroom Research</p>
                <p><strong className="text-text-primary">Context:</strong> Placeholder classroom/teaching context</p>
                <p><strong className="text-text-primary">Abstract:</strong> Brief summary of research question, methods, and findings</p>
                <button className="btn-secondary mt-3">
                  Download PDF
                </button>
              </div>
            </motion.div>

            {/* Research Project 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="card-dark"
            >
              <h4 className="text-xl font-bold text-accent-primary mb-4">Textbook / Material Evaluation</h4>
              <p className="text-text-secondary mb-4">
                Placeholder for textbook or teaching material evaluation. This could include systematic review and analysis of ESL/EFL textbooks or digital learning materials.
              </p>
              <div className="space-y-2 text-text-secondary text-sm">
                <p><strong className="text-text-primary">Type:</strong> Material Evaluation</p>
                <p><strong className="text-text-primary">Materials Reviewed:</strong> Placeholder textbook or materials</p>
                <p><strong className="text-text-primary">Abstract:</strong> Brief summary of evaluation criteria and conclusions</p>
                <button className="btn-secondary mt-3">
                  Download PDF
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Book Reports & Critical Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-accent-primary" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">Book Reports & Critical Reviews</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Book Report 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="card-dark"
            >
              <h4 className="text-lg font-bold text-accent-primary mb-3">Book Report Placeholder 1</h4>
              <p className="text-text-secondary text-sm mb-4">
                Placeholder for book report (e.g., "Reading in a Second Language", "Exploring Vocabulary", etc.)
              </p>
              <div className="space-y-2 text-text-secondary text-sm">
                <p><strong className="text-text-primary">Major Takeaways:</strong> Key insights and concepts from the book</p>
                <p><strong className="text-text-primary">Reflections:</strong> Personal reflections on the content</p>
                <p><strong className="text-text-primary">Applications to Teaching:</strong> How the concepts can be applied in the classroom</p>
              </div>
              <button className="btn-secondary mt-3 w-full">
                View Full Report
              </button>
            </motion.div>

            {/* Book Report 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="card-dark"
            >
              <h4 className="text-lg font-bold text-accent-primary mb-3">Book Report Placeholder 2</h4>
              <p className="text-text-secondary text-sm mb-4">
                Placeholder for another book report with major takeaways, visuals/infographics, and teaching applications
              </p>
              <div className="space-y-2 text-text-secondary text-sm">
                <p><strong className="text-text-primary">Major Takeaways:</strong> Key insights and concepts from the book</p>
                <p><strong className="text-text-primary">Reflections:</strong> Personal reflections on the content</p>
                <p><strong className="text-text-primary">Applications to Teaching:</strong> How the concepts can be applied in the classroom</p>
              </div>
              <button className="btn-secondary mt-3 w-full">
                View Full Report
              </button>
            </motion.div>

            {/* Book Report 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="card-dark"
            >
              <h4 className="text-lg font-bold text-accent-primary mb-3">Book Report Placeholder 3</h4>
              <p className="text-text-secondary text-sm mb-4">
                Placeholder for critical review with visuals, infographics, and practical applications
              </p>
              <div className="space-y-2 text-text-secondary text-sm">
                <p><strong className="text-text-primary">Major Takeaways:</strong> Key insights and concepts from the book</p>
                <p><strong className="text-text-primary">Reflections:</strong> Personal reflections on the content</p>
                <p><strong className="text-text-primary">Applications to Teaching:</strong> How the concepts can be applied in the classroom</p>
              </div>
              <button className="btn-secondary mt-3 w-full">
                View Full Report
              </button>
            </motion.div>

            {/* Book Report 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="card-dark"
            >
              <h4 className="text-lg font-bold text-accent-primary mb-3">Book Report Placeholder 4</h4>
              <p className="text-text-secondary text-sm mb-4">
                Placeholder for additional book report with analysis and teaching connections
              </p>
              <div className="space-y-2 text-text-secondary text-sm">
                <p><strong className="text-text-primary">Major Takeaways:</strong> Key insights and concepts from the book</p>
                <p><strong className="text-text-primary">Reflections:</strong> Personal reflections on the content</p>
                <p><strong className="text-text-primary">Applications to Teaching:</strong> How the concepts can be applied in the classroom</p>
              </div>
              <button className="btn-secondary mt-3 w-full">
                View Full Report
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Presentations & Publications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center">
              <Presentation className="w-6 h-6 text-accent-primary" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">Presentations & Publications</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Conference Presentations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="card-dark"
            >
              <h4 className="text-lg font-bold text-accent-primary mb-3">Conference Presentations & Posters</h4>
              <p className="text-text-secondary text-sm mb-3">
                Placeholder for conference presentations, posters, and academic talks delivered at professional conferences.
              </p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Presentation Title 1 - Conference Name (Year)</li>
                <li>• Presentation Title 2 - Conference Name (Year)</li>
                <li>• Poster Title - Conference Name (Year)</li>
              </ul>
            </motion.div>

            {/* Workshop Materials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="card-dark"
            >
              <h4 className="text-lg font-bold text-accent-primary mb-3">Workshop Materials</h4>
              <p className="text-text-secondary text-sm mb-3">
                Placeholder for workshops and professional development sessions led or facilitated.
              </p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Workshop Title 1 - Institution/Event (Year)</li>
                <li>• Workshop Title 2 - Institution/Event (Year)</li>
                <li>• Training Session Title - Institution/Event (Year)</li>
              </ul>
            </motion.div>

            {/* Publications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="card-dark md:col-span-2"
            >
              <h4 className="text-lg font-bold text-accent-primary mb-3">Articles, Newsletters, Blog Posts & Web Content</h4>
              <p className="text-text-secondary text-sm mb-3">
                Placeholder for published articles, newsletter contributions, blog posts, and other written content.
              </p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Article Title - Publication Name (Year)</li>
                <li>• Newsletter Article - Publication Name (Year)</li>
                <li>• Blog Post Title - Platform/Website (Year)</li>
                <li>• Web Content Title - Website/Organization (Year)</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Assessment & Evaluation Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center">
              <ClipboardCheck className="w-6 h-6 text-accent-primary" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">Assessment & Evaluation</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Quizzes, Tests, and Exams */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="card-dark"
            >
              <h4 className="text-lg font-bold text-accent-primary mb-3">Quizzes, Tests & Exams</h4>
              <p className="text-text-secondary text-sm mb-3">
                Placeholder for assessment instruments designed for various proficiency levels and language skills.
              </p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Reading comprehension test (Level placeholder)</li>
                <li>• Grammar quiz (Level placeholder)</li>
                <li>• Vocabulary assessment (Level placeholder)</li>
                <li>• Final exam (Course placeholder)</li>
              </ul>
            </motion.div>

            {/* Rubrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.7 }}
              className="card-dark"
            >
              <h4 className="text-lg font-bold text-accent-primary mb-3">Rubrics</h4>
              <p className="text-text-secondary text-sm mb-3">
                Placeholder for assessment rubrics for evaluating student performance across different skill areas.
              </p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Speaking assessment rubric</li>
                <li>• Writing assessment rubric</li>
                <li>• Project-based learning rubric</li>
                <li>• Presentation rubric</li>
              </ul>
            </motion.div>

            {/* Needs Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.8 }}
              className="card-dark"
            >
              <h4 className="text-lg font-bold text-accent-primary mb-3">Needs Analysis Tools & Reports</h4>
              <p className="text-text-secondary text-sm mb-3">
                Placeholder for learner needs analysis instruments and findings reports.
              </p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Student needs survey (Context placeholder)</li>
                <li>• Needs analysis report (Program placeholder)</li>
                <li>• Learning goals assessment tool</li>
                <li>• Placement test (Level placeholder)</li>
              </ul>
            </motion.div>

            {/* Course/Curriculum Evaluations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.9 }}
              className="card-dark"
            >
              <h4 className="text-lg font-bold text-accent-primary mb-3">Course & Curriculum Evaluations</h4>
              <p className="text-text-secondary text-sm mb-3">
                Placeholder for program evaluation reports showing analysis and improvement initiatives.
              </p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Course evaluation summary (Course placeholder)</li>
                <li>• Curriculum review report (Program placeholder)</li>
                <li>• Student feedback analysis</li>
                <li>• Program improvement recommendations</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
