import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import Link from 'next/link';

// Project data
const projects = [
    {
        id: 1,
        title: "Immersive Visual Fusion",
        description: "Advanced sensor fusion system combining 360° camera and LiDAR data for autonomous navigation.",
        fullDescription: `An innovative system that seamlessly integrates 360° camera feeds with LiDAR point cloud data to create an immersive visualization platform for autonomous vehicles. The system processes real-time sensor data to generate a comprehensive environmental model, enabling better decision-making for autonomous navigation.

Key Features:
• Real-time sensor fusion of camera and LiDAR data
• VR-based visualization interface for intuitive monitoring
• Advanced object detection and tracking
• Custom ROS 2 nodes for efficient data processing
• Unity-based 3D visualization engine`,
        tech: ["ROS 2", "Unity", "VR", "OpenCV"],
        links: {
            github: "https://github.com/BlaineKTMO/WayneHacks3",
            devpost: "https://devpost.com/software/immersive-visual-fusion",
            youtube: "https://www.youtube.com/watch?v=8Lp-LuREHg8&t"
        }
    },
    {
        id: 2,
        title: "SwarmSense",
        description: "Multi-modal sensor fusion platform for connected vehicle communication and autonomous navigation.",
        fullDescription: `SwarmSense is a cutting-edge platform that enables real-time communication and sensor data sharing between connected vehicles. The system utilizes edge computing and distributed AI to process sensor data from multiple vehicles, creating a collaborative perception network.

Key Features:
• Distributed sensor fusion architecture
• Real-time vehicle-to-vehicle communication
• Edge AI-powered object detection
• Scalable multi-vehicle coordination
• Advanced path planning algorithms`,
        tech: ["ROS 2", "Edge AI", "OpenCV"],
        links: {
            devpost: "https://devpost.com/software/swarmsense-connected-intelligence-for-connected-vehicles"
        }
    },
    {
        id: 3,
        title: "Tic Tac Toe Robot",
        description: "AI-powered robotic arm with precise kinematics for interactive gameplay.",
        fullDescription: `An interactive robotic system that plays Tic Tac Toe against human opponents. The project combines computer vision, inverse kinematics, and game theory to create an engaging human-robot interaction experience.

Key Features:
• Real-time game board detection
• Precise robotic arm control
• Web-based user interface
• Unbeatable AI game logic
• Custom motion planning algorithms`,
        tech: ["ROS 2", "MATLAB", "Flask"],
        links: {
            github: "https://github.com/BlaineKTMO/web-tic-tac-toe"
        }
    }
];

const techStack = [
    {
        category: "Robotics & Systems",
        items: [
            { name: "ROS 2", icon: "fas fa-robot" },
            { name: "CUDA", icon: "fas fa-microchip" },
            { name: "Computer Vision", icon: "fas fa-eye" },
            { name: "Embedded Systems", icon: "fas fa-memory" }
        ]
    },
    {
        category: "Languages",
        items: [
            { name: "Python", icon: "fab fa-python" },
            { name: "C++", icon: "fas fa-code" },
            { name: "TypeScript", icon: "fab fa-js" },
            { name: "Java", icon: "fab fa-java" }
        ]
    },
    {
        category: "Web & Cloud",
        items: [
            { name: "Angular", icon: "fab fa-angular" },
            { name: "React", icon: "fab fa-react" },
            { name: "AWS", icon: "fab fa-aws" },
            { name: "GCP", icon: "fas fa-cloud" }
        ]
    },
    {
        category: "Tools & DevOps",
        items: [
            { name: "Git", icon: "fab fa-git-alt" },
            { name: "Docker", icon: "fab fa-docker" },
            { name: "Linux", icon: "fab fa-linux" },
            { name: "CI/CD", icon: "fas fa-code-branch" }
        ]
    }
];

