'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, Download, BookOpen, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function TestTechnicalManual() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const sections = [
        {
            title: "Test Overview",
            content: "This technical manual provides a comprehensive analysis of the assessment tools used in the ESL curriculum. It covers the design, validity, and reliability of the tests administered to students."
        },
        {
            title: "Target Audience",
            content: "Designed for ESL instructors, curriculum developers, and educational administrators who need to understand the theoretical and practical underpinnings of the assessment strategy."
        },
        {
            title: "Methodology",
            content: "The manual details the psychometric properties of the tests, including item analysis, difficulty indices, and discrimination coefficients, ensuring fair and accurate student evaluation."
        }
    ];

    return (
        <section className="section-padding bg-editorial-bg min-h-screen">
            <div className="container-custom" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 text-editorial-navy">
                        Test Technical <span className="italic text-editorial-accent">Manual</span>
                    </h2>
                    <p className="text-editorial-subtext max-w-2xl mx-auto text-lg leading-relaxed font-light">
                        A detailed guide to assessment design, validity, and reliability in ESL instruction.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-2 space-y-8"
                    >
                        <div className="bg-white border border-editorial-border p-8 md:p-10 shadow-sm">
                            <div className="flex items-center gap-4 mb-8 border-b border-editorial-border pb-6">
                                <BookOpen className="w-8 h-8 text-editorial-accent" />
                                <h3 className="text-2xl font-serif font-bold text-editorial-navy">Manual Contents</h3>
                            </div>

                            <div className="space-y-10">
                                {sections.map((section, index) => (
                                    <div key={index}>
                                        <h4 className="text-xl font-bold text-editorial-navy mb-3 flex items-center gap-2">
                                            <span className="text-editorial-accent text-sm">0{index + 1}.</span>
                                            {section.title}
                                        </h4>
                                        <p className="text-editorial-subtext leading-relaxed">
                                            {section.content}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 pt-8 border-t border-editorial-border">
                                <h4 className="text-lg font-bold text-editorial-navy mb-4">Key Features</h4>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    {['Validity Evidence', 'Reliability Coefficients', 'Item Analysis', 'Scoring Rubrics', 'Administration Guidelines', 'Score Interpretation'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-editorial-subtext">
                                            <CheckCircle size={16} className="text-editorial-accent" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Sidebar / Download */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-8"
                    >
                        <div className="bg-editorial-navy text-white p-8 shadow-lg relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                                <FileText size={120} />
                            </div>

                            <h3 className="text-2xl font-serif font-bold mb-4 relative z-10">Download Manual</h3>
                            <p className="text-white/80 mb-8 relative z-10 leading-relaxed">
                                Get the full technical manual in PDF format for offline reading and reference.
                            </p>

                            <button className="w-full py-4 bg-white text-editorial-navy font-bold hover:bg-editorial-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-2 relative z-10">
                                <Download size={20} />
                                Download PDF
                            </button>
                        </div>

                        <div className="bg-white border border-editorial-border p-8 shadow-sm">
                            <h4 className="text-lg font-serif font-bold text-editorial-navy mb-4">Related Resources</h4>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="/tesol/lesson-plans" className="text-editorial-subtext hover:text-editorial-accent transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-editorial-border group-hover:bg-editorial-accent transition-colors"></span>
                                        Lesson Plans
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/tesol/book-reports" className="text-editorial-subtext hover:text-editorial-accent transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-editorial-border group-hover:bg-editorial-accent transition-colors"></span>
                                        Book Reports
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/teaching-philosophy" className="text-editorial-subtext hover:text-editorial-accent transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-editorial-border group-hover:bg-editorial-accent transition-colors"></span>
                                        Teaching Philosophy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
