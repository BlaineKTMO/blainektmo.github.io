import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import ReactFullpage from '@fullpage/react-fullpage';

export default function Home() {
    const typedElement = useRef(null);
    const inputRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            const x = (event.clientX / window.innerWidth) * 100 * 0.05;
            const y = (event.clientY / window.innerHeight) * 100 * 0.05;
            setMousePosition({ x, y });

            document.documentElement.style.setProperty('--mouse-x', x);
            document.documentElement.style.setProperty('--mouse-y', y);

        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const typeSpeeds = [60, 60, 50, 60, 60]; // Different type speeds for each string
        const backSpeeds = [60, 60, 60, 15, 60]; // Different type speeds for each string
        const backDelays = [800, 1500, 800, 1200, 500]; // Different back delays for each string

        const options = {
            strings: [
                "> Hi, I'm <strong>Blaine<strong>",
            ],
            typeSpeed: typeSpeeds[0],
            backSpeed: backSpeeds[0],
            backDelay: backDelays[0],
            loop: false,
            showCursor: true, // Show the cursor
            cursorChar: '█', // Customize the cursor character
            autoInsertCss: false, // Automatically insert CSS for cursor
            preStringTyped: (arrayPos, self) => {
                // Update typeSpeed and backDelay for each string
                self.typeSpeed = typeSpeeds[arrayPos];
                self.backSpeed = backSpeeds[arrayPos];
                self.backDelay = backDelays[arrayPos];
            }
        };

        const typed = new Typed(typedElement.current, options);

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    const [terminalLines, setTerminalLines] = useState([
        "> Blaine --currentRole",
        "Software Research Engineer at Ford, fundamentally changing how cars are built.",
        "‎ ",
        "> Blaine --location",
        "Detroit Metropolitan Area, Michigan",
        "‎ ",
        "> Blaine --hobbies",
        "Leather working, watch collecting, programming, motorcycle riding, and learning.",
        "‎ ",
        "> Type 'help' to see available commands.",
    ]);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const newLine = event.target.value;
            processCommand(newLine);
            event.target.value = '';
        }
    };

    const processCommand = (command) => {
        let response;
        switch (command.toLowerCase()) {
            case 'help':
                response = "Available commands: help, about, projects";
                break;
            case 'about':
                response = "This is a portfolio site created by [Your Name].";
                break;
            case 'projects':
                response = "Projects: Project1, Project2, Project3";
                break;
            default:
                response = `Command not found: ${command}`;
        }
        setTerminalLines([...terminalLines, `> ${command}`, response]);
    };

    const focusInput = () => {
        document.getElementById('terminal-input').focus();
    };


    return (
        <div>
            <Head>
                <title>About Me</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="google-site-verification" content="04j-0yUDW2oBFuoMn83sJ_dPGHnmBymiGppHJheaw0o" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            </Head>
            <ReactFullpage
                navigation
                sectionsColor={["#EDE8F5", "#EDE8F5", "#EDE8F5"]}
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section">
                                <div className="about-container">
                                    <div className="about">
                                        <div class="nameBanner" >
                                            <h1 ref={typedElement} className="typed-text"></h1>
                                        </div>
                                        <h2>Obsessed with democratizing robotics, breaking down barriers, and inspiring the next generation of engineers — while relentlessly pursuing innovations in robotic systems. They go hand in hand 🤝</h2>
                                    </div>
                                    <div className="terminal">
                                        <div className="terminal-header">
                                            <div className="terminal-buttons">
                                                <span className="terminal-button red"></span>
                                                <span className="terminal-button yellow"></span>
                                                <span className="terminal-button green"></span>
                                            </div>
                                            <div className="terminal-title">Terminal</div>
                                        </div>
                                        <div className='terminal-window' onClick={focusInput}>
                                            <div className="terminal-body">
                                                {terminalLines.map((line, index) => (
                                                    <p key={index} className="terminal-line">{line}</p>
                                                ))}
                                                <input
                                                    type="text"
                                                    id="terminal-input"
                                                    className="terminal-input"
                                                    onKeyDown={handleKeyDown}
                                                    autoFocus
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section">
                                <div className="projects-container">
                                    <div className="projects">
                                        <h1>
                                            Projects
                                        </h1>
                                        <h2> A collection of some of my passion projects</h2>
                                        <div className="project-card">
                                            <h3>WayneHacks 3: Immersive Visual Fusion</h3>
                                            <p>This project integrates data from a 360-degree camera and Velodyne LiDAR sensor to create a fused image, combining visual and depth information for a comprehensive environmental view. Using ROS 2, it includes lane segmentation for autonomous navigation and real-time VR visualization through Unity. Key features include hardware acceleration, efficient point cloud processing, and a VR “robot perspective” for immersive interaction.</p>
                                            <a href="https://github.com/BlaineKTMO/WayneHacks3" target="_blank" className="github-button">
                                                <i className="fab fa-github"></i>
                                            </a>
                                            <a href="https://devpost.com/software/immersive-visual-fusion" target="_blank" className="devpost-button">
                                                <i className="fab fa-dev"></i>
                                            </a>
                                            <a href="https://www.youtube.com/watch?v=8Lp-LuREHg8&t" target="_blank" className="devpost-button">
                                                <i className="fab fa-youtube"></i>
                                            </a>

                                        </div>
                                        <div className="project-card">
                                            <h3>Tic Tac Toe Robot</h3>
                                            <p>Designed and built a three-link robotic arm with MATLAB-based DH modeling, GUI controls, and optimization for precision. Implemented AI-driven decision-making for inverse kinematics and remote control via ROS. Developed and benchmarked path planning algorithms (Distance Transform, D*, PRM) for efficient navigation. Additionally, created a 3-joint planar robot for playing tic-tac-toe, integrating AI API connections in MATLAB and deploying the game through a Python Flask server in ROS2, containerized with Docker for cloud hosting.</p>
                                            <a href="https://github.com/BlaineKTMO/web-tic-tac-toe" target="_blank" className="github-button">
                                                <i className="fab fa-github"></i>
                                            </a>
                                        </div>
                                        <div className="project-card">
                                            <h3>HackDearborn 3: SwarmSense</h3>
                                            <p>SwarmSense uses multi-modal sensor fusion (LiDAR, cameras, audio) and reinforcement learning to enable vehicles to communicate and navigate with enhanced awareness. The system optimizes traffic flow, assists with parking, and supports scalable, autonomous vehicle coordination. Built with ROS2 and AI, SwarmSense aims to improve road safety and efficiency through collective intelligence.</p>
                                            <a href="https://devpost.com/software/swarmsense-connected-intelligence-for-connected-vehicles" target="_blank" className="devpost-button">
                                                <i className="fab fa-dev"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section">
                                <div className="contact-container">
                                    <div className="contact">
                                        <h1>Contact Me</h1>
                                        <div className="contact-card">
                                            <p>Always interested in chatting robots, programming, and more!</p>
                                            <div className="contact-links">
                                                <a href="https://github.com/yourusername" target="_blank" className="contact-button">
                                                    <i className="fab fa-github"></i> GitHub
                                                </a>
                                                <a href="https://www.linkedin.com/in/yourusername" target="_blank" className="contact-button">
                                                    <i className="fab fa-linkedin"></i> LinkedIn
                                                </a>
                                                <a href="mailto:your.email@example.com" className="contact-button">
                                                    <i className="fas fa-envelope"></i> Email
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
            <hr className="static-line" /> {/* Static horizontal line at the bottom */}

        </div>
    );
}