// Add hackathon data
const hackathons = [
    {
        id: 1,
        title: "GrizzHacks 7",
        description: "Developed iCare Central, an AI-powered smart wheelchair and health management system that combines eye-tracking navigation with real-time health monitoring. The system features a caregiver dashboard for remote monitoring and emergency alerts, built with a modular architecture for scalability.",
        fullDescription: `iCare Central is an innovative system that enhances mobility and provides real-time health monitoring for elderly individuals and those with mobility challenges. The project integrates AI-driven navigation with holistic patient care, ensuring both independence for users and peace of mind for caregivers.

Key Features:
• AI-powered eye-tracking navigation for wheelchair control
• Camera-based health monitoring for real-time vital tracking
• IMU-based movement detection for stability and fall prevention
• Secure database for patient health and mobility data
• Responsive caregiver dashboard for remote monitoring

Technical Highlights:
• Frontend: React.js, Material-UI, Redux, WebSocket
• Backend: Node.js, Express.js, MongoDB, Python
• AI & ML: TensorFlow.js, OpenCV, Deep Learning models
• Infrastructure: Docker, AWS, Prometheus, Grafana

Challenges & Solutions:
• Optimized eye-tracking precision across varying conditions
• Implemented efficient real-time health monitoring algorithms
• Ensured HIPAA and GDPR compliance for data security
• Achieved seamless hardware-software integration

Future Development:
• Voice-controlled navigation
• Predictive health analytics
• IoT integration for smart home connectivity
• Enhanced caregiver tools and accessibility features`,
        date: "2025",
        location: "Oakland University",
        skills: ["React.js", "Node.js", "Python", "TensorFlow", "OpenCV", "ROS 2", "Docker", "AWS", "MongoDB"]
    },
    {
        id: 2,
        title: "SpartaHacks X",
        description: "Developed FedNET.ai, a privacy-preserving federated learning platform that enables users to train AI models for their specific needs. The system successfully deployed models for fire detection and component fault analysis, built with React.js and Next.js.",
        fullDescription: `FedNET.ai emerged from our concern about recent natural disasters and infrastructure challenges worldwide. We created a platform-agnostic service that empowers users to make a difference through AI, fleet management, and innovative solutions.

Key Features:
• Privacy-preserving federated learning platform
• Custom AI model training capabilities
• Fire detection system
• Faulty component analysis
• Web-based user interface

Technical Highlights:
• Frontend: React.js, Next.js
• AI & ML: MobileNet, PyTorch
• Backend: Python, Flask
• Infrastructure: MongoDB, Edge Impulse
• Additional Tools: Fetch.ai

Challenges & Solutions:
• Successfully transitioned from Angular to React.js for better development experience
• Implemented federated learning for privacy-preserving model training
• Deployed working AI models for real-world applications

Future Development:
• Refine service for commercial viability
• Expand model capabilities
• Enhance platform scalability
• Develop additional use cases`,
        date: "2025",
        location: "Michigan State University",
        skills: ["React.js", "Next.js", "Python", "PyTorch", "MongoDB", "Flask", "MobileNet", "Edge Impulse"]
    },
    {
        id: 3,
        title: "WayneHacks 3",
        description: "Developed an immersive 360-degree sensor fusion system that combines LiDAR and camera data for autonomous navigation. The project features real-time data processing, VR visualization, and hardware-accelerated algorithms for enhanced performance.",
        fullDescription: `As a team of four engineering students from Wayne State University, we created a cutting-edge platform that integrates 360-degree camera data with LiDAR sensor information for autonomous navigation applications. Our project pushes the boundaries of immersive, real-time data visualization in robotics.

Key Features:
• Real-time fusion of 360° camera and LiDAR data
• VR-based visualization using Meta Quest headset
• Hardware-accelerated processing with CUDA
• Enhanced LiDAR resolution through interpolation
• Immersive Unity 3D environment

Technical Highlights:
• Hardware: Insta360 X4, Velodyne VLP-16, LinkStar Router
• Software: ROS 2 (Humble), Unity 2022, OpenCV, CUDA 11.5, CuPy
• Languages: Python, C++, C#
• Visualization: Meta Quest VR headset

Implementation Details:
• Data Capture: Simultaneous 360° camera and LiDAR point cloud capture
• Fusion Algorithm: OpenCV-based transformation with CUDA acceleration
• Lane Segmentation: HSV filter implementation in OpenCV
• VR Integration: Unity Skybox projection for immersive experience
• LiDAR Enhancement: Median interpolation for 32-layer resolution

Challenges & Solutions:
• Optimized data streaming over LAN/WLAN network
• Achieved 20x processing speed improvement through hardware acceleration
• Successfully integrated VR playback for robot's perspective
• Implemented robust sensor calibration and mounting solutions

Future Development:
• Enhanced real-time processing capabilities
• Expanded VR interaction features
• Improved sensor calibration methods
• Additional visualization options`,
        date: "2025",
        location: "Wayne State University",
        skills: ["ROS 2", "Python", "C++", "Unity", "OpenCV", "CUDA", "VR"]
    },
    {
        id: 4,
        title: "HackDearborn 3",
        description: "Developed SwarmSense, a multi-modal sensor fusion platform for connected vehicles that enables collective intelligence through distributed control systems. The project features real-time perception, audio-enhanced cognition, and scalable swarm architecture.",
        fullDescription: `SwarmSense is an innovative platform inspired by natural swarms, applying collective intelligence to connected vehicles. The system combines multiple sensor modalities to create a hyper-aware, collaborative network of vehicles that can perceive and respond to their environment in real-time.

Key Features:
• Multi-modal sensor fusion (LiDAR, camera, audio)
• Distributed control system using ROS 2
• Audio-enhanced emergency vehicle detection
• Zero occlusion navigation through collective perception
• Scalable swarm architecture for multiple vehicles

Technical Highlights:
• Hardware: Raspberry Pi/OpenCR mobile robots, LiDAR, Stereoscopic Cameras
• Software: ROS 2, OpenCV, Edge Impulse
• Languages: Python, C++
• Perception: RealSense cameras, LiDAR integration
• Processing: Jetson Nano deployment

Implementation Details:
• Distributed control system architecture
• Audio processing for emergency vehicle localization
• Image processing data pipelines
• Stereo camera depth perception analysis
• Hardware-accelerated processing

Challenges & Solutions:
• Successfully ported software to ROS 2
• Implemented alternative data transfer methods
• Optimized MATLAB-ROS integration
• Deployed AI models on Jetson Nano
• Overcame hardware limitations

Future Development:
• Real-world testing with automotive partners
• Integration with traffic management systems
• Urban parking optimization
• Expansion to drone swarms and smart city infrastructure`,
        date: "2024",
        location: "University of Michigan-Dearborn",
        skills: ["ROS 2", "Python", "C++", "OpenCV", "LiDAR", "Edge Impulse", "RealSense"]
    },
    {
        id: 5,
        title: "HackDearborn 1",
        description: "Developed Plan Up., a full-stack event planning platform that uses OpenAI and Twilio to create an immersive and responsive experience for both event planners and attendees. The platform streamlines event discovery and planning through natural language processing.",
        fullDescription: `Plan Up. is an innovative platform that revolutionizes event planning and discovery by providing a two-sided approach that benefits both event organizers and attendees. The system uses AI to create a more efficient method of integrating plans while maintaining the natural flow of human conversation.

Key Features:
• AI-powered event planning and discovery
• Natural language processing for intuitive interaction
• Two-sided platform for planners and attendees
• Real-time communication through Twilio integration
• Efficient event classification and organization

Technical Highlights:
• Frontend: Wix with Velo development
• AI Integration: OpenAI model
• Communication: Twilio
• Development: JavaScript
• Hosting: Wix platform

Implementation Details:
• Full-stack web application development
• OpenAI model integration for natural language processing
• Twilio integration for real-time communication
• Event classification system
• User-friendly interface design

Challenges & Solutions:
• Successfully developed a full-stack app in 10 hours
• Implemented novel event planning approach
• Created efficient event discovery system
• Optimized user experience for both planners and attendees

Future Development:
• Custom classification machine learning model
• Enhanced event organization capabilities
• Improved user interaction features
• Expanded platform functionality`,
        date: "2023",
        location: "University of Michigan-Dearborn",
        skills: ["JavaScript", "OpenAI", "Twilio", "Wix", "Velo", "NLP"]
    }
];

