import React from 'react';
import { useState, useEffect, useRef } from 'react';

const About = () => {
            return (
                <section id="about" className="section-padding px-4 bg-dark-secondary/50">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16 fade-in">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat">
                                About <span className="text-accent-blue">Me</span>
                            </h2>
                            <div className="w-24 h-1 bg-accent-blue mx-auto"></div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="slide-in-left">
                                <div className="relative">
                                    <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-accent-blue glow-effect">
                                        <div className="w-full h-full bg-gradient-to-br from-accent-blue to-accent-hover flex items-center justify-center">
                                            
                                            <img src="/Venkata_Jeevan.jpg" alt="#" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="slide-in-right">
                                <h3 className="text-2xl font-semibold mb-6 text-accent-blue font-montserrat">
                                    Passionate Developer & Problem Solver
                                </h3>
                                <p className="text-lg mb-6 text-gray-300 leading-relaxed">
                                    I'm a dedicated full-stack developer with a passion for creating efficient, 
                                    scalable, and user-friendly web applications. With expertise in modern 
                                    technologies and a keen eye for design, I bring ideas to life through clean, 
                                    maintainable code.
                                </p>
                                <p className="text-lg mb-8 text-gray-300 leading-relaxed">
                                    When I'm not coding, you can find me exploring new technologies, 
                                    contributing to open-source projects, or sharing knowledge with the 
                                    developer community.
                                </p>
                                
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold text-accent-blue mb-2">Frontend</h4>
                                        <p className="text-gray-300">React, Vue.js, TypeScript</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-accent-blue mb-2">Backend</h4>
                                        <p className="text-gray-300">Node.js, Python, MongoDB</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-accent-blue mb-2">Tools</h4>
                                        <p className="text-gray-300">Git, Docker, AWS</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-accent-blue mb-2">Design</h4>
                                        <p className="text-gray-300">Figma, Tailwind CSS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        };
export default About;