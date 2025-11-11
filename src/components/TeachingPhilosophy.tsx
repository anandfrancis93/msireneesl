'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function TeachingPhilosophy() {
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
            Teaching <span className="gradient-text">Philosophy</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            My approach to ESL instruction and student development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-dark space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              A Student-Centered Approach to Language and Culture
            </h3>

            <p className="text-text-secondary leading-relaxed">
              The English language, one of the official languages of India, is only spoken by some, and even those who often encounter difficulties due to mother tongue influence (MTI) can find their speech hard to understand. I have seen the struggles of friends and loved ones who experience obstacles in socializing, finding jobs, or gaining respect in their communities because of limited English skills. These experiences motivated me to pursue a career in teaching ESL/EFL (English as a second or foreign language). As an ESL teacher, my main objective is to create an engaging, comprehensive, and supportive environment where students from diverse cultural and educational backgrounds can enhance their English language abilities. My teaching philosophy is rooted in the belief that language learning combines cognitive processes with social, emotional, and experiential journeys that enable students to connect, communicate, and excel in their personal and professional pursuits. With excellent verbal skills, a passion for teaching, years of TESOL training, and over a decade of experience, I am prepared to assist others in overcoming these challenges and flourishing.
            </p>

            <p className="text-text-secondary leading-relaxed">
              My primary goal is to develop a classroom environment based on mutual respect, encouragement, and positivity, where humor and connection are essential. Understanding that language learning can often seem overwhelming, I prioritize creating a supportive space that encourages students to take risks and face challenges with confidence. By building strong relationships and adopting an approachable, student-focused demeanor, I strive to create an atmosphere where learners feel comfortable expressing their ideas, asking questions, and learning from their mistakes.
            </p>

            <p className="text-text-secondary leading-relaxed">
              Another key aspect of my teaching philosophy is the integrated approach to cultural awareness within language instruction. From personal experience, I understand that language and culture are intrinsically linked, and comprehending cultural subtleties is critical for effective and meaningful communication. To achieve this, I create lessons that include cultural comparisons and discussions, encouraging students to expand their perspectives while respecting their cultural backgrounds. For instance, when examining idiomatic expressions, I invite students to share equivalent phrases from their native languages, promoting a comprehensive and energetic learning environment. As Byram (1997) points out, language education should promote "intercultural competence," preparing learners with the skills to navigate the cultural and social complexities of communication with both confidence and sensitivity.
            </p>

            <p className="text-text-secondary leading-relaxed">
              Next, student-centered learning is the basis for successful language instruction. Every learner presents unique needs, skills, and experiences in the classroom, and it is essential to customize teaching strategies to address these variances. I aim to promote an environment where all students feel supported and challenged through methods like differentiated instruction, scaffolding, and collaborative activities. As Brown (2007) states, "Effective teaching begins with a thorough understanding of students' needs and the flexibility to adjust methods as needed." For example, in beginner-level courses, I focus on vocabulary development and basic conversational skills through role-playing and visual aids. In contrast, I integrate authentic resources such as podcasts, articles, and debates for advanced learners to encourage critical thinking and improve fluency.
            </p>

            <p className="text-text-secondary leading-relaxed">
              Finally, I place significant importance on communicative competence rather than relying solely on rote memorization. My lessons are oriented around real-world situations that prompt students to use English meaningfully and practically. By emphasizing functional language use—such as ordering food at a restaurant, participating in job interviews, or expressing opinions during group discussions—I aim to build confidence in students' abilities to navigate various English-speaking environments. Engaging activities like pair work, group projects, and problem-solving exercises are fundamental to my approach, as they provide opportunities for authentic interaction and collaboration. My strategy is knowledgeable by Canale and Swain's (1980) framework of communicative competence, which includes grammatical, sociolinguistic, discourse, and strategic dimensions. This comprehensive viewpoint ensures students develop linguistic accuracy and the ability to use language effectively in different contexts.
            </p>

            <p className="text-text-secondary leading-relaxed">
              In a nutshell, my teaching philosophy reflects a commitment to equipping ESL learners with both linguistic proficiency and cultural awareness. By employing student-centered methods, engaging communicative practices, cultural integration, and ongoing assessments, I aim to inspire students to grow into confident, capable, and enthusiastic communicators of the English language.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
