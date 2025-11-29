import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Twitter, ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import profileImg from '../assets/anjil.jpg';

const Hero = () => {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: {
                        color: {
                            value: "transparent",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#6366f1",
                        },
                        links: {
                            color: "#a855f7",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
                className="absolute inset-0 z-0"
            />

            {/* Background decoration */}
            <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-1000" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 relative"
                >
                    <motion.div
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)" }}
                        className="w-40 h-40 md:w-56 md:h-56 rounded-full p-1 bg-gradient-to-r from-primary to-secondary cursor-pointer"
                    >
                        <div className="w-full h-full rounded-full overflow-hidden bg-[var(--bg-color)]">
                            <img
                                src={profileImg}
                                alt="Anjil Adhikari"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold mb-4"
                >
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Anjil Adhikari
                    </span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl md:text-2xl text-[var(--text-color)]/80 mb-8 font-light"
                >
                    AI/ML Engineer & Data Scientist
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="max-w-2xl text-[var(--text-color)]/70 mb-10 text-lg leading-relaxed"
                >
                    Highly driven AI/ML engineer with 5+ years of experience in machine learning, NLP,
                    computer vision, and Generative AI. Passionate about building scalable AI solutions
                    and intelligent agents.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex space-x-6 mb-12"
                >
                    <SocialLink href="https://github.com" icon={<Github />} />
                    <SocialLink href="https://linkedin.com" icon={<Linkedin />} />
                    <SocialLink href="https://twitter.com" icon={<Twitter />} />
                    <SocialLink href="mailto:anjil.adk@gmail.com" icon={<Mail />} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex gap-4"
                >
                    <Link to="experience" smooth={true} duration={500} offset={-70}>
                        <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                            View My Work
                        </button>
                    </Link>
                    <a href="/cv.pdf" download>
                        <button className="px-8 py-3 rounded-lg border border-[var(--border-color)] hover:border-primary text-[var(--text-color)] font-semibold transition-colors bg-[var(--card-bg)] hover:bg-[var(--card-bg)]/80">
                            Download CV
                        </button>
                    </a>
                </motion.div>

        
            </div>
        </section>
    );
};

const SocialLink = ({ href, icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-[var(--card-bg)] hover:bg-primary/10 hover:text-primary transition-all duration-300 border border-[var(--border-color)] hover:border-primary/50 text-[var(--text-color)]"
    >
        {icon}
    </a>
);

export default Hero;
