'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Image as ImageIcon, ArrowRight, Quote, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';

export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    bio: false,
    philosophy: false,
    highlights: false
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const expandSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: true
    }));
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="min-h-screen bg-editorial-bg text-editorial-text font-sans selection:bg-editorial-accent/30 pt-32 pb-24">
      <div className="container-custom" ref={ref}>

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="uppercase tracking-[0.2em] text-sm font-medium text-editorial-accent mb-4 block">Professional Profile</span>
            <h1 className="font-serif text-5xl lg:text-6xl text-editorial-navy mb-6">About Ms. Irene</h1>
            <div className="w-24 h-1 bg-editorial-navy mx-auto" />
          </motion.div>
        </div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-4 justify-center mb-20"
        >
          {[
            { label: "Biography", id: "about-me", sectionKey: 'bio' },
            { label: "Philosophy", id: "teaching-philosophy", sectionKey: 'philosophy' },
            { label: "Highlights", id: "highlights", sectionKey: 'highlights' },
            { label: "Gallery", id: "photo-gallery", sectionKey: null }
          ].map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (item.sectionKey) expandSection(item.sectionKey);
                setTimeout(() => {
                   const element = document.getElementById(item.id);
                   element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
              }}
              className="px-6 py-3 border border-editorial-border text-editorial-navy hover:border-editorial-navy hover:bg-editorial-navy hover:text-white transition-all duration-300 text-sm uppercase tracking-widest font-medium"
            >
              {item.label}
            </button>
          ))}
        </motion.div>

        {/* About Me Section */}
        <motion.div
          id="about-me"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-5xl mx-auto mb-32 scroll-mt-32"
        >
          <div className="grid md:grid-cols-12 gap-12 items-start">
            {/* Professional Photo */}
            <div className="md:col-span-5 relative">
              <div className="relative aspect-[4/5] w-full bg-white p-4 shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="relative h-full w-full overflow-hidden bg-gray-100">
                  <Image
                    src="/professional-photo.avif"
                    alt="Ms. Irene"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-editorial-accent/10 rounded-full -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-editorial-navy/5 rounded-full -z-10" />
            </div>

            {/* Bio Text */}
            <div className="md:col-span-7 space-y-8">
              <div>
                <h3 className="font-serif text-3xl text-editorial-navy mb-6">A Global Educator</h3>
                <p className="text-editorial-subtext text-lg leading-relaxed mb-6">
                  My name is Irene. I am from New Delhi, India. I have over 13 years of work experience in Administration, Customer Service, Training, and ESL Teaching. I have traveled to different countries teaching students and prospective ESL Teachers.
                </p>
                
                <AnimatePresence>
                  {expandedSections.bio && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <p className="text-editorial-subtext text-lg leading-relaxed mb-6">
                        I currently live in the USA, where I am studying to be a trained TESOL teacher. My journey has been defined by a passion for connecting with people from diverse backgrounds and empowering them through language.
                      </p>
                      <div className="bg-white p-8 border-l-4 border-editorial-accent shadow-sm mt-8">
                        <h4 className="font-serif text-xl text-editorial-navy mb-3">Portfolio Mission</h4>
                        <p className="text-editorial-subtext italic">
                          "To demonstrate my commitment to student-centered learning, cultural responsiveness, and evidence-based teaching practices that empower language learners to achieve their goals."
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => toggleSection('bio')}
                  className="mt-4 inline-flex items-center gap-2 text-editorial-navy font-medium border-b border-editorial-navy pb-1 hover:text-editorial-accent hover:border-editorial-accent transition-colors text-sm uppercase tracking-widest"
                >
                  {expandedSections.bio ? 'Read Less' : 'Read Full Bio'}
                  {expandedSections.bio ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Teaching Philosophy */}
        <motion.div
          id="teaching-philosophy"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto mb-32 scroll-mt-32"
        >
          <div className="text-center mb-12">
            <h3 className="font-serif text-4xl text-editorial-navy mb-4">Teaching Philosophy</h3>
            <p className="text-editorial-subtext max-w-2xl mx-auto">
              Rooted in the belief that language learning combines cognitive processes with social, emotional, and experiential journeys.
            </p>
          </div>

          <div className="grid gap-8">
            <div className="bg-white p-10 border border-editorial-border shadow-sm relative overflow-hidden">
              <Quote className="absolute top-6 right-6 w-24 h-24 text-editorial-bg text-opacity-50 -z-0" />
              <div className="relative z-10">
                <h4 className="font-serif text-2xl text-editorial-navy mb-6">Core Beliefs</h4>
                <p className="text-editorial-subtext leading-relaxed mb-6">
                  I believe that effective language learning occurs when students are at the center of the instructional process. Every learner presents unique needs, skills, and experiences in the classroom, and it is essential to customize teaching strategies to address these variances.
                </p>
                
                <AnimatePresence>
                  {expandedSections.philosophy && (
                    <motion.div
                       initial={{ opacity: 0, height: 0 }}
                       animate={{ opacity: 1, height: 'auto' }}
                       exit={{ opacity: 0, height: 0 }}
                       transition={{ duration: 0.4 }}
                       className="overflow-hidden"
                    >
                      <p className="text-editorial-subtext leading-relaxed">
                        Understanding that language and culture are intrinsically linked, I integrate cultural awareness within language instruction. This approach promotes intercultural competence, preparing learners with the skills to navigate the cultural and social complexities of communication.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <button
                  onClick={() => toggleSection('philosophy')}
                  className="mt-6 inline-flex items-center gap-2 text-editorial-navy font-medium border-b border-editorial-navy pb-1 hover:text-editorial-accent hover:border-editorial-accent transition-colors text-sm uppercase tracking-widest"
                >
                  {expandedSections.philosophy ? 'Read Less' : 'Read More'}
                  {expandedSections.philosophy ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <AnimatePresence>
               {expandedSections.philosophy && (
                <motion.div
                   initial={{ opacity: 0, height: 0 }}
                   animate={{ opacity: 1, height: 'auto' }}
                   exit={{ opacity: 0, height: 0 }}
                   transition={{ duration: 0.4 }}
                   className="overflow-hidden"
                >
                  <div className="grid md:grid-cols-3 gap-12 mt-8">
                    {[
                      { title: "Communicative", desc: "Real-world communication and functional language use through authentic interactions." },
                      { title: "Task-Based", desc: "Practical tasks that prompt students to use English in real-world situations." },
                      { title: "Inclusive", desc: "A supportive environment where humor and connection encourage risk-taking." }
                    ].map((item, idx) => (
                      <div key={idx} className="relative pt-8 border-t border-editorial-navy/20">
                        <span className="absolute -top-3.5 left-0 bg-editorial-bg pr-4 text-editorial-accent font-serif italic text-lg">0{idx + 1}</span>
                        <h5 className="font-serif text-2xl text-editorial-navy mb-4">{item.title}</h5>
                        <p className="text-editorial-subtext leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
               )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Highlights Section */}
        <motion.div
          id="highlights"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-32 scroll-mt-32"
        >
          <div className="flex items-end justify-between mb-12 border-b border-editorial-border pb-6">
            <div>
              <span className="uppercase tracking-[0.2em] text-sm font-medium text-editorial-accent mb-2 block">Featured Work</span>
              <h3 className="font-serif text-4xl text-editorial-navy">Highlights</h3>
            </div>
            
            <button
              onClick={() => toggleSection('highlights')}
              className="text-editorial-subtext hover:text-editorial-navy transition-colors text-sm uppercase tracking-widest hidden sm:block"
            >
              {expandedSections.highlights ? 'View Less' : 'View All'}
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Lesson Plans", desc: "Comprehensive plans demonstrating communicative language teaching.", link: "/tesol/lesson-plans" },
              { title: "Book Reports", desc: "In-depth analysis and reflections on influential TESOL literature.", link: "/tesol/book-reports" },
              { title: "Philosophy", desc: "Detailed statement and action research case studies.", link: "/teaching-philosophy" },
              { title: "Experience", desc: "13+ years of teaching across multiple countries.", link: "/work-experience" },
              { title: "Portfolio", desc: "Instructional materials and innovative teaching projects.", link: "/portfolio" },
              { title: "Testimonials", desc: "Feedback highlighting the impact of my teaching methods.", link: "/testimonials" }
            ].slice(0, expandedSections.highlights ? 6 : 3).map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="group bg-white p-8 border border-editorial-border hover:border-editorial-accent transition-all duration-300 hover:shadow-lg"
              >
                <h4 className="font-serif text-2xl text-editorial-navy mb-4 group-hover:text-editorial-accent transition-colors">{item.title}</h4>
                <p className="text-editorial-subtext text-sm leading-relaxed mb-6">{item.desc}</p>
                <div className="flex items-center gap-2 text-editorial-navy text-sm font-medium uppercase tracking-wider group-hover:gap-3 transition-all">
                  View <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
           <div className="mt-8 text-center sm:hidden">
             <button
              onClick={() => toggleSection('highlights')}
              className="text-editorial-subtext hover:text-editorial-navy transition-colors text-sm uppercase tracking-widest border-b border-editorial-border pb-1"
            >
              {expandedSections.highlights ? 'View Less' : 'View All'}
            </button>
           </div>
        </motion.div>

        {/* Gallery Section */}
        <motion.div
          id="photo-gallery"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="scroll-mt-32"
        >
          <h3 className="font-serif text-4xl text-editorial-navy mb-12 text-center">Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((index) => (
              <div
                key={index}
                className="aspect-square bg-white border border-editorial-border p-2 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-full h-full bg-editorial-bg flex items-center justify-center">
                  <ImageIcon className="w-8 h-8 text-editorial-border" />
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-editorial-subtext text-sm mt-8 italic font-serif">
            More images coming soon...
          </p>
        </motion.div>

      </div>
    </section>
  );
}
