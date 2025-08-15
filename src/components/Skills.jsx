import { useState, useEffect, useRef } from "react";
const Skills = () => {
            const skills = [
                { name: "React", icon: "fab fa-react", color: "#61DAFB" },
                { name: "JavaScript", icon: "fab fa-js-square", color: "#F7DF1E" },
                { name: "TypeScript", icon: "fab fa-js-square", color: "#3178C6" },
                { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
                { name: "Python", icon: "fab fa-python", color: "#3776AB" },
                { name: "MongoDB", icon: "fas fa-database", color: "#47A248" },
                { name: "Git", icon: "fab fa-git-alt", color: "#F05032" },
                { name: "Docker", icon: "fab fa-docker", color: "#2496ED" },
                { name: "AWS", icon: "fab fa-aws", color: "#FF9900" },
                { name: "Vue.js", icon: "fab fa-vuejs", color: "#4FC08D" },
                { name: "HTML5", icon: "fab fa-html5", color: "#E34F26" },
                { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572B6" }
            ];

            return (
                <section id="skills" className="section-padding px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16 fade-in">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat">
                                My <span className="text-accent-blue">Skills</span>
                            </h2>
                            <div className="w-24 h-1 bg-accent-blue mx-auto mb-6"></div>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                Technologies and tools I use to bring ideas to life.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                            {skills.map((skill, index) => (
                                <div
                                    key={skill.name}
                                    className="skill-icon text-center fade-in"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="bg-dark-bg/50 p-6 rounded-xl backdrop-blur-sm hover:bg-dark-bg/70 transition-all duration-300 border border-gray-800 hover:border-accent-blue/50">
                                        <i
                                            className={`${skill.icon} text-4xl mb-4`}
                                            style={{ color: skill.color }}
                                        ></i>
                                        <h3 className="text-sm font-semibold text-light-text font-montserrat">
                                            {skill.name}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            );
        };

       

export default Skills;