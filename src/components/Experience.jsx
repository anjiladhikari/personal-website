import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ArrowRight, ArrowLeft, ArrowDown } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: "AI Developer",
            company: "Hypergen",
            location: "Hybrid (Geelong, Australia)",
            period: "Jun 2025 – Aug 2025",
            description: "Developed AI-powered Power Platform applications and Azure integrations."
        },
        {
            title: "AI & ML Engineer",
            company: "DataByte",
            location: "Remote, Melbourne",
            period: "March 2025 - Oct 2025",
            description: "Engineered hallucination detection pipelines reducing factual errors by 20%."
        },
        {
            title: "Data Analyst",
            company: "slum2school",
            location: "Lagos, Nigeria (Remote)",
            period: "March 2023 - Present",
            description: "Analyzed educational data from 100+ schools using Google Data Studio."
        },
        {
            title: "Teaching Assistant",
            company: "Fusemachine",
            location: "Remote",
            period: "Jan 2023 - Sep 2023",
            description: "Oversaw curriculum, instruction, and recruitment for an international AI fellowship"
        },
        {
            title: "Machine Learning Engineer",
            company: "Fusemachine",
            location: "New York, USA (Remote)",
            period: "March 2022 - Sep 2023",
            description: "Built OCR systems and LLM pipelines, leading a team of 6 engineers."
        },
        {
            title: "Content Creator",
            company: "Code Thulo",
            location: "Remote",
            period: "Oct 2021 - Present",
            description: "Technical content creator with 100+ articles on AI/ML."
        }
        
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    // Chunk into rows of 3 so the flow snakes: row 1 left→right, row 2 right→left
    const rows = [];
    for (let i = 0; i < experiences.length; i += 3) rows.push(experiences.slice(i, i + 3));

    return (
        <section id="experience" className="py-20 bg-[var(--bg-color)]/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
                        Professional Experience
                    </h2>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-3"
                >
                    {rows.map((row, rowIndex) => (
                        <React.Fragment key={rowIndex}>
                            <div className={`flex flex-col items-stretch gap-3 md:gap-4 ${rowIndex % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                                {row.map((exp, index) => (
                                    <React.Fragment key={exp.title + exp.company}>
                                        {index > 0 && (
                                            <div className="flex items-center justify-center shrink-0 text-secondary/70">
                                                <ArrowDown size={20} className="md:hidden" />
                                                {rowIndex % 2 === 1
                                                    ? <ArrowLeft size={20} className="hidden md:block" />
                                                    : <ArrowRight size={20} className="hidden md:block" />}
                                            </div>
                                        )}
                                        <motion.div variants={item} className="flex-1 min-w-0">
                                            <motion.div
                                                whileHover={{ scale: 1.02, y: -5 }}
                                                className="h-full bg-[var(--card-bg)] p-6 rounded-xl border-l-4 border-secondary/50 hover:border-secondary transition-all duration-300 shadow-lg hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)] hover:bg-gradient-to-br hover:from-[var(--card-bg)] hover:to-secondary/5"
                                            >
                                                <div className="flex flex-col gap-2 mb-4">
                                                    <h3 className="text-xl font-bold text-[var(--text-color)]">{exp.title}</h3>
                                                    <h4 className="text-lg text-secondary">{exp.company}</h4>
                                                    <div className="flex flex-wrap gap-4 text-sm text-[var(--text-color)]/60">
                                                        <span className="flex items-center gap-1">
                                                            <Calendar size={14} />
                                                            {exp.period}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <MapPin size={14} />
                                                            {exp.location}
                                                        </span>
                                                    </div>
                                                </div>
                                                <p className="text-[var(--text-color)]/80 text-sm leading-relaxed">
                                                    {exp.description}
                                                </p>
                                            </motion.div>
                                        </motion.div>
                                    </React.Fragment>
                                ))}
                            </div>
                            {rowIndex < rows.length - 1 && (
                                <div className={`flex justify-center text-secondary/70 ${rowIndex % 2 === 0 ? 'md:justify-end md:pr-[15%]' : 'md:justify-start md:pl-[15%]'}`}>
                                    <ArrowDown size={20} />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
