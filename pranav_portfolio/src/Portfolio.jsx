import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Code2, Database, Palette, Server, Award, Briefcase, GraduationCap, ExternalLink, ChevronDown } from 'lucide-react';

export default function Portfolio() {
    const [activeSection, setActiveSection] = useState('hero');
    const [scrollY, setScrollY] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const projects = [
        {
            title: "BuildErp",
            subtitle: "Construction ERP Solution",
            description: "Comprehensive ERP platform for construction companies with real-time tracking, budget management, and live communication.",
            features: ["Live project tracking", "Material procurement & labor management", "Real-time chat with Socket.IO", "AWS deployment"],
            tech: ["Node.js", "Express.js", "TypeScript", "MongoDB", "React.js", "Tailwind CSS", "Redux", "Clean Architecture", "AWS", "Socket.IO"],
            liveLink: "https://build-front-erp.tastetrial.info",
            githubLink: "https://github.com/pranavkpv/buildErp",
            gradient: "from-amber-500 via-orange-500 to-red-500"
        },
        {
            title: "Taste Trial",
            subtitle: "Food Delivery Application",
            description: "Full-stack food delivery platform enabling restaurants to list menus and users to order and track meals online.",
            features: ["Cart & wishlist", "Order tracking", "Razorpay integration", "Admin panel"],
            tech: ["Node.js", "Express.js", "JavaScript", "MongoDB", "EJS", "Bootstrap", "AWS EC2", "NGINX", "PM2"],
            liveLink: "https://tastetrial.info/user/load",
            githubLink: "https://github.com/pranavkpv/Taste_Trial",
            gradient: "from-emerald-500 via-teal-500 to-cyan-500"
        },
        {
            title: "Eventify",
            subtitle: "Event Management System",
            description: "Event management platform with QR-based attendance tracking and food service management.",
            features: ["Event creation & registration", "QR-based attendance", "Clean architecture"],
            tech: ["Node.js", "React.js", "MongoDB", "Clean Architecture"],
            liveLink: null,
            githubLink: "https://github.com/pranavkpv/eventify-clean",
            gradient: "from-violet-500 via-purple-500 to-fuchsia-500"
        }
    ];

    const skills = [
        {
            category: "Frontend",
            icon: <Palette className="w-6 h-6" />,
            items: ["React.js", "Redux", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3", "WebSocket"],
            color: "from-pink-500 to-rose-500"
        },
        {
            category: "Backend",
            icon: <Server className="w-6 h-6" />,
            items: ["Node.js", "Express.js", "RESTful APIs", "Clean Architecture", "MVC Architecture"],
            color: "from-blue-500 to-indigo-500"
        },
        {
            category: "Database",
            icon: <Database className="w-6 h-6" />,
            items: ["MongoDB", "PostgreSQL"],
            color: "from-green-500 to-emerald-500"
        },
        {
            category: "Tools & Others",
            icon: <Code2 className="w-6 h-6" />,
            items: ["Git", "GitHub", "Postman", "VS Code", "Figma", "AWS", "Digital Ocean", "Firebase"],
            color: "from-orange-500 to-amber-500"
        }
    ];

    const experience = {
        title: "Junior Software Developer",
        company: "AD Info Solution",
        duration: "May 2023 – July 2024",
        location: "Kannur, Payyannur",
        highlights: [
            "Developed scalable web applications using Express.js and React.js",
            "Designed and implemented RESTful APIs",
            "Collaborated with team members to resolve bugs and complete project modules"
        ]
    };

    const education = [
        {
            degree: "MERN Stack Development",
            institution: "Brototype, Kochi",
            year: "2024 – Present",
            icon: "🚀"
        },
        {
            degree: "Python Development",
            institution: "Gtech, Payyannur",
            year: "2022 – 2023",
            icon: "🐍"
        },
        {
            degree: "Bachelor of Science in Mathematics",
            institution: "Kannur University",
            year: "2019 – 2022",
            cgpa: "CGPA: 8.44",
            icon: "📐"
        }
    ];

    // Function to download resume
    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/PRANAV_RAJ_KPV_RESUME.pdf'; // ✅ correct path
        link.download = 'Pranav_Raj_KPV_Resume.pdf';
    
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    

    return (
        <div className="bg-black text-white min-h-screen relative overflow-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div
                    className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
                    style={{
                        top: `${mousePosition.y / 20}px`,
                        left: `${mousePosition.x / 20}px`,
                        transition: 'all 0.3s ease-out'
                    }}
                />
                <div
                    className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
                    style={{
                        bottom: `${mousePosition.y / 30}px`,
                        right: `${mousePosition.x / 30}px`,
                        transition: 'all 0.3s ease-out'
                    }}
                />
            </div>

            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center relative px-6 py-20">
                <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Text Content */}
                    <div className="space-y-8 animate-[fadeInUp_1s_ease-out]">
                        <div className="space-y-4">
                            <h1 className="text-7xl md:text-8xl font-black tracking-tighter">
                                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-[gradient_3s_ease_infinite]">
                                    PRANAV RAJ
                                </span>
                            </h1>
                            <div className="flex items-center gap-3">
                                <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-500 animate-pulse" />
                                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-gray-300">
                                    K P V
                                </h2>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <p className="text-4xl md:text-5xl font-bold text-white">
                                MERN Stack Developer
                            </p>
                            <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
                                Full-stack developer specializing in building scalable, user-friendly web applications
                                with clean architecture and modern technologies.
                            </p>
                        </div>

                        {/* Contact Links */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <a
                                href="mailto:kpvpranavraj2305@gmail.com"
                                className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
                            >
                                <Mail className="w-5 h-5" />
                                <span className="font-semibold">Email Me</span>
                            </a>
                            <a
                                href="tel:+917012588613"
                                className="group flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
                            >
                                <Phone className="w-5 h-5" />
                                <span className="font-semibold">Call</span>
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 pt-2">
                            {[
                                { icon: <Github className="w-6 h-6" />, label: "GitHub", link: "https://github.com/pranavkpv" },
                                { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", link: "https://www.linkedin.com/in/pranav-raj-k-p-v-2147b1270/" },
                                { icon: <Code2 className="w-6 h-6" />, label: "LeetCode", link: "https://leetcode.com/u/PranavRajkpv/" }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.link}
                                    className="p-3 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/30 hover:scale-110 group"
                                    aria-label={social.label}
                                >
                                    <div className="group-hover:text-cyan-400 transition-colors">
                                        {social.icon}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right: Profile Image */}
                    <div className="relative animate-[fadeInUp_1s_ease-out_0.3s_both]">
                        <div className="relative">
                            {/* Glowing Border Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-75 animate-pulse" />

                            {/* Image Container */}
                            <div className="relative bg-gradient-to-br from-gray-900 to-black p-2 rounded-3xl border border-white/10">
                                <img
                                    src="/pranav_portfolio.jpg"
                                    alt="Pranav Raj K P V"
                                    className="rounded-2xl w-full h-auto object-cover"
                                />
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-cyan-500 to-purple-600 p-6 rounded-2xl shadow-2xl animate-[float_3s_ease-in-out_infinite]">
                                <div className="text-center">
                                    <div className="text-3xl font-black">2+</div>
                                    <div className="text-sm font-medium">Years Exp</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <ChevronDown className="w-8 h-8 text-cyan-400" />
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-24 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 animate-[fadeInUp_1s_ease-out]">
                        <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
                            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                                Technical Arsenal
                            </span>
                        </h2>
                        <p className="text-xl text-gray-400">Weaponry for building exceptional web experiences</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skill, idx) => (
                            <div
                                key={idx}
                                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />

                                <div className="relative z-10">
                                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${skill.color} mb-4`}>
                                        {skill.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4">{skill.category}</h3>

                                    <div className="flex flex-wrap gap-2">
                                        {skill.items.map((item, itemIdx) => (
                                            <span
                                                key={itemIdx}
                                                className="text-sm px-3 py-1 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
                            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                                Featured Projects
                            </span>
                        </h2>
                        <p className="text-xl text-gray-400">Real-world solutions built with passion</p>
                    </div>

                    <div className="space-y-12">
                        {projects.map((project, idx) => (
                            <div
                                key={idx}
                                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 hover:bg-white/10 transition-all duration-500"
                            >
                                {/* Gradient Accent */}
                                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${project.gradient} rounded-l-3xl`} />

                                <div className="grid md:grid-cols-3 gap-8">
                                    {/* Project Info */}
                                    <div className="md:col-span-2 space-y-6">
                                        <div>
                                            <h3 className="text-4xl font-black mb-2">{project.title}</h3>
                                            <p className="text-xl text-cyan-400 font-semibold">{project.subtitle}</p>
                                        </div>

                                        <p className="text-lg text-gray-300 leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Features */}
                                        <div>
                                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Key Features</h4>
                                            <ul className="space-y-2">
                                                {project.features.map((feature, fIdx) => (
                                                    <li key={fIdx} className="flex items-start gap-3">
                                                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`} />
                                                        <span className="text-gray-300">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Links */}
                                        <div className="flex flex-wrap gap-3 pt-2">
                                            {project.liveLink && (
                                                <a
                                                    href={project.liveLink}
                                                    className={`flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${project.gradient} rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg`}
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                    Live Demo
                                                </a>
                                            )}
                                            {project.githubLink && (
                                                <a
                                                    href={project.githubLink}
                                                    className="flex items-center gap-2 px-5 py-2.5 bg-white/10 rounded-full font-semibold hover:bg-white/20 transition-colors border border-white/20"
                                                >
                                                    <Github className="w-4 h-4" />
                                                    Source Code
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="space-y-4">
                                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Tech Stack</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, tIdx) => (
                                                <span
                                                    key={tIdx}
                                                    className={`text-xs px-3 py-1.5 bg-gradient-to-r ${project.gradient} bg-opacity-20 rounded-lg border border-white/10 font-medium`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
                            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                                Experience
                            </span>
                        </h2>
                    </div>

                    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10">
                        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-green-500 to-emerald-500 rounded-l-3xl" />

                        <div className="flex items-start gap-4 mb-6">
                            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
                                <Briefcase className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-black mb-1">{experience.title}</h3>
                                <p className="text-xl text-green-400 font-semibold">{experience.company}</p>
                                <p className="text-gray-400">{experience.duration} • {experience.location}</p>
                            </div>
                        </div>

                        <ul className="space-y-3 ml-16">
                            {experience.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
                                    <span className="text-gray-300 text-lg">{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
                            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                                Education
                            </span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {education.map((edu, idx) => (
                            <div
                                key={idx}
                                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105"
                            >
                                <div className="text-4xl mb-4">{edu.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                                <p className="text-orange-400 font-semibold mb-1">{edu.institution}</p>
                                <p className="text-gray-400 text-sm">{edu.year}</p>
                                {edu.cgpa && (
                                    <div className="mt-3 pt-3 border-t border-white/10">
                                        <span className="text-sm font-semibold text-green-400">{edu.cgpa}</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer/CTA */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-5xl md:text-6xl font-black tracking-tight">
                        <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Let's Build Something Amazing
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        I'm always excited to collaborate on innovative projects. Whether you have an idea or just want to connect, feel free to reach out!
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center pt-4">
                        <a
                            href="mailto:kpvpranavraj2305@gmail.com"
                            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-lg font-bold hover:scale-105 transition-transform duration-300 shadow-2xl hover:shadow-cyan-500/50"
                        >
                            Get In Touch
                        </a>
                        <button
                            onClick={handleDownloadResume}
                            className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full text-lg font-bold hover:bg-white/20 transition-colors border border-white/20 cursor-pointer"
                        >
                            Download Resume
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-white/10">
                <div className="max-w-7xl mx-auto text-center text-gray-500">
                    <p>© 2026 Pranav Raj K P V. Crafted with passion and code.</p>
                </div>
            </footer>

            <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
        }
      `}</style>
        </div>
    );
}