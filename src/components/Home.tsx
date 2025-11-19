'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Star, Quote, BookOpen, GraduationCap, Globe } from 'lucide-react';
import Image from 'next/image';

interface HomeProps {
  setActivePage: (page: string) => void;
}

export default function Home({ setActivePage }: HomeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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

        <div className="container-custom relative z-10 pt-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Typography */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-7 space-y-8"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-4">
                <div className="h-px w-12 bg-editorial-accent" />
                <span className="uppercase tracking-[0.2em] text-sm font-medium text-editorial-subtext">Est. 2012</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="font-serif text-6xl sm:text-7xl lg:text-8xl leading-[1.1] text-editorial-navy">
                The Art of <br />
                <span className="italic text-editorial-accent">Language.</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-xl sm:text-2xl text-editorial-subtext max-w-xl leading-relaxed font-light">
                Bridging cultures through expert English instruction. A research-backed approach to mastering communication.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-6 pt-4">
                <button
                  onClick={() => {
                    const element = document.getElementById('curriculum');
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="group relative px-8 py-4 bg-editorial-navy text-white overflow-hidden transition-all hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center gap-3 font-medium tracking-wide">
                    Explore Curriculum <ArrowRight className="w-4 h-4" />
                  </span>
                  <div className="absolute inset-0 bg-editorial-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </button>

                <button
                  onClick={() => setActivePage('about-me')}
                  className="group px-8 py-4 border border-editorial-navy text-editorial-navy hover:bg-editorial-navy hover:text-white transition-colors duration-300"
                >
                  <span className="font-medium tracking-wide">Meet Ms. Irene</span>
                </button>
              </motion.div>
            </motion.div>

            {/* Right Column: Imagery */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
                {/* Abstract shapes backing */}
                <div className="absolute -top-6 -right-6 w-full h-full border-2 border-editorial-accent/30" />
                <div className="absolute -bottom-6 -left-6 w-full h-full bg-editorial-border/50" />

                {/* Main Image Container */}
                <div className="relative h-full w-full overflow-hidden bg-white shadow-2xl">
                  <Image
                    src="/professional-photo.avif"
                    alt="Ms. Irene"
                    fill
                    className="object-cover transition-all duration-700 ease-in-out"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-editorial-subtext"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-editorial-border" />
        </motion.div>
      </div>

      {/* Philosophy Section: The Editorial */}
      <div className="py-24 bg-white border-y border-editorial-border" ref={ref}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-4xl lg:text-5xl text-editorial-navy mb-8">
                Teaching <br />
                <span className="italic text-editorial-accent">Philosophy</span>
              </h2>
              <div className="w-16 h-1 bg-editorial-navy mb-8" />
              <p className="text-editorial-subtext leading-relaxed mb-8">
                Education is not just about transferring knowledge; it is about igniting a curiosity that lasts a lifetime. My approach combines rigorous academic standards with a deep empathy for the learner's journey.
              </p>
              <button
                onClick={() => window.location.href = '/teaching-philosophy'}
                className="text-editorial-navy font-medium border-b border-editorial-navy pb-1 hover:text-editorial-accent hover:border-editorial-accent transition-colors"
              >
                Read Full Statement
              </button>
            </div>

            <div className="lg:col-span-8 grid md:grid-cols-2 gap-12">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
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
                whileInView="visible"
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
            </div>
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
            ].map((item, idx) => (
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
                <div className="mb-8 pb-8 border-b border-editorial-border">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-serif text-editorial-navy">{item.price}</span>
                    <span className="text-editorial-subtext text-sm">{item.period}</span>
                  </div>
                  <p className="mt-4 text-editorial-subtext leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
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
            ))}
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
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 border border-editorial-border flex items-center justify-center rounded-full text-editorial-navy">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2 text-editorial-navy">Academic Foundation</h4>
                    <p className="text-editorial-subtext leading-relaxed">
                      Master's in TESOL (In Progress), Bachelor's in Education, and specialized training in Psychology and Special Education.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 border border-editorial-border flex items-center justify-center rounded-full text-editorial-navy">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2 text-editorial-navy">13+ Years Experience</h4>
                    <p className="text-editorial-subtext leading-relaxed">
                      Over a decade of teaching across 5+ countries, adapting to diverse learning styles and cultural contexts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <a href="/work-experience" className="inline-flex items-center gap-2 text-editorial-navy hover:text-editorial-accent transition-colors border-b border-editorial-navy pb-1 hover:border-editorial-accent">
                  View Full CV <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 border border-editorial-border">
              <div className="p-10 border-r border-b border-editorial-border text-center">
                <span className="block font-serif text-5xl text-editorial-navy mb-2">13+</span>
                <span className="text-xs uppercase tracking-widest text-editorial-subtext">Years Teaching</span>
              </div>
              <div className="p-10 border-b border-editorial-border text-center">
                <span className="block font-serif text-5xl text-editorial-navy mb-2">05</span>
                <span className="text-xs uppercase tracking-widest text-editorial-subtext">Countries</span>
              </div>
              <div className="p-10 border-r border-editorial-border text-center">
                <span className="block font-serif text-5xl text-editorial-navy mb-2">1k+</span>
                <span className="text-xs uppercase tracking-widest text-editorial-subtext">Students</span>
              </div>
              <div className="p-10 text-center">
                <span className="block font-serif text-5xl text-editorial-navy mb-2">100%</span>
                <span className="text-xs uppercase tracking-widest text-editorial-subtext">Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Work: The Gallery */}
      <div className="py-24 bg-white">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12 border-b border-editorial-border pb-6">
            <h2 className="font-serif text-3xl text-editorial-navy">Selected Works</h2>
            <a href="/portfolio" className="text-editorial-subtext hover:text-editorial-navy transition-colors text-sm uppercase tracking-widest">View All</a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Lesson Plans", cat: "Curriculum", link: "/tesol/lesson-plans", img: "bg-slate-100" },
              { title: "Research Papers", cat: "Scholarship", link: "/research-scholarship", img: "bg-stone-100" },
              { title: "Teaching Materials", cat: "Resources", link: "/portfolio", img: "bg-zinc-100" }
            ].map((item, idx) => (
              <a key={idx} href={item.link} className="group block">
                <div className={`aspect-[4/3] ${item.img} mb-6 overflow-hidden`}>
                  {/* Placeholder for actual project images */}
                  <div className="w-full h-full bg-editorial-border/30 group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-editorial-accent mb-2 block">{item.cat}</span>
                    <h3 className="font-serif text-2xl text-editorial-navy group-hover:text-editorial-accent transition-colors">{item.title}</h3>
                  </div>
                  <ArrowRight className="w-5 h-5 text-editorial-border group-hover:text-editorial-navy transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
