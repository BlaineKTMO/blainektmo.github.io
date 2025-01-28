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
                response = "Available flags: --currentRole, --location, --hobbies, --favColor, --funFact, --research"
            default:
                response = `Command not found: ${command}`;
        }
        setTerminalLines([...terminalLines, `> ${command}`, response]);
    };

    useEffect(() => {
        const focusInput = () => {
            document.getElementById('terminal-input').focus();
        };

        const terminalWindow = document.querySelector('.terminal-window');
        if (terminalWindow) {
            terminalWindow.addEventListener('click', focusInput);
        }
        return () => {
            if (terminalWindow) {
                terminalWindow.removeEventListener('click', focusInput);
            }
        };
    }, []);

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
            <div className={styles.terminalWindow}>
                <div className={styles.terminalBody}>
                    {terminalLines.map((line, index) => (
                        <p key={index} className={styles.terminalLine}>{line}</p>
                    ))}
                    <input
                        type="text"
                        id="terminal-input"
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