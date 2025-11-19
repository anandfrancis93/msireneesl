'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Star, Quote, BookOpen, GraduationCap, Globe, Plus, Minus, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { LessonPlanAsset, ResearchAsset, MaterialsAsset } from './EditorialAssets';

interface HomeProps {
  setActivePage: (page: string) => void;
}

export default function Home({ setActivePage }: HomeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Progressive Disclosure state
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [showPhilosophy, setShowPhilosophy] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null);
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section className="min-h-screen flex flex-col bg-editorial-bg text-editorial-text font-sans selection:bg-editorial-accent/30">

      {/* Hero Section: The Cover Story */}
      <div className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden">
        {/* Decorative Line */}
        <div className="absolute top-0 left-8 h-full w-px bg-editorial-border hidden lg:block" />
        <div className="absolute top-0 right-8 h-full w-px bg-editorial-border hidden lg:block" />

        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Hero Content: Typography */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-12 space-y-8 text-center flex flex-col items-center"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-4 justify-center">
                <div className="h-px w-12 bg-editorial-accent" />
                <span className="uppercase tracking-[0.2em] text-sm font-medium text-editorial-subtext">Est. 2012</span>
                <div className="h-px w-12 bg-editorial-accent" />
              </motion.div>

              <motion.h1 variants={fadeInUp} className="font-serif text-6xl sm:text-7xl lg:text-9xl leading-[1.1] text-editorial-navy">
                The Art of <br />
                <span className="italic text-editorial-accent">Language.</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-xl sm:text-2xl text-editorial-subtext max-w-3xl mx-auto leading-relaxed font-light">
                Bridging cultures through expert English instruction. A research-backed approach to mastering communication.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4 items-center justify-center">
                <button
                  onClick={() => {
                    const element = document.getElementById('curriculum');
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="group relative px-10 py-4 bg-editorial-navy text-white overflow-hidden transition-all hover:shadow-xl w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center gap-3 font-medium tracking-wide justify-center">
                    Explore Curriculum <ArrowRight className="w-4 h-4" />
                  </span>
                  <div className="absolute inset-0 bg-editorial-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </button>

                <button
                  onClick={() => setActivePage('about-me')}
                  className="group px-10 py-4 border-2 border-editorial-navy text-editorial-navy hover:bg-editorial-navy hover:text-white transition-colors duration-300 w-full sm:w-auto"
                >
                  <span className="font-medium tracking-wide">Meet Ms. Irene</span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-editorial-subtext"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-editorial-border" />
        </motion.div>
      </div>

      {/* Philosophy Section: The Editorial */}
      <div className="py-24 bg-white border-y border-editorial-border" ref={ref}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className={showPhilosophy ? "lg:col-span-12" : "lg:col-span-12 text-center max-w-2xl mx-auto"}>
              <h2 className="font-serif text-4xl lg:text-5xl text-editorial-navy mb-8">
                Teaching <br />
                <span className="italic text-editorial-accent">Philosophy</span>
              </h2>
              <div className={`w-16 h-1 bg-editorial-navy mb-8 ${!showPhilosophy ? 'mx-auto' : ''}`} />
              <p className="text-editorial-subtext leading-relaxed mb-8 text-lg">
                Education is not just about transferring knowledge; it is about igniting a curiosity that lasts a lifetime. My approach combines rigorous academic standards with a deep empathy for the learner's journey.
              </p>

              {!showPhilosophy && (
                <button
                  onClick={() => setShowPhilosophy(true)}
                  className="inline-flex items-center gap-2 text-editorial-navy font-medium border-b-2 border-editorial-navy pb-1 hover:text-editorial-accent hover:border-editorial-accent transition-colors"
                >
                  Explore My Approach
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

            {showPhilosophy && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-12 grid md:grid-cols-2 gap-12 mt-8"
              >
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <Quote className="w-10 h-10 text-editorial-accent/50" />
                  <h3 className="font-serif text-2xl text-editorial-navy">Communicative Approach</h3>
                  <p className="text-editorial-subtext leading-relaxed">
                    Language lives in interaction. We focus on real-world usage, moving beyond textbooks to authentic, meaningful communication that prepares you for global opportunities.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <Globe className="w-10 h-10 text-editorial-accent/50" />
                  <h3 className="font-serif text-2xl text-editorial-navy">Cultural Intelligence</h3>
                  <p className="text-editorial-subtext leading-relaxed">
                    Understanding a language means understanding its culture. My lessons integrate cultural nuances, fostering not just fluency, but true intercultural competence.
                  </p>
                </motion.div>

                <div className="md:col-span-2 text-center mt-4">
                  <button
                    onClick={() => setActivePage('teaching-philosophy')}
                    className="text-editorial-subtext hover:text-editorial-navy transition-colors text-sm border-b border-transparent hover:border-editorial-navy pb-1"
                  >
                    Read Full Statement
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Curriculum Section: The Catalog */}
      <div id="curriculum" className="py-24 bg-editorial-bg">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="uppercase tracking-[0.2em] text-sm font-medium text-editorial-accent mb-4 block">Academic Offerings</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-editorial-navy mb-6">Curriculum & Services</h2>
            <p className="text-editorial-subtext text-lg">
              Tailored instruction designed to meet rigorous academic and professional standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Private Tutoring",
                subtitle: "One-on-One Instruction",
                price: "$50",
                period: "per session",
                desc: "Bespoke lessons tailored to your specific goals, whether academic, professional, or personal.",
                features: ["Custom Syllabus", "Flexible Timing", "Detailed Feedback"]
              },
              {
                title: "Conversation Seminar",
                subtitle: "Small Group Practice",
                price: "$30",
                period: "per session",
                desc: "Guided discussions on complex topics designed to improve fluency, vocabulary, and confidence.",
                features: ["Max 4 Students", "Current Events", "Peer Interaction"]
              },
              {
                title: "Mastery Course",
                subtitle: "Intensive Program",
                price: "$150",
                period: "full course",
                desc: "A structured, multi-week deep dive into specific language skills such as Academic Writing or Business English.",
                features: ["Certificate", "Course Materials", "Final Assessment"]
              }
            ].map((item, idx) => {
              const isExpanded = expandedCard === idx;

              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 border border-editorial-border hover:border-editorial-accent transition-colors duration-300 group"
                >
                  <div className="mb-6">
                    <h3 className="font-serif text-2xl text-editorial-navy group-hover:text-editorial-accent transition-colors">{item.title}</h3>
                    <p className="text-editorial-subtext text-sm italic">{item.subtitle}</p>
                  </div>
                  <div className={`${isExpanded ? 'mb-6' : 'mb-8'} ${!isExpanded ? 'pb-8 border-b border-editorial-border' : ''}`}>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-serif text-editorial-navy">{item.price}</span>
                      <span className="text-editorial-subtext text-sm">{item.period}</span>
                    </div>
                    <p className="mt-4 text-editorial-subtext leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-3 mb-6 pb-6 border-b border-editorial-border">
                        {item.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-3 text-sm text-editorial-navy">
                            <div className="w-1 h-1 bg-editorial-accent rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <button className="w-full py-3 border border-editorial-navy text-editorial-navy uppercase tracking-widest text-xs font-medium hover:bg-editorial-navy hover:text-white transition-colors">
                        Inquire Now
                      </button>
                    </motion.div>
                  )}

                  <button
                    onClick={() => setExpandedCard(isExpanded ? null : idx)}
                    className="w-full text-editorial-accent hover:text-editorial-navy transition-colors text-sm font-medium mt-4 flex items-center justify-center gap-2"
                  >
                    {isExpanded ? 'Hide Details' : 'View Details'}
                    <ArrowRight className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                  </button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Experience Teaser: The Timeline */}
      <div className="py-24 bg-editorial-bg border-y border-editorial-border">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl mb-8 text-editorial-navy">
                A Legacy of <br />
                <span className="italic text-editorial-accent">Excellence</span>
              </h2>
              <div className="space-y-8">
                {/* Academic Foundation */}
                <div 
                  className="flex gap-6 cursor-pointer group"
                  onClick={() => setExpandedExperience(expandedExperience === 'academic' ? null : 'academic')}
                >
                  <div className="flex-shrink-0 w-12 h-12 border border-editorial-border flex items-center justify-center rounded-full text-editorial-navy group-hover:bg-editorial-navy group-hover:text-white transition-colors duration-300">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl font-serif mb-2 text-editorial-navy group-hover:text-editorial-accent transition-colors">Academic Foundation</h4>
                      {expandedExperience === 'academic' ? <Minus className="w-4 h-4 text-editorial-accent" /> : <Plus className="w-4 h-4 text-editorial-subtext" />}
                    </div>
                    <p className="text-editorial-subtext leading-relaxed">
                      Master's in TESOL (In Progress), Bachelor's in Education, and specialized training in Psychology.
                    </p>
                    
                    <motion.div 
                      initial={false}
                      animate={{ height: expandedExperience === 'academic' ? 'auto' : 0, opacity: expandedExperience === 'academic' ? 1 : 0 }}
                      className="overflow-hidden"
                    >
                      <ul className="pt-4 space-y-2 text-sm text-editorial-navy border-l-2 border-editorial-accent/30 pl-4 mt-2">
                        <li>• MA in TESOL (Current)</li>
                        <li>• BA in Education (Magna Cum Laude)</li>
                        <li>• Certifications in Special Education</li>
                        <li>• Psychology Minor</li>
                      </ul>
                    </motion.div>
                  </div>
                </div>

                {/* Experience */}
                <div 
                  className="flex gap-6 cursor-pointer group"
                  onClick={() => setExpandedExperience(expandedExperience === 'experience' ? null : 'experience')}
                >
                  <div className="flex-shrink-0 w-12 h-12 border border-editorial-border flex items-center justify-center rounded-full text-editorial-navy group-hover:bg-editorial-navy group-hover:text-white transition-colors duration-300">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl font-serif mb-2 text-editorial-navy group-hover:text-editorial-accent transition-colors">13+ Years Experience</h4>
                      {expandedExperience === 'experience' ? <Minus className="w-4 h-4 text-editorial-accent" /> : <Plus className="w-4 h-4 text-editorial-subtext" />}
                    </div>
                    <p className="text-editorial-subtext leading-relaxed">
                      Over a decade of teaching across 5+ countries, adapting to diverse learning styles and cultural contexts.
                    </p>

                    <motion.div 
                      initial={false}
                      animate={{ height: expandedExperience === 'experience' ? 'auto' : 0, opacity: expandedExperience === 'experience' ? 1 : 0 }}
                      className="overflow-hidden"
                    >
                      <ul className="pt-4 space-y-2 text-sm text-editorial-navy border-l-2 border-editorial-accent/30 pl-4 mt-2">
                        <li>• Taught in USA, Spain, Japan, and more</li>
                        <li>• 1000+ Students Mentored</li>
                        <li>• Specialized in ESL & Business English</li>
                        <li>• Curriculum Development Expert</li>
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <Link href="/work-experience" className="inline-flex items-center gap-2 text-editorial-navy hover:text-editorial-accent transition-colors border-b border-editorial-navy pb-1 hover:border-editorial-accent">
                  View Full CV <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 border border-editorial-border">
              <div className="p-10 border-r border-b border-editorial-border text-center bg-white">
                <span className="block font-serif text-5xl text-editorial-navy mb-2">13+</span>
                <span className="text-xs uppercase tracking-widest text-editorial-subtext">Years Teaching</span>
              </div>
              <div className="p-10 border-b border-editorial-border text-center bg-white">
                <span className="block font-serif text-5xl text-editorial-navy mb-2">05</span>
                <span className="text-xs uppercase tracking-widest text-editorial-subtext">Countries</span>
              </div>
              <div className="p-10 border-r border-editorial-border text-center bg-white">
                <span className="block font-serif text-5xl text-editorial-navy mb-2">1k+</span>
                <span className="text-xs uppercase tracking-widest text-editorial-subtext">Students</span>
              </div>
              <div className="p-10 text-center bg-white">
                <span className="block font-serif text-5xl text-editorial-navy mb-2">100%</span>
                <span className="text-xs uppercase tracking-widest text-editorial-subtext">Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials: The Word of Mouth */}
      <div className="py-24 bg-editorial-bg border-b border-editorial-border">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <span className="uppercase tracking-[0.2em] text-sm font-medium text-editorial-accent mb-4 block">Student Success</span>
             <h2 className="font-serif text-4xl lg:text-5xl text-editorial-navy mb-6">Words from the <span className="italic text-editorial-accent">Community</span></h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Featured Testimonial - Always Visible */}
            <div className="lg:col-span-3 bg-white p-10 border border-editorial-border relative">
              <div className="relative z-10 max-w-4xl mx-auto text-center">
                <p className="font-serif text-2xl text-editorial-navy leading-relaxed mb-8">
                  "Ms. Irene changed my vision about grammar and writing because she taught me with love. I learned a lot with her, and I am so grateful for her. She is amazing, and she is a big example to learn another language."
                </p>
                <div className="flex items-center justify-center gap-3">
                   <div className="w-8 h-px bg-editorial-accent" />
                   <span className="uppercase tracking-widest text-sm font-bold text-editorial-navy">Isabella M.</span>
                   <span className="text-editorial-subtext text-sm">Student</span>
                   <div className="w-8 h-px bg-editorial-accent" />
                </div>
              </div>
            </div>

            {/* Hidden Testimonials - Revealed on Click */}
            {showAllTestimonials && (
              <>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white p-8 border border-editorial-border"
                >
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-editorial-accent text-editorial-accent" />)}
                  </div>
                  <p className="text-editorial-subtext mb-6 italic">"Ms. Irene's teaching style is incredibly effective. I have seen a remarkable improvement in my English skills."</p>
                  <span className="font-serif text-editorial-navy block">Sarah T.</span>
                  <span className="text-xs text-editorial-subtext uppercase">Student</span>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white p-8 border border-editorial-border"
                >
                   <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-editorial-accent text-editorial-accent" />)}
                  </div>
                  <p className="text-editorial-subtext mb-6 italic">"Irene is an excellent teacher who believes in really teaching students. She is always willing to try new methods."</p>
                  <span className="font-serif text-editorial-navy block">Sarah L-M.</span>
                  <span className="text-xs text-editorial-subtext uppercase">Supervisor</span>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white p-8 border border-editorial-border"
                >
                   <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-editorial-accent text-editorial-accent" />)}
                  </div>
                  <p className="text-editorial-subtext mb-6 italic">"Learning English with Ms. Irene has been a game-changer for me. Her dedication boosted my confidence."</p>
                  <span className="font-serif text-editorial-navy block">Daniel L.</span>
                  <span className="text-xs text-editorial-subtext uppercase">Student</span>
                </motion.div>
              </>
            )}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => setShowAllTestimonials(!showAllTestimonials)}
              className="inline-flex items-center gap-2 px-8 py-3 border border-editorial-navy text-editorial-navy hover:bg-editorial-navy hover:text-white transition-colors duration-300 uppercase tracking-widest text-xs font-medium"
            >
              {showAllTestimonials ? 'Read Less' : 'Read More Stories'}
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAllTestimonials ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Featured Work: The Gallery */}
      <div className="py-24 bg-white">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12 border-b border-editorial-border pb-6">
            <h2 className="font-serif text-3xl text-editorial-navy">Selected Works</h2>
            <Link href="/portfolio" className="text-editorial-subtext hover:text-editorial-navy transition-colors text-sm uppercase tracking-widest">View All</Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Lesson Plans", cat: "Curriculum", link: "/tesol/lesson-plans", Asset: LessonPlanAsset },
              { title: "Research Papers", cat: "Scholarship", link: "/research-scholarship", Asset: ResearchAsset },
              { title: "Teaching Materials", cat: "Resources", link: "/portfolio", Asset: MaterialsAsset }
            ].map((item, idx) => (
              <Link key={idx} href={item.link} className="group block">
                <div className="aspect-[4/3] bg-white mb-6 relative overflow-hidden border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-editorial-accent">
                  {/* Top accent border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-editorial-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                  {/* Asset */}
                  <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-700 p-4">
                    <item.Asset />
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-editorial-accent mb-2 block">{item.cat}</span>
                    <h3 className="font-serif text-2xl text-editorial-navy group-hover:text-editorial-accent transition-colors">{item.title}</h3>
                  </div>
                  <ArrowRight className="w-5 h-5 text-editorial-border group-hover:text-editorial-navy transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}