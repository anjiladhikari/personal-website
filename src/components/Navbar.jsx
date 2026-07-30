import React, { useState, useEffect, useRef } from 'react';
import { Link, scroller } from 'react-scroll';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigate = useNavigate();
    const location = useLocation();
    const pendingScroll = useRef(null);

    // After routing back to the homepage, scroll to the section that was clicked
    useEffect(() => {
        if (location.pathname === '/' && pendingScroll.current) {
            const target = pendingScroll.current;
            pendingScroll.current = null;
            scroller.scrollTo(target, { smooth: true, duration: 500, offset: -70 });
        }
    }, [location.pathname]);

    const handleSectionClick = (to) => {
        if (location.pathname !== '/') {
            pendingScroll.current = to;
            navigate('/');
        }
    };

    const navLinks = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Experience', to: 'experience' },
        { name: 'Education', to: 'education' },
        { name: 'Contact', to: 'contact' },
        { name: 'Resource', href: '/resource', external: true },
        { name: 'Blogs', href: 'https://medium.com/@codethulo', external: true },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[var(--bg-color)]/80 backdrop-blur-md shadow-lg border-b border-white/10' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-2xl font-bold bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity"
                        >
                            Anjil Adhikari
                        </motion.span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => {
                                if (link.external) {
                                    if (link.href.startsWith('/')) {
                                        return (
                                            <RouterLink
                                                key={link.name}
                                                to={link.href}
                                                className="relative group px-3 py-2 text-sm font-medium cursor-pointer transition-colors text-[var(--text-color)] hover:text-primary"
                                            >
                                                {link.name}
                                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
                                            </RouterLink>
                                        );
                                    }
                                    return (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="relative group px-3 py-2 text-sm font-medium cursor-pointer transition-colors text-[var(--text-color)] hover:text-primary"
                                        >
                                            {link.name}
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
                                        </a>
                                    );
                                }
                                return (
                                    <Link
                                        key={link.name}
                                        to={link.to}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        className="relative group px-3 py-2 text-sm font-medium cursor-pointer transition-colors text-[var(--text-color)] hover:text-primary"
                                        activeClass="text-primary"
                                        spy={true}
                                        onClick={() => handleSectionClick(link.to)}
                                    >
                                        {link.name}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                );
                            })}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-[var(--card-bg)] transition-colors text-[var(--text-color)]"
                            >
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-[var(--text-color)] hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-[var(--bg-color)]/95 backdrop-blur-md shadow-xl"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => {
                            if (link.external) {
                                if (link.href.startsWith('/')) {
                                    return (
                                        <RouterLink
                                            key={link.name}
                                            to={link.href}
                                            className="text-[var(--text-color)] hover:text-primary block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </RouterLink>
                                    );
                                }
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[var(--text-color)] hover:text-primary block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                );
                            }
                            return (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    onClick={() => { setIsOpen(false); handleSectionClick(link.to); }}
                                    className="text-[var(--text-color)] hover:text-primary block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                        <button
                            onClick={() => {
                                toggleTheme();
                                setIsOpen(false);
                            }}
                            className="flex items-center w-full text-[var(--text-color)] hover:text-primary px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                        >
                            {theme === 'dark' ? <Sun size={20} className="mr-2" /> : <Moon size={20} className="mr-2" />}
                            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                        </button>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
