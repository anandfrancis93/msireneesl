'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen } from 'lucide-react';

export default function BookReports() {
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
            Book <span className="italic text-editorial-accent">Reports</span>
          </h2>
          <p className="text-2xl font-serif font-medium text-editorial-navy mb-4">
            My Journey with Books
          </p>
          <p className="text-editorial-subtext max-w-3xl mx-auto text-lg leading-relaxed">
            Explore a collection of captivating book reports that have inspired me during my TESOL Journey. Each book holds a special place in my heart and teaching philosophy. Join me in delving into the world of English language learning through the lens of these remarkable stories.
          </p>
        </motion.div>

        {/* Main Book Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-20 h-20 bg-editorial-bg border border-editorial-border rounded-full flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-10 h-10 text-editorial-navy" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-serif font-bold text-editorial-navy mb-2">Reading in a Second Language</h3>
                <p className="text-editorial-subtext text-lg mb-1">William Grabe</p>
                <p className="text-editorial-accent font-medium italic">Interactive synthesis by Vidya Irene</p>
                <p className="text-editorial-subtext text-sm mt-2">MA TESOL | LING 670 / Brigham Young University</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Foundations of Reading',
                'Patterns of Variation in Reading',
                'Developing Reading Comprehension Abilities',
                'Expanding Reading Comprehension Skills',
                'Applications of Reading Research',
              ].map((title) => (
                <button key={title} className="px-4 py-3 text-sm border border-editorial-border text-editorial-navy hover:bg-editorial-bg hover:border-editorial-accent transition-colors text-left rounded-sm">
                  {title}
                </button>
              ))}
              <button className="px-4 py-3 text-sm bg-editorial-navy text-white hover:bg-editorial-accent transition-colors rounded-sm font-medium">
                View Full Report
              </button>
            </div>
          </div>
        </motion.div>

        {/* Detailed Book Report */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white border border-editorial-border p-8 md:p-16 shadow-sm relative">
            {/* Paper texture effect overlay could go here if desired */}

            {/* Book Report Header */}
            <div className="border-b border-editorial-border pb-8 mb-8">
              <div className="uppercase tracking-widest text-xs font-bold text-editorial-subtext mb-2">Book Report</div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-editorial-navy mb-4">
                Reading in a Second Language — Part I: Foundations of Reading
              </h3>
              <p className="text-editorial-subtext text-lg italic mb-6">by William Grabe • Simple, classroom-focused summary for my portfolio</p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-editorial-navy">
                {['Introduction', 'Key Theories & Findings', 'Major Themes & Findings', 'Classroom Applications', 'Teacher Toolkit', 'Reflection', 'Extras'].map((item, i) => (
                  <a key={i} href={`#${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="hover:text-editorial-accent transition-colors border-b border-transparent hover:border-editorial-accent">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Introduction */}
            <div id="introduction" className="mb-12">
              <h5 className="text-2xl font-serif font-bold text-editorial-navy mb-4">Introduction</h5>
              <div className="space-y-4 text-editorial-subtext text-lg leading-relaxed font-light">
                <p>
                  Part I lays the foundation for how second‑language reading actually works. The big idea: skilled reading is complex, goal‑driven, and shaped by context. Students read for different purposes (learn, compare, evaluate, apply), and those purposes change what good reading looks like. That's why effective instruction flexes to learner needs, text types, and program goals.
                </p>
                <p>
                  Academic reading especially asks for more than "getting the gist." Learners often need to track main ideas, follow arguments, synthesize multiple sources, and use information in new tasks. This part of the book explains the systems that make that possible.
                </p>
              </div>
            </div>

            {/* Key Theories & Findings */}
            <div id="key-theories" className="mb-12">
              <h5 className="text-2xl font-serif font-bold text-editorial-navy mb-4">Key Theories & Findings</h5>
              <ul className="space-y-4">
                {[
                  { title: 'Automatic word recognition matters.', text: 'Fluent readers build a huge sight vocabulary through lots of meaningful exposure. Repeated encounters and decoding knowledge make recognition fast and effortless over time.' },
                  { title: 'Comprehension is built step‑by‑step.', text: 'Readers link each new phrase to what came before and to what they already know. Most of this happens automatically; conscious strategies kick in when the text is tough or the task is demanding.' },
                  { title: 'Two products of understanding.', text: 'Readers form a text representation (what the text says) and sometimes a richer situation model (how it connects to goals and prior knowledge). Different genres and tasks emphasize one or both.' },
                  { title: 'General learning systems drive progress.', text: 'Implicit learning, frequency effects, chunking, working memory, and long‑term knowledge all support reading growth and automaticity.' },
                  { title: 'Neurocognitive view.', text: 'Reading relies on distributed networks that connect visual word forms with sound, meaning, attention, and control. Automaticity comes from practice that wires these systems together.' },
                  { title: 'Organizing models.', text: 'Frameworks like the Simple View, Construction‑Integration, Landscape Model, Lexical Quality/Word‑to‑Text Integration, and Reading Systems Framework explain different parts of how comprehension emerges.' },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-editorial-accent text-xl">•</span>
                    <p className="text-editorial-subtext leading-relaxed"><strong className="text-editorial-navy font-semibold">{item.title}</strong> {item.text}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Major Themes & Findings */}
            <div id="major-themes" className="mb-12">
              <h5 className="text-2xl font-serif font-bold text-editorial-navy mb-4">Major Themes & Findings</h5>
              <ul className="space-y-4">
                {[
                  { title: 'Purpose first.', text: 'Clarifying the goal of a task improves performance and strategy choice.' },
                  { title: 'Automaticity is powerful.', text: 'Much comprehension is fast and memory‑driven; instruction should respect and build it.' },
                  { title: 'Exposure fuels growth.', text: 'Massive, meaningful reading builds vocabulary depth, fluency, and better parsing.' },
                  { title: 'Build the text representation.', text: 'For academic texts, help learners track structure (claims, support, discourse signals) before asking for interpretation or critique.' },
                  { title: 'Cognition matters.', text: 'Attention, working memory, and background knowledge are part of the picture—not just language rules.' },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-editorial-accent text-xl">•</span>
                    <p className="text-editorial-subtext leading-relaxed"><strong className="text-editorial-navy font-semibold">{item.title}</strong> {item.text}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Classroom Applications */}
            <div id="classroom-applications" className="mb-12">
              <h5 className="text-2xl font-serif font-bold text-editorial-navy mb-4">Classroom Applications</h5>
              <ul className="space-y-4">
                {[
                  { title: 'Make goals explicit.', text: 'State the reading purpose (e.g., learn main ideas, compare sources, evaluate evidence) so students choose appropriate strategies.' },
                  { title: 'Front‑load coherence.', text: 'Use short previews, key terms, and guiding questions to connect prior knowledge with the text.' },
                  { title: 'Work the structure.', text: 'Have students find the claim, underline support, and mark transitions before higher‑level synthesis.' },
                  { title: 'Lean on ease + repetition.', text: 'Extensive reading, rereading, and quick retells build speed and confidence.' },
                  { title: 'Blend implicit + explicit.', text: 'Let wide reading do the heavy lifting, but model strategies when sections are hard.' },
                  { title: 'Assess what you teach.', text: 'Align tasks with the stated purpose so success is visible and fair.' },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-editorial-accent font-serif font-bold text-lg">{i + 1}.</span>
                    <p className="text-editorial-subtext leading-relaxed"><strong className="text-editorial-navy font-semibold">{item.title}</strong> {item.text}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Teacher Toolkit */}
            <div id="teacher-toolkit" className="mb-12">
              <h5 className="text-2xl font-serif font-bold text-editorial-navy mb-4">Teacher Toolkit</h5>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Goal cards (20 seconds)', text: 'At the top of each reading, learners choose/annotate a goal: learn, compare, evaluate, apply.' },
                  { title: 'Preview strips', text: 'One page with headings, 3 key terms, and 3 guiding statements to confirm/deny while reading.' },
                  { title: 'Semantic maps', text: 'Link new terms to known ideas to reduce inferencing load during reading.' },
                  { title: 'Fluency loops', text: 'Timed re‑reads of short, easier texts + quick retells to consolidate ideas.' },
                  { title: 'Strategy hotspots', text: 'Pause at tough paragraphs to model micro‑inferences and monitoring.' },
                  { title: 'Discourse noticing', text: 'Mark transitions and claim‑evidence patterns to strengthen text representation.' },
                ].map((item, i) => (
                  <div key={i} className="bg-editorial-bg p-6 border border-editorial-border">
                    <h6 className="font-serif font-bold text-editorial-navy mb-2">{item.title}</h6>
                    <p className="text-editorial-subtext text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reflection */}
            <div id="reflection" className="mb-12 bg-editorial-bg p-8 border-l-4 border-editorial-accent">
              <h5 className="text-2xl font-serif font-bold text-editorial-navy mb-4">Reflection</h5>
              <p className="text-editorial-subtext leading-relaxed italic">
                Reading in another language is a system, not a single skill. The balance that works for me: set clear goals, build lots of easy, meaningful reading to grow automaticity, and teach targeted strategies only where the text gets tough. That mix respects what the mind already does well while giving students practical tools they can see.
              </p>
            </div>

            {/* Extras */}
            <div id="extras">
              <h5 className="text-2xl font-serif font-bold text-editorial-navy mb-4">Extras</h5>
              <div className="space-y-3 text-editorial-subtext">
                <p><strong className="text-editorial-navy font-semibold">Mini‑glossary:</strong> text representation (what the text says), situation model (how it connects to your goals/knowledge), lexical quality (how well you know a word's form/meaning/connections).</p>
                <p><strong className="text-editorial-navy font-semibold">Chapters covered in Part I:</strong> 1–6 (word recognition, comprehension processes, cognition, neurocognition, big models).</p>
                <p><strong className="text-editorial-navy font-semibold">Re‑use tip:</strong> Keep the 7‑section order so your future parts match this style on your site.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
