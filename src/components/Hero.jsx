
import { useState, useEffect, useRef } from "react";
const Hero = () => {
            const [displayText, setDisplayText] = useState('');
    const fullText = "Full Stack Developer";

            useEffect(() => {
                let index = 0;
                const timer = setInterval(() => {
                    if (index < fullText.length) {
                        setDisplayText(fullText.slice(0, index + 1));
                        index++;
                    } else {
                        clearInterval(timer);
                    }
                }, 100);
                return () => clearInterval(timer);
            }, []);

            const scrollToSection = (sectionId) => {
                document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
            };

            return (
                <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-secondary to-dark-bg"></div>
                    
                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    </div>
                    
                    <div className="relative z-10 text-center px-4 fade-in visible">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-montserrat">
                            Hi, I'm <span className="text-accent-blue">SRISAILAM VENKATA JEEVAN</span>
                        </h1>
                        <div className="text-2xl md:text-3xl mb-8 h-12 font-medium">
                            <span className="typing-cursor">{displayText}</span>
                        </div>
                        <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-300 leading-relaxed">
                            Passionate about creating innovative web solutions and bringing ideas to life through clean, efficient code.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="btn-primary glow-effect"
                            >
                                View My Work
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="btn-outline"
                            >
                                Get In Touch
                            </button>
                        </div>
                    </div>
                    
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <i className="fas fa-chevron-down text-accent-blue text-2xl"></i>
                    </div>
                </section>
            );
        };

export default Hero;