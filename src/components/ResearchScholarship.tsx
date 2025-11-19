'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, FileText, Presentation, ClipboardCheck } from 'lucide-react';

export default function ResearchScholarship() {
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
            Research, Assessment & <span className="italic text-editorial-accent">Scholarship</span>
          </h2>
          <p className="text-editorial-subtext max-w-2xl mx-auto text-lg leading-relaxed">
            A comprehensive collection of research projects, academic writing, presentations, and assessment tools
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
              const element = document.getElementById('research-writing');
              element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="px-6 py-3 border border-editorial-border text-editorial-navy hover:bg-white hover:border-editorial-accent transition-all duration-300 font-serif"
          >
            Research & Academic Writing
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('book-reports');
              element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="px-6 py-3 border border-editorial-border text-editorial-navy hover:bg-white hover:border-editorial-accent transition-all duration-300 font-serif"
          >
            Book Reports & Critical Reviews
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('presentations');
              element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="px-6 py-3 border border-editorial-border text-editorial-navy hover:bg-white hover:border-editorial-accent transition-all duration-300 font-serif"
          >
            Presentations & Publications
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('assessment');
              element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="px-6 py-3 border border-editorial-border text-editorial-navy hover:bg-white hover:border-editorial-accent transition-all duration-300 font-serif"
          >
            Assessment & Evaluation
          </button>
        </motion.div>

        {/* Research & Academic Writing Section */}
        <motion.div
          id="research-writing"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-24"
          style={{ scrollMarginTop: '100px' }}
        >
          <div className="flex items-center mb-10 border-b border-editorial-border pb-4">
            <FileText className="w-8 h-8 text-editorial-accent mr-4" />
            <h3 className="text-3xl font-serif font-bold text-editorial-navy">Research & Academic Writing</h3>
          </div>

          <div className="space-y-8">
            {/* Research Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h4 className="text-2xl font-serif font-bold text-editorial-navy mb-4">Term Paper / Research Report 1</h4>
              <p className="text-editorial-subtext mb-6 leading-relaxed">
                Placeholder for research paper abstract or summary. This could cover topics in reading, vocabulary, grammar, curriculum, or other TESOL-related areas.
              </p>
              <div className="space-y-3 text-editorial-subtext text-sm bg-editorial-bg p-6 border-l-2 border-editorial-accent">
                <p><strong className="text-editorial-navy font-semibold">Type:</strong> Term Paper / Research Report</p>
                <p><strong className="text-editorial-navy font-semibold">Topic:</strong> Placeholder topic (e.g., reading, vocabulary, grammar, curriculum)</p>
                <p><strong className="text-editorial-navy font-semibold">Abstract:</strong> Brief summary of research findings and implications</p>
                <button className="mt-4 px-5 py-2 bg-editorial-navy text-white text-sm hover:bg-editorial-accent transition-colors duration-300">
                  Download PDF
                </button>
              </div>
            </motion.div>

            {/* Research Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h4 className="text-2xl font-serif font-bold text-editorial-navy mb-4">Small-Scale Classroom Research / Action Research</h4>
              <p className="text-editorial-subtext mb-6 leading-relaxed">
                Placeholder for classroom-based research or action research project. This could include investigations of teaching methods, student learning outcomes, or classroom interventions.
              </p>
              <div className="space-y-3 text-editorial-subtext text-sm bg-editorial-bg p-6 border-l-2 border-editorial-accent">
                <p><strong className="text-editorial-navy font-semibold">Type:</strong> Action Research / Classroom Research</p>
                <p><strong className="text-editorial-navy font-semibold">Context:</strong> Placeholder classroom/teaching context</p>
                <p><strong className="text-editorial-navy font-semibold">Abstract:</strong> Brief summary of research question, methods, and findings</p>
                <button className="mt-4 px-5 py-2 bg-editorial-navy text-white text-sm hover:bg-editorial-accent transition-colors duration-300">
                  Download PDF
                </button>
              </div>
            </motion.div>

            {/* Research Project 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h4 className="text-2xl font-serif font-bold text-editorial-navy mb-4">Textbook / Material Evaluation</h4>
              <p className="text-editorial-subtext mb-6 leading-relaxed">
                Placeholder for textbook or teaching material evaluation. This could include systematic review and analysis of ESL/EFL textbooks or digital learning materials.
              </p>
              <div className="space-y-3 text-editorial-subtext text-sm bg-editorial-bg p-6 border-l-2 border-editorial-accent">
                <p><strong className="text-editorial-navy font-semibold">Type:</strong> Material Evaluation</p>
                <p><strong className="text-editorial-navy font-semibold">Materials Reviewed:</strong> Placeholder textbook or materials</p>
                <p><strong className="text-editorial-navy font-semibold">Abstract:</strong> Brief summary of evaluation criteria and conclusions</p>
                <button className="mt-4 px-5 py-2 bg-editorial-navy text-white text-sm hover:bg-editorial-accent transition-colors duration-300">
                  Download PDF
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Book Reports & Critical Reviews Section */}
        <motion.div
          id="book-reports"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-24"
          style={{ scrollMarginTop: '100px' }}
        >
          <div className="flex items-center mb-10 border-b border-editorial-border pb-4">
            <BookOpen className="w-8 h-8 text-editorial-accent mr-4" />
            <h3 className="text-3xl font-serif font-bold text-editorial-navy">Book Reports & Critical Reviews</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Book Report 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <h4 className="text-xl font-serif font-bold text-editorial-navy mb-3">Book Report Placeholder 1</h4>
              <p className="text-editorial-subtext text-sm mb-6 flex-grow">
                Placeholder for book report (e.g., "Reading in a Second Language", "Exploring Vocabulary", etc.)
              </p>
              <div className="space-y-2 text-editorial-subtext text-sm mb-6">
                <p><strong className="text-editorial-navy font-semibold">Major Takeaways:</strong> Key insights and concepts from the book</p>
                <p><strong className="text-editorial-navy font-semibold">Reflections:</strong> Personal reflections on the content</p>
                <p><strong className="text-editorial-navy font-semibold">Applications to Teaching:</strong> How the concepts can be applied in the classroom</p>
              </div>
              <button className="w-full px-4 py-3 border border-editorial-border text-editorial-navy hover:bg-editorial-bg hover:border-editorial-accent transition-all duration-300 text-sm uppercase tracking-wider">
                View Full Report
              </button>
            </motion.div>

            {/* Book Report 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <h4 className="text-xl font-serif font-bold text-editorial-navy mb-3">Book Report Placeholder 2</h4>
              <p className="text-editorial-subtext text-sm mb-6 flex-grow">
                Placeholder for another book report with major takeaways, visuals/infographics, and teaching applications
              </p>
              <div className="space-y-2 text-editorial-subtext text-sm mb-6">
                <p><strong className="text-editorial-navy font-semibold">Major Takeaways:</strong> Key insights and concepts from the book</p>
                <p><strong className="text-editorial-navy font-semibold">Reflections:</strong> Personal reflections on the content</p>
                <p><strong className="text-editorial-navy font-semibold">Applications to Teaching:</strong> How the concepts can be applied in the classroom</p>
              </div>
              <button className="w-full px-4 py-3 border border-editorial-border text-editorial-navy hover:bg-editorial-bg hover:border-editorial-accent transition-all duration-300 text-sm uppercase tracking-wider">
                View Full Report
              </button>
            </motion.div>

            {/* Book Report 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <h4 className="text-xl font-serif font-bold text-editorial-navy mb-3">Book Report Placeholder 3</h4>
              <p className="text-editorial-subtext text-sm mb-6 flex-grow">
                Placeholder for critical review with visuals, infographics, and practical applications
              </p>
              <div className="space-y-2 text-editorial-subtext text-sm mb-6">
                <p><strong className="text-editorial-navy font-semibold">Major Takeaways:</strong> Key insights and concepts from the book</p>
                <p><strong className="text-editorial-navy font-semibold">Reflections:</strong> Personal reflections on the content</p>
                <p><strong className="text-editorial-navy font-semibold">Applications to Teaching:</strong> How the concepts can be applied in the classroom</p>
              </div>
              <button className="w-full px-4 py-3 border border-editorial-border text-editorial-navy hover:bg-editorial-bg hover:border-editorial-accent transition-all duration-300 text-sm uppercase tracking-wider">
                View Full Report
              </button>
            </motion.div>

            {/* Book Report 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <h4 className="text-xl font-serif font-bold text-editorial-navy mb-3">Book Report Placeholder 4</h4>
              <p className="text-editorial-subtext text-sm mb-6 flex-grow">
                Placeholder for additional book report with analysis and teaching connections
              </p>
              <div className="space-y-2 text-editorial-subtext text-sm mb-6">
                <p><strong className="text-editorial-navy font-semibold">Major Takeaways:</strong> Key insights and concepts from the book</p>
                <p><strong className="text-editorial-navy font-semibold">Reflections:</strong> Personal reflections on the content</p>
                <p><strong className="text-editorial-navy font-semibold">Applications to Teaching:</strong> How the concepts can be applied in the classroom</p>
              </div>
              <button className="w-full px-4 py-3 border border-editorial-border text-editorial-navy hover:bg-editorial-bg hover:border-editorial-accent transition-all duration-300 text-sm uppercase tracking-wider">
                View Full Report
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Presentations & Publications Section */}
        <motion.div
          id="presentations"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mb-24"
          style={{ scrollMarginTop: '100px' }}
        >
          <div className="flex items-center mb-10 border-b border-editorial-border pb-4">
            <Presentation className="w-8 h-8 text-editorial-accent mr-4" />
            <h3 className="text-3xl font-serif font-bold text-editorial-navy">Presentations & Publications</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Conference Presentations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h4 className="text-xl font-serif font-bold text-editorial-navy mb-4">Conference Presentations & Posters</h4>
              <p className="text-editorial-subtext text-sm mb-6">
                Placeholder for conference presentations, posters, and academic talks delivered at professional conferences.
              </p>
              <ul className="space-y-3 text-editorial-subtext text-sm">
                <li className="flex items-start"><span className="text-editorial-accent mr-2">•</span> Presentation Title 1 - Conference Name (Year)</li>
                <li className="flex items-start"><span className="text-editorial-accent mr-2">•</span> Presentation Title 2 - Conference Name (Year)</li>
                <li className="flex items-start"><span className="text-editorial-accent mr-2">•</span> Poster Title - Conference Name (Year)</li>
              </ul>
            </motion.div>

            {/* Workshop Materials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h4 className="text-xl font-serif font-bold text-editorial-navy mb-4">Workshop Materials</h4>
              <p className="text-editorial-subtext text-sm mb-6">
                Placeholder for workshops and professional development sessions led or facilitated.
              </p>
              <ul className="space-y-3 text-editorial-subtext text-sm">
                <li className="flex items-start"><span className="text-editorial-accent mr-2">•</span> Workshop Title 1 - Institution/Event (Year)</li>
                <li className="flex items-start"><span className="text-editorial-accent mr-2">•</span> Workshop Title 2 - Institution/Event (Year)</li>
                <li className="flex items-start"><span className="text-editorial-accent mr-2">•</span> Training Session Title - Institution/Event (Year)</li>
              </ul>
            </motion.div>

            {/* Publications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300 md:col-span-2"
            >
              <h4 className="text-xl font-serif font-bold text-editorial-navy mb-4">Articles, Newsletters, Blog Posts & Web Content</h4>
              <p className="text-editorial-subtext text-sm mb-6">
                Placeholder for published articles, newsletter contributions, blog posts, and other written content.
              </p>
              <ul className="space-y-3 text-editorial-subtext text-sm grid md:grid-cols-2 gap-x-8">
                <li className="flex items-start"><span className="text-editorial-accent mr-2">•</span> Article Title - Publication Name (Year)</li>
                <li className="flex items-start"><span className="text-editorial-accent mr-2">•</span> Newsletter Article - Publication Name (Year)</li>
                <li className="flex items-start"><span className="text-editorial-accent mr-2">•</span> Blog Post Title - Platform/Website (Year)</li>
                <li className="flex items-start"><span className="text-editorial-accent mr-2">•</span> Web Content Title - Website/Organization (Year)</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Assessment & Evaluation Section */}
        <motion.div
          id="assessment"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mb-24"
          style={{ scrollMarginTop: '100px' }}
        >
          <div className="flex items-center mb-10 border-b border-editorial-border pb-4">
            <ClipboardCheck className="w-8 h-8 text-editorial-accent mr-4" />
            <h3 className="text-3xl font-serif font-bold text-editorial-navy">Assessment & Evaluation</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Quizzes, Tests, and Exams */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h4 className="text-xl font-serif font-bold text-editorial-navy mb-4">Quizzes, Tests & Exams</h4>
              <p className="text-editorial-subtext text-sm mb-6">
                Placeholder for assessment instruments designed for various proficiency levels and language skills.
              </p>
              <ul className="space-y-3 text-editorial-subtext text-sm">
                <li className="flex items-start"><span className="text-editorial-accent mr-2">•</span> Reading comprehension test (Level placeholder)</li>
                <li className="flex items-start"><span className="text-editorial-accent mr-2">•</span> Grammar quiz (Level placeholder)</li>
                <li className="flex items-start"><span className="text-editorial-accent mr-2">•</span> Vocabulary assessment (Level placeholder)</li>
                <li className="flex items-start"><span className="text-editorial-accent mr-2">•</span> Final exam (Course placeholder)</li>
              </ul>
            </motion.div>

            {/* Rubrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.7 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h4 className="text-xl font-serif font-bold text-editorial-navy mb-4">Rubrics</h4>
              <p className="text-editorial-subtext text-sm mb-6">
                Placeholder for assessment rubrics for evaluating student performance across different skill areas.
              </p>
              <ul className="space-y-3 text-editorial-subtext text-sm">
                <li className="flex items-start"><span className="text-editorial-accent mr-2">•</span> Speaking assessment rubric</li>
                <li className="flex items-start"><span className="text-editorial-accent mr-2">•</span> Writing assessment rubric</li>
                <li className="flex items-start"><span className="text-editorial-accent mr-2">•</span> Project-based learning rubric</li>
                <li className="flex items-start"><span className="text-editorial-accent mr-2">•</span> Presentation rubric</li>
              </ul>
            </motion.div>

            {/* Needs Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.8 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h4 className="text-xl font-serif font-bold text-editorial-navy mb-4">Needs Analysis Tools & Reports</h4>
              <p className="text-editorial-subtext text-sm mb-6">
                Placeholder for learner needs analysis instruments and findings reports.
              </p>
              <ul className="space-y-3 text-editorial-subtext text-sm">
                <li className="flex items-start"><span className="text-editorial-accent mr-2">•</span> Student needs survey (Context placeholder)</li>
                <li className="flex items-start"><span className="text-editorial-accent mr-2">•</span> Needs analysis report (Program placeholder)</li>
                <li className="flex items-start"><span className="text-editorial-accent mr-2">•</span> Learning goals assessment tool</li>
                <li className="flex items-start"><span className="text-editorial-accent mr-2">•</span> Placement test (Level placeholder)</li>
              </ul>
            </motion.div>

            {/* Course/Curriculum Evaluations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.9 }}
              className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h4 className="text-xl font-serif font-bold text-editorial-navy mb-4">Course & Curriculum Evaluations</h4>
              <p className="text-editorial-subtext text-sm mb-6">
                Placeholder for program evaluation reports showing analysis and improvement initiatives.
              </p>
              <ul className="space-y-3 text-editorial-subtext text-sm">
                <li className="flex items-start"><span className="text-editorial-accent mr-2">•</span> Course evaluation summary (Course placeholder)</li>
                <li className="flex items-start"><span className="text-editorial-accent mr-2">•</span> Curriculum review report (Program placeholder)</li>
                <li className="flex items-start"><span className="text-editorial-accent mr-2">•</span> Student feedback analysis</li>
                <li className="flex items-start"><span className="text-editorial-accent mr-2">•</span> Program improvement recommendations</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
