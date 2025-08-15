import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.send(
            'service_ung0e76',      // Replace with your EmailJS service ID
            'template_b17uelj',     // Replace with your EmailJS template ID
            formData,
            '2e4Hw6fKAWojRzrFk'          // Replace with your EmailJS user/public key
        )
        .then(() => {
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(''), 3000);
        })
        .catch(() => {
            setSubmitStatus('error');
            setIsSubmitting(false);
        });
    };

    return (
        <section id="contact" className="section-padding px-4 bg-dark-secondary/50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16 fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat">
                        Get In <span className="text-accent-blue">Touch</span>
                    </h2>
                    <div className="w-24 h-1 bg-accent-blue mx-auto mb-6"></div>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Have a project in mind? Let's work together to bring your ideas to life.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="slide-in-left">
                        <h3 className="text-2xl font-semibold mb-6 text-accent-blue font-montserrat">
                            Let's Connect
                        </h3>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            I'm always interested in hearing about new opportunities and exciting projects. 
                            Whether you have a question or just want to say hi, feel free to reach out!
                        </p>
                        
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <i className="fas fa-envelope text-accent-blue text-xl w-8"></i>
                                <a href="mailto:srisailamjeevan@gmail.com" className="text-gray-300 hover:underline">
                                    srisailamjeevan@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-phone text-accent-blue text-xl w-8"></i>
                                <span className="text-gray-300">+91 9490709863</span>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-map-marker-alt text-accent-blue text-xl w-8"></i>
                                <span className="text-gray-300">Andhra Pradesh</span>
                            </div>
                        </div>

                        <div className="flex space-x-6 mt-8">
                            <a
                                href="https://github.com/your-github" // Replace with your GitHub
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl text-gray-400 hover:text-accent-blue transition-colors duration-300 glow-effect"
                            >
                                <i className="fab fa-github"></i>
                            </a>
                            <a
                                href="https://linkedin.com/in/your-linkedin" // Replace with your LinkedIn
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl text-gray-400 hover:text-accent-blue transition-colors duration-300 glow-effect"
                            >
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a
                                href="https://twitter.com/your-twitter" // Replace with your Twitter
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl text-gray-400 hover:text-accent-blue transition-colors duration-300 glow-effect"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>

                    <div className="slide-in-right">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-light-text">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg form-input"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-light-text">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg form-input"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-light-text">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 rounded-lg form-input resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>
                            
                            {submitStatus === 'success' && (
                                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                                    <p className="text-green-400 font-medium">
                                        <i className="fas fa-check-circle mr-2"></i>
                                        Message sent successfully! I'll get back to you soon.
                                    </p>
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                                    <p className="text-red-400 font-medium">
                                        <i className="fas fa-times-circle mr-2"></i>
                                        Failed to send message. Please try again later.
                                    </p>
                                </div>
                            )}
                            
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full btn-primary glow-effect disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <i className="fas fa-spinner fa-spin mr-2"></i>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <i className="fas fa-paper-plane mr-2"></i>
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;