// Add current work data
const currentWork = [
    {
        id: 1,
        title: "Software Research Engineer",
        organization: "Ford Motor Company",
        description: "Leading manufacturing software modernization initiatives by developing innovative architectures and implementing cutting-edge software practices. Established and spearhead Ford's first dedicated manufacturing software engineering team, driving digital transformation in automotive manufacturing.",
        type: "job",
        skills: ["Software Architecture", "Manufacturing Systems", "Digital Transformation", "Team Leadership", "Modern Software Practices"]
    },
    {
        id: 2,
        title: "Graduate Student & Research Assistant",
        organization: "Wayne State University",
        description: "Pursuing Master's in Robotics & Intelligent Control while leading multiple student organizations and conducting research in surgical robotics. President of Warrior Robotics, Vice President of AI/ML Club, CTO of AWS Cloud Club, and Managing Director of Rover's Club. Researching AI applications for autonomous surgeries and surgeon aid systems at CARES lab using the DaVinci robot.",
        type: "academic",
        skills: ["Robotics", "AI/ML", "Leadership", "Research", "Surgical Robotics", "Autonomous Systems"]
    },
    {
        id: 3,
        title: "Personal Development & Time Management",
        organization: "Personal Growth",
        description: "Focusing on personal development and time management optimization while balancing multiple professional and academic commitments. Developing structured approaches to productivity, implementing effective scheduling systems, and building sustainable habits for long-term success.",
        type: "personal",
        skills: ["Time Management", "Personal Development", "Productivity Systems", "Work-Life Balance", "Habit Building"]
    }
];

