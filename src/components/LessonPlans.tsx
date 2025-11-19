'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function LessonPlans() {
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
            Lesson <span className="italic text-editorial-accent">Plans</span>
          </h2>
          <p className="text-editorial-subtext max-w-2xl mx-auto text-lg leading-relaxed">
            Detailed lesson plans and teaching materials for ESL instruction
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="bg-white border border-editorial-border p-8 md:p-12 shadow-sm">
            <p className="text-editorial-subtext text-lg leading-relaxed font-light">
              Well-written lesson plans are essential for effective teaching, offering numerous benefits for both educators and students. They provide a clear roadmap for the lesson, ensuring the teacher knows what to teach, in what order, and within what time frame. This structure minimizes confusion, allows for smooth transitions, and keeps the lesson on track. By organizing content into manageable chunks and aligning learning objectives with activities and assessments, lesson plans enhance student learning by focusing on purposeful and engaging activities tailored to students' needs and learning styles. Clear objectives ensure that the teaching process leads to specific outcomes, while scaffolding and differentiated instruction address various abilities, promoting better comprehension and retention.
            </p>
          </div>
        </motion.div>

        {/* Integrated Lesson Plans */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <h3 className="text-3xl font-serif font-bold mb-8 text-center text-editorial-navy">
            Integrated Lesson Plans
          </h3>

          <div className="space-y-6">
            {/* Level 1 */}
            <div className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-editorial-bg border border-editorial-border rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-editorial-navy font-serif font-bold text-xl">1</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-serif font-bold mb-3 text-editorial-navy">Level 1</h4>
                  <p className="text-editorial-subtext leading-relaxed">
                    An integrated lesson plan is a teaching approach that combines multiple subject areas or skills into a single, cohesive lesson. This type of lesson plan is designed to help students make connections across disciplines, promoting a deeper understanding of the material by showing how concepts interrelate in real-world contexts.
                  </p>
                </div>
              </div>
            </div>

            {/* Level 3 */}
            <div className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-editorial-bg border border-editorial-border rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-editorial-navy font-serif font-bold text-xl">3</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-serif font-bold mb-3 text-editorial-navy">Level 3</h4>
                  <p className="text-editorial-subtext leading-relaxed">
                    An integrated lesson plan is a teaching approach that combines multiple subject areas or skills into a single, cohesive lesson. This type of lesson plan is designed to help students make connections across disciplines, promoting a deeper understanding of the material by showing how concepts interrelate in real-world contexts.
                  </p>
                </div>
              </div>
            </div>

            {/* Level 4 */}
            <div className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-editorial-bg border border-editorial-border rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-editorial-navy font-serif font-bold text-xl">4</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-serif font-bold mb-3 text-editorial-navy">Level 4</h4>
                  <p className="text-editorial-subtext leading-relaxed">
                    An integrated lesson plan is a teaching approach that combines multiple subject areas or skills into a single, cohesive lesson. This type of lesson plan is designed to help students make connections across disciplines, promoting a deeper understanding of the material by showing how concepts interrelate in real-world contexts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skill-Based Lesson Plans */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <h3 className="text-3xl font-serif font-bold mb-8 text-center text-editorial-navy">
            Skill-Based Lesson Plans
          </h3>

          <div className="space-y-6">
            {/* Foundations Level Reading */}
            <div className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-editorial-bg border border-editorial-border rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-editorial-navy font-serif font-bold text-xl">1</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-serif font-bold mb-2 text-editorial-navy">Foundations Level Reading</h4>
                  <p className="text-editorial-subtext leading-relaxed">
                    <strong className="text-editorial-navy font-semibold">Function:</strong> Students are able to understand the main ideas and major details of texts about personal and familiar topics. They understand concrete concepts about personal and familiar topics. They can sometimes guess unfamiliar words that are highly contextualized.
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Level Grammar */}
            <div className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-editorial-bg border border-editorial-border rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-editorial-navy font-serif font-bold text-xl">2</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-serif font-bold mb-2 text-editorial-navy">Academic Level Grammar</h4>
                  <p className="text-editorial-subtext leading-relaxed">
                    This course is based on principles of dynamic written corrective feedback as outlined in Hartshorn (2008) and Eddington (2014). Students will review grammar principles and concepts necessary to improve grammatical accuracy. Students will recognize and correct recurring errors in their writing.
                  </p>
                </div>
              </div>
            </div>

            {/* University Prep Listening & Speaking */}
            <div className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-editorial-bg border border-editorial-border rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-editorial-navy font-serif font-bold text-xl">3</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-serif font-bold mb-2 text-editorial-navy">University Prep Listening & Speaking</h4>
                  <p className="text-editorial-subtext leading-relaxed">
                    This course introduces students to basic academic speech so that they can listen accurately and speak effectively in basic academic contexts. In addition, it prepares them to take notes on academic lectures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Community Classes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <h3 className="text-3xl font-serif font-bold mb-8 text-center text-editorial-navy">
            Community Classes
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 border border-editorial-border shadow-sm text-center hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 bg-editorial-bg border border-editorial-border rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-editorial-navy font-serif font-bold text-2xl">1</span>
              </div>
              <h4 className="text-xl font-serif font-bold text-editorial-navy">Level 1</h4>
            </div>

            <div className="bg-white p-8 border border-editorial-border shadow-sm text-center hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 bg-editorial-bg border border-editorial-border rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-editorial-navy font-serif font-bold text-2xl">2</span>
              </div>
              <h4 className="text-xl font-serif font-bold text-editorial-navy">Level 2</h4>
            </div>

            <div className="bg-white p-8 border border-editorial-border shadow-sm text-center hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 bg-editorial-bg border border-editorial-border rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-editorial-navy font-serif font-bold text-2xl">3</span>
              </div>
              <h4 className="text-xl font-serif font-bold text-editorial-navy">Level 3</h4>
            </div>
          </div>
        </motion.div>

        {/* Course Syllabi */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <h3 className="text-3xl font-serif font-bold mb-8 text-center text-editorial-navy">
            Course Syllabi
          </h3>

          <div className="bg-white border border-editorial-border rounded-sm p-8 md:p-12 space-y-6 shadow-sm">
            <p className="text-editorial-subtext text-lg leading-relaxed">
              A good course syllabus is a comprehensive and well-organized document that serves as a contract, guide, and communication tool between instructors and students. It outlines the key components of the course, including its objectives, structure, expectations, and requirements, providing clarity and setting the tone for the learning experience.
            </p>

            <p className="text-editorial-subtext text-lg leading-relaxed">
              A well-crafted syllabus typically includes the course title, instructor information (such as name, contact details, and office hours), and a brief course description. It clearly states the learning objectives or outcomes, detailing what students are expected to achieve by the end of the course. The syllabus also includes a course schedule with a breakdown of topics, readings, assignments, exams, and important deadlines, helping students manage their time effectively.
            </p>
          </div>
        </motion.div>

        {/* Course Levels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-3xl font-serif font-bold mb-8 text-center text-editorial-navy">
            Course Levels
          </h3>

          <div className="space-y-6">
            {/* FB */}
            <div className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="px-4 py-2 bg-editorial-bg border border-editorial-border rounded-sm flex-shrink-0">
                  <span className="text-editorial-navy font-serif font-bold text-lg">FB</span>
                </div>
                <div className="flex-1">
                  <p className="text-editorial-subtext leading-relaxed">
                    This course helps students improve their reading ability by focusing on the following: understanding both main ideas and major details of texts, implementing reading strategies, acquiring new vocabulary, phonetic decoding skills, extensive reading, and fluency. The texts used in this course are narrative, simple, and straightforward, and they deal with personal and familiar topics.
                  </p>
                </div>
              </div>
            </div>

            {/* FC */}
            <div className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="px-4 py-2 bg-editorial-bg border border-editorial-border rounded-sm flex-shrink-0">
                  <span className="text-editorial-navy font-serif font-bold text-lg">FC</span>
                </div>
                <div className="flex-1">
                  <p className="text-editorial-subtext leading-relaxed">
                    This course helps students improve their reading ability by focusing on the following: comprehension of the text, implementing reading strategies, acquiring new vocabulary, extensive reading, and fluency. The texts used in this course are primarily narrative and are organized in simple paragraphs.
                  </p>
                </div>
              </div>
            </div>

            {/* AB */}
            <div className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="px-4 py-2 bg-editorial-bg border border-editorial-border rounded-sm flex-shrink-0">
                  <span className="text-editorial-navy font-serif font-bold text-lg">AB</span>
                </div>
                <div className="flex-1">
                  <p className="text-editorial-subtext leading-relaxed">
                    This course helps prepare students for research-based writing. Students participate in writing conferences, peer review, and other activities to help enhance their writing processes and products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
