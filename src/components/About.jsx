import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/anjil.jpg';
import coverImg from '../assets/cover anjil.jpg';


const About = () => {
    return (
        <section id="about" className="py-20 bg-[var(--bg-color)]/50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, y: -5 }}

                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
                        About Me
                    </h2>
                    <p className="text-[var(--text-color)]/70 max-w-2xl mx-auto">
                        Highly driven and detail-oriented AI/ML engineer with experience in
                        machine learning, natural language processing, computer vision, and Generative AI.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="space-y-6 bg-[var(--card-bg)] p-8 rounded-xl border border-[var(--border-color)] shadow-lg hover:shadow-[0_20px_50px_rgba(99,102,241,0.15)] hover:bg-gradient-to-br hover:from-[var(--card-bg)] hover:to-primary/5 transition-all duration-300"
                    >
                        <h3 className="text-2xl font-bold text-[var(--text-color)]">My Journey</h3>
                        <p className="text-[var(--text-color)]/80 leading-relaxed">
                            With a proven track record of developing scalable AI solutions, fine-tuning LLMs,
                            and building intelligent agents, I specialize in translating complex AI research
                            into production-ready applications. My experience spans across healthcare,
                            education, and enterprise domains.
                        </p>
                        <p className="text-[var(--text-color)]/80 leading-relaxed">
                            I hold a Master of Applied Artificial Intelligence from Deakin University and 
                            combine academic rigor with practical industry experience. 
                            I’m passionate about research, model optimization, 
                            prompt engineering, and delivering impactful AI solutions to real-world problems.
                        </p>

                        <div className="pt-4">
                            <div className="grid grid-cols-2 gap-4">
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="p-4 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <h4 className="text-primary font-bold text-xl mb-1">5+</h4>
                                    <p className="text-sm text-[var(--text-color)]/60">Years Experience</p>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="p-4 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <h4 className="text-secondary font-bold text-xl mb-1">100+</h4>
                                    <p className="text-sm text-[var(--text-color)]/60">Projects Completed</p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 group"
                        >
                            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                                <img src={coverImg} alt="Anjil Adhikari" className="w-full h-full object-cover opacity-90 mix-blend-overlay group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)] to-transparent opacity-90"></div>
                            <div className="absolute bottom-6 left-6">
                                <p className="text-white font-bold text-lg">Anjil Adhikari</p>
                                <p className="text-primary text-sm">AI/ML Engineer</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