export default function Home() {
    const typedElement = useRef(null);
    const [activeSection, setActiveSection] = useState('home');
    const [theme, setTheme] = useState('dark');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeProject, setActiveProject] = useState(null);
    const robotRef = useRef(null);
    const trailsRef = useRef([]);

    // Robot cursor effect
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const robot = robotRef.current;
        if (!robot) return;

        // Show the robot cursor once JS loads
        robot.style.display = 'block';

        let isOnCard = false;
        let cardRect = null;
        let currentAngle = 0;
        let borderAnimationFrame = null;

        const createTrail = (x, y) => {
            const trail = document.createElement('div');
            trail.className = 'robot-trail';
            trail.style.left = `${x}px`;
            trail.style.top = `${y}px`;
            document.body.appendChild(trail);

            // Store trail reference
            trailsRef.current.push(trail);

            // Fade out and remove trail
            setTimeout(() => {
                trail.classList.add('fade-out');
                setTimeout(() => {
                    if (document.body.contains(trail)) {
                        document.body.removeChild(trail);
                    }
                    trailsRef.current = trailsRef.current.filter(t => t !== trail);
                }, 300);
            }, 100);
        };

        const walkAroundBorder = () => {
            if (!isOnCard || !cardRect) return;

            // Calculate center of the card
            const centerX = cardRect.left + cardRect.width / 2;
            const centerY = cardRect.top + cardRect.height / 2;

            // Calculate radius for the path (slightly larger than the card)
            const radiusX = cardRect.width / 2 + 20;
            const radiusY = cardRect.height / 2 + 20;

            // Update angle
            currentAngle += 0.02;
            if (currentAngle >= Math.PI * 2) currentAngle = 0;

            // Calculate new position
            const x = centerX + Math.cos(currentAngle) * radiusX;
            const y = centerY + Math.sin(currentAngle) * radiusY;

            // Update robot position
            robot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${currentAngle * (180 / Math.PI)}deg)`;

            // Create trail at current position
            createTrail(x, y);

            borderAnimationFrame = requestAnimationFrame(walkAroundBorder);
        };

        const handleMouseMove = (e) => {
            const hoveredCard = e.target.closest('.tech-item, .stat-card, .project-card, .hackathon-card, .current-work-card');
            
            if (hoveredCard) {
                if (!isOnCard) {
                    isOnCard = true;
                    cardRect = hoveredCard.getBoundingClientRect();
                    walkAroundBorder();
                }
            } else {
                if (isOnCard) {
                    isOnCard = false;
                    cardRect = null;
                    if (borderAnimationFrame) {
                        cancelAnimationFrame(borderAnimationFrame);
                    }
                }
                
                // Normal cursor following behavior
                robot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;

                // Create trail at current position
                createTrail(e.clientX, e.clientY);
            }
        };

        // Throttle mouse move events
        let lastMove = 0;
        const throttledMouseMove = (e) => {
            const now = Date.now();
            if (now - lastMove >= 16) { // Limit to ~60fps
                handleMouseMove(e);
                lastMove = now;
            }
        };

        document.addEventListener('mousemove', throttledMouseMove);

        return () => {
            document.removeEventListener('mousemove', throttledMouseMove);
            if (borderAnimationFrame) {
                cancelAnimationFrame(borderAnimationFrame);
            }
            // Clean up any remaining trails
            trailsRef.current.forEach(trail => {
                if (document.body.contains(trail)) {
                    document.body.removeChild(trail);
                }
            });
            trailsRef.current = [];
        };
    }, []);

    useEffect(() => {
        // Set initial dark theme
        document.documentElement.style.setProperty('--background', 'var(--background-dark)');
        document.documentElement.style.setProperty('--text', '#ffffff');
        document.documentElement.style.setProperty('--card-bg', 'var(--card-bg-dark)');
    }, []);

    useEffect(() => {
        const options = {
            strings: [
                "Building the future of robotics",
                "Inspiring the next geneartion",
                "Fundamentally changing how cars are built",
                "Creating intelligent systems",
                "Solving complex problems"
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: false,
            cursorChar: '|',
            autoInsertCss: true,
        };

        const typed = new Typed(typedElement.current, options);
        return () => typed.destroy();
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.5 }
        );

        document.querySelectorAll('section[id]').forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.style.setProperty('--background', newTheme === 'dark' ? 'var(--background-dark)' : 'var(--background)');
        document.documentElement.style.setProperty('--text', newTheme === 'dark' ? '#ffffff' : 'var(--text)');
        document.documentElement.style.setProperty('--card-bg', newTheme === 'dark' ? 'var(--card-bg-dark)' : 'var(--card-bg)');
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const openProjectModal = (project) => {
        setActiveProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeProjectModal = () => {
        setActiveProject(null);
        document.body.style.overflow = 'auto';
    };

    const ProjectCard = ({ project }) => (
        <div className="project-card" onClick={() => openProjectModal(project)}>
            <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-info">
                    <div className="tech-tags">
                        {project.tech.map((tech, index) => (
                            <span key={index}>{tech}</span>
                        ))}
                    </div>
                    <div className="project-links">
                        {project.links.github && (
                            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link" onClick={(e) => e.stopPropagation()}>
                                <i className="fab fa-github"></i>
                            </a>
                        )}
                        {project.links.devpost && (
                            <a href={project.links.devpost} target="_blank" rel="noopener noreferrer" className="project-link" onClick={(e) => e.stopPropagation()}>
                                <i className="fab fa-dev"></i>
                            </a>
                        )}
                        {project.links.youtube && (
                            <a href={project.links.youtube} target="_blank" rel="noopener noreferrer" className="project-link" onClick={(e) => e.stopPropagation()}>
                                <i className="fab fa-youtube"></i>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

    const HackathonCard = ({ hackathon }) => (
        <div className="hackathon-card">
            <div className="hackathon-content">
                <div className="hackathon-header">
                    <div className="hackathon-title-group">
                        <h3>{hackathon.title}</h3>
                        <div className="hackathon-meta">
                            <span><i className="fas fa-university"></i> {hackathon.location}</span>
                            <span className="hackathon-date">{hackathon.date}</span>
                        </div>
                    </div>
                </div>
                <p>{hackathon.description}</p>
                <div className="hackathon-skills">
                    {hackathon.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                    ))}
                </div>
            </div>
        </div>
    );

    const CurrentWorkCard = ({ work }) => (
        <div className="current-work-card">
            <div className="current-work-content">
                <div className="current-work-icon">
                    <i className={`fas ${work.type === 'job' ? 'fa-briefcase' : work.type === 'academic' ? 'fa-graduation-cap' : 'fa-code'}`}></i>
                </div>
                <div className="current-work-info">
                    <div className="current-work-header">
                        <h3>{work.title}</h3>
                        <span className="work-type">{work.type.charAt(0).toUpperCase() + work.type.slice(1)}</span>
                    </div>
                    <div className="current-work-organization">
                        <i className="fas fa-building"></i>
                        <span>{work.organization}</span>
                    </div>
                    <p>{work.description}</p>
                    <div className="current-work-skills">
                        {work.skills.map((skill, index) => (
                            <span key={index} className="skill-tag">{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className={`app ${theme}`}>
            <Head>
                <title>Blaine Oania | Robotics Engineer</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Blaine Oania - Robotics Engineer and Software Developer specializing in autonomous systems and robotics innovation" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
            </Head>

            {/* Robot Cursor */}
            <div className="robot-cursor" ref={robotRef}>
                <i className="fas fa-robot"></i>
            </div>

            <nav className="navbar">
                <div className="container">
                    <Link href="/" className="nav-brand">
                        <i className="fas fa-robot"></i> Portfolio
                    </Link>
                    <div className="nav-links">
                        <a onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</a>
                        <a onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</a>
                        <a onClick={() => scrollToSection('current-work')} className={activeSection === 'current-work' ? 'active' : ''}>Current Work</a>
                        <a onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
                        <a onClick={() => scrollToSection('hackathons')} className={activeSection === 'hackathons' ? 'active' : ''}>Hackathons</a>
                        <a onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
                        <button className="theme-toggle" onClick={toggleTheme}>
                            <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
                        </button>
                    </div>
                </div>
            </nav>

            <main className="main">
                <section id="home" className="hero">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Hi, I'm <span className="highlight">Blaine.</span>
                        </h1>
                        <div className="hero-subtitle" ref={typedElement}></div>
                        <p className="hero-description">
                            Robotics Engineer & Software Developer
                        </p>
                        <div className="hero-buttons">
                            <button onClick={() => scrollToSection('projects')} className="primary-button">
                                <i className="fas fa-code"></i>
                                View My Work
                            </button>
                            <button onClick={() => scrollToSection('contact')} className="secondary-button">
                                <i className="fas fa-envelope"></i>
                                Get in Touch
                            </button>
                        </div>
                    </div>
                    <div className="hero-background">
                        <div className="gradient-sphere"></div>
                        <div className="grid-pattern"></div>
                    </div>
                </section>

                <section id="about" className="about-section">
                    <div className="container">
                        <h2 className="section-title"> About Me</h2>
                        <div className="about-grid">
                            <div className="about-content">
                                <p className="about-text">
                                    I'm passionate about democratizing robotics and inspiring the next generation of engineers. 
                                    With expertise in autonomous systems and robotics, I work on innovative solutions that bridge 
                                    the gap between complex robotics and practical applications.
                                </p>
                            </div>
                            <div className="stats-grid">
                                <div className="stat-card">
                                    <h3>3+</h3>
                                    <p>Years Experience</p>
                                </div>
                                <div className="stat-card">
                                    <h3>15+</h3>
                                    <p>Projects Completed</p>
                                </div>
                                <div className="stat-card">
                                    <h3>3+</h3>
                                    <p>Hackathon Wins</p>
                                </div>
                            </div>
                        </div>
                        <div className="tech-stack">
                            <h3>Technologies I Work With</h3>
                            <div className="tech-categories">
                                {techStack.map((category, idx) => (
                                    <div key={idx} className="tech-category">
                                        <h4 className="category-title">{category.category}</h4>
                                        <div className="tech-grid">
                                            {category.items.map((tech, techIdx) => (
                                                <div key={techIdx} className="tech-item">
                                                    <i className={tech.icon}></i>
                                                    <span>{tech.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section id="current-work" className="current-work-section">
                    <div className="container">
                        <h2 className="section-title"> Current Work</h2>
                        <div className="current-work-grid">
                            {currentWork.map((work) => (
                                <CurrentWorkCard key={work.id} work={work} />
                            ))}
                        </div>
                    </div>
                </section>

                <section id="projects" className="projects-section">
                    <div className="container">
                        <h2 className="section-title"> Featured Projects</h2>
                        <div className="project-grid">
                            {projects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                </section>

                <section id="hackathons" className="hackathons-section">
                    <div className="container">
                        <h2 className="section-title"> Hackathons</h2>
                        <div className="hackathon-grid">
                            {hackathons.map((hackathon) => (
                                <HackathonCard key={hackathon.id} hackathon={hackathon} />
                            ))}
                        </div>
                    </div>
                </section>

                <section id="contact" className="contact-section">
                    <div className="container">
                        <h2 className="section-title"> Let's Connect</h2>
                        <div className="contact-content">
                            <p className="contact-text">
                                Interested in collaborating on robotics projects or discussing innovative solutions?
                                Let's connect and explore possibilities together.
                            </p>
                            <div className="social-links">
                                <a href="https://github.com/BlaineKTMO" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <i className="fab fa-github"></i>
                                    <span>GitHub</span>
                                </a>
                                <a href="https://www.linkedin.com/in/blaine-oania" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <i className="fab fa-linkedin"></i>
                                    <span>LinkedIn</span>
                                </a>
                                <a href="mailto:blaineoania@gmail.com" className="social-link">
                                    <i className="fas fa-envelope"></i>
                                    <span>Email</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Project Modal */}
            {activeProject && (
                <div className={`modal-overlay ${activeProject ? 'active' : ''}`} onClick={closeProjectModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeProjectModal}>
                            <i className="fas fa-times"></i>
                        </button>
                        <h2 className="modal-title">{activeProject.title}</h2>
                        <div className="modal-description">
                            {activeProject.fullDescription.split('\n\n').map((paragraph, index) => (
                                <p key={index} style={{ marginBottom: '1rem' }}>{paragraph}</p>
                            ))}
                        </div>
                        <div className="tech-tags">
                            {activeProject.tech.map((tech, index) => (
                                <span key={index}>{tech}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            {activeProject.links.github && (
                                <a href={activeProject.links.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                    <i className="fab fa-github"></i>
                                </a>
                            )}
                            {activeProject.links.devpost && (
                                <a href={activeProject.links.devpost} target="_blank" rel="noopener noreferrer" className="project-link">
                                    <i className="fab fa-dev"></i>
                                </a>
                            )}
                            {activeProject.links.youtube && (
                                <a href={activeProject.links.youtube} target="_blank" rel="noopener noreferrer" className="project-link">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <footer className="footer">
                <div className="container">
                    <p>© {new Date().getFullYear()} Blaine Oania. All rights reserved.</p>
            </div>
            </footer>
        </div>
    );
}