import React from "react";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
            const [isScrolled, setIsScrolled] = useState(false);
            const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

            useEffect(() => {
                const handleScroll = () => {
                    setIsScrolled(window.scrollY > 50);
                };
                
                window.addEventListener('scroll', handleScroll);
                return () => window.removeEventListener('scroll', handleScroll);
            }, []);

            const scrollToSection = (sectionId) => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    setIsMobileMenuOpen(false);
                }
            };

            const navItems = [
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Education', id: 'education' },
                { name: 'Projects', id: 'projects' },
                { name: 'Skills', id: 'skills' },
                { name: 'Contact', id: 'contact' }
            ];

            return (
                <>
                    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                        isScrolled ? 'bg-dark-bg/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
                    }`}>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between items-center py-4">
                                <div className="text-2xl font-bold text-accent-blue">
                                    Portfolio
                                </div>
                                
                                {/* Desktop Menu */}
                                <div className="hidden md:flex space-x-8">
                                    {navItems.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className="text-light-text hover:text-accent-blue transition-colors duration-300 font-medium"
                                        >
                                            {item.name}
                                        </button>
                                    ))}
                                </div>
                                
                                {/* Mobile Menu Button */}
                                <button
                                    className="md:hidden text-light-text text-xl"
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                >
                                    <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                                </button>
                            </div>
                        </div>
                    </nav>
                    
                    {/* Mobile Menu */}
                    <div className={`fixed top-0 right-0 h-full w-64 bg-dark-secondary z-40 mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                        <div className="pt-20 px-6">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="block w-full text-left py-4 text-light-text hover:text-accent-blue transition-colors duration-300 font-medium"
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    {/* Mobile Menu Overlay */}
                    {isMobileMenuOpen && (
                        <div 
                            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        ></div>
                    )}
                </>
            );
        };

export default Navbar;