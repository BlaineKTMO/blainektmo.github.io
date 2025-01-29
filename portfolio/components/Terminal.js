import { useEffect, useState } from 'react';

import styles from "../styles/Terminal.module.css"

const Terminal = () => {
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

    const processCommand = (command) => {
        let response;
        switch (command.toLowerCase()) {
            case 'help':
                response = "Available commands: help, about, Blaine";
                break;
            case 'about':
                response = "This is a portfolio site created by Blaine.";
                break;
            case 'projects':
                response = "Projects: Project1, Project2, Project3";
                break;
            case 'blaine':
                // response = "Available flags: --currentRole, --location, --hobbies, --favColor, --funFact, --research"
                response = "Blaine holds a B.S. in Computer Science from Wayne State and currently work as a Software Controls Research Engineer at Ford, where he blend his love for technology with real-world applications. An avid programmer from a young age, Blaine also likes to participate in programming competitions, host educational workshops, and empower the younger generation to take up coding. Inspired by his mentors, he places a large emphasis on expanding the developer community, particularly in Robotics. Some of his most notable events have been HackDearborn 2024 and the Reverse Science Fair by the Science Policy Network of Detroit. Through these events, he garnered interest in robotics from secondary school students, peers, industry leaders, and politicians. When he's not programming or pursuing his interests, you can usually find him riding his motorcycle downtown or relaxing in a cozy café."
                break;
            default:
                response = `Command not found: ${command}`;
        }
        setTerminalLines([...terminalLines, `> ${command}`, response]);
    };

    useEffect(() => {
        const focusInput = () => {
            document.getElementById('terminalInput').focus();
        };

        const terminalWindow = document.querySelector('.terminalWindow');
        if (terminalWindow) {
            terminalWindow.addEventListener('click', focusInput);
        }
        return () => {
            if (terminalWindow) {
                terminalWindow.removeEventListener('click', focusInput);
            }
        };
    }, []);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const newLine = event.target.value;
            processCommand(newLine);
            event.target.value = '';
        }
    };

    return (
        <div className={styles.terminal}>
            <div className={styles.header}>
                <div className={styles.buttons}>
                    <span className={`${styles.button} ${styles.red}`}></span>
                    <span className={`${styles.button} ${styles.yellow}`}></span>
                    <span className={`${styles.button} ${styles.green}`}></span>
                </div>
                <div className={styles.title}>Terminal</div>
            </div>
            <div className={styles.terminalWindow} onClick={handleKeyDown}>
                <div className={styles.terminalBody}>
                    {terminalLines.map((line, index) => (
                        <p key={index} className={styles.terminalLine}>{line}</p>
                    ))}
                    <input
                        type="text"
                        id="terminalInput"
                        className={styles.terminalInput}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                processCommand(e.target.value);
                                e.target.value = '';
                            }
                        }}
                        autoFocus
                    />
                </div>
            </div>
        </div>
    );
};

export default Terminal;