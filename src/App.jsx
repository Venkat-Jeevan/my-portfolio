// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {useEffect } from 'react'
import './App.css'

const App = () => {
            useEffect(() => {
                // Intersection Observer for animations
                const observerOptions = {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px'
                };

                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                        }
                    });
                }, observerOptions);

                // Observe all animated elements
                document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
                    observer.observe(el);
                });

                return () => observer.disconnect();
            }, []);

            return (
                <div className="min-h-screen bg-dark-bg text-light-text font-montserrat">
                    <Navbar />
                    <Hero />
                    <About />
                    <Education />
                    <Projects />
                    <Skills />
                    <Contact />
                    <Footer />    
                </div>
            );
        };


export default App
