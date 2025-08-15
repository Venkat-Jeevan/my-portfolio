import { useState, useEffect, useRef } from "react";
const Education = () => {
            const [educationData, setEducationData] = useState([
                {
                    id: 1,
                    level: "B.Tech",
                    degree: "Bachelor of Technology in Electronics and Communication Engineering",
                    institution: "Kalasalingam Academy of Research and Education (Deemed to be University) Madurai",
                    location: "Madurai, India",
                    duration: "2022 - 2026",
                    cgpa: "8.89",
                    percentage: "89%",
                    icon: "fas fa-graduation-cap",
                    color: "#00e5ff"
                },
                {
                    id: 2,
                    level: "12th Grade",
                    degree: "Higher Secondary Certificate (HSC)",
                    institution: "Narayana Junior College",
                    location: "Kurnool, India", 
                    duration: "2020 - 2022",
                    cgpa: "9.6",
                    percentage: "96%",
                    icon: "fas fa-school",
                    color: "#4CAF50"
                },
                {
                    id: 3,
                    level: "10th Grade",
                    degree: "Secondary School Certificate (SSC)",
                    institution: "Penna English medium High School",
                    location: "Tadipatri, India",
                    duration: "2019 - 2020", 
                    cgpa: "10.0",
                    percentage: "100%",
                    icon: "fas fa-book",
                    color: "#FF9800"
                }
            ]);

            return (
                <section id="education" className="section-padding px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16 fade-in">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat">
                                My <span className="text-accent-blue">Education</span>
                            </h2>
                            <div className="w-24 h-1 bg-accent-blue mx-auto mb-6"></div>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                My academic journey and educational achievements that shaped my career.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {educationData.map((edu, index) => (
                                <div
                                    key={edu.id}
                                    className="fade-in bg-dark-secondary/50 rounded-xl p-6 md:p-8 backdrop-blur-sm border border-gray-800 hover:border-accent-blue/50 transition-all duration-300"
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                >
                                    <div className="grid md:grid-cols-4 gap-6 items-center">
                                        <div className="md:col-span-1 text-center md:text-left">
                                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" 
                                                 style={{ backgroundColor: `${edu.color}20`, border: `2px solid ${edu.color}` }}>
                                                <i className={`${edu.icon} text-2xl`} style={{ color: edu.color }}></i>
                                            </div>
                                            <div className="text-sm font-semibold text-gray-400 mb-1">{edu.duration}</div>
                                            <div className="text-lg font-bold" style={{ color: edu.color }}>{edu.level}</div>
                                        </div>
                                        
                                        <div className="md:col-span-2">
                                            <h3 className="text-xl font-bold text-light-text mb-2 font-montserrat">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-accent-blue font-semibold mb-1">{edu.institution}</p>
                                            <p className="text-gray-400 text-sm mb-3">
                                                <i className="fas fa-map-marker-alt mr-2"></i>
                                                {edu.location}
                                            </p>
                                        </div>
                                        
                                        <div className="md:col-span-1 text-center">
                                            <div className="bg-dark-bg/50 rounded-lg p-4 border border-gray-700">
                                                <div className="text-2xl font-bold text-accent-blue mb-1">{edu.cgpa}</div>
                                                <div className="text-sm text-gray-400 mb-2">CGPA</div>
                                                <div className="text-lg font-semibold text-light-text">{edu.percentage}</div>
                                                <div className="text-xs text-gray-400">Percentage</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Additional Achievements */}
                        <div className="mt-16 fade-in">
                            <h3 className="text-2xl font-bold text-center mb-8 text-accent-blue font-montserrat">
                                Academic Achievements
                            </h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-dark-secondary/30 rounded-lg p-6 text-center border border-gray-800 hover:border-accent-blue/50 transition-all duration-300">
                                    <i className="fas fa-trophy text-3xl text-yellow-500 mb-4"></i>
                                    <h4 className="font-semibold text-light-text mb-2">Dean's List</h4>
                                    <p className="text-gray-400 text-sm">Consistently maintained high academic performance</p>
                                </div>
                                <div className="bg-dark-secondary/30 rounded-lg p-6 text-center border border-gray-800 hover:border-accent-blue/50 transition-all duration-300">
                                    <i className="fas fa-medal text-3xl text-accent-blue mb-4"></i>
                                    <h4 className="font-semibold text-light-text mb-2">Merit Scholarship</h4>
                                    <p className="text-gray-400 text-sm">Awarded for academic excellence</p>
                                </div>
                                <div className="bg-dark-secondary/30 rounded-lg p-6 text-center border border-gray-800 hover:border-accent-blue/50 transition-all duration-300">
                                    <i className="fas fa-code text-3xl text-green-500 mb-4"></i>
                                    <h4 className="font-semibold text-light-text mb-2">Coding Competitions</h4>
                                    <p className="text-gray-400 text-sm">Multiple wins in programming contests</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        };

export default Education;