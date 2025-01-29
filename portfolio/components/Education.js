import React from 'react';

import styles from "../styles/Education.module.css";

const Education = () => {
    return (
        <div className={styles.educationContainer}>
            <h1>🎓 Education</h1>
            <div className={styles.educationCard}>
                <h3>M.S. in Robotics and Intelligent Control</h3>
                <p>Leading the #1 Intelligent Ground Vehicle Competition team in Michigan to take #1 in the world.</p>
                <p>Placing Wayne State on the map for AI and robotics research.</p>
                <p>Wayne State University, Detroit MI</p>
                <p>2023 - Present</p>
            </div>
            <div className={styles.educationCard}>
                <h3>B.S. in Computer Science</h3>
                <p>Wayne State University, Detroit MI</p>
                <p>2020-2023</p>
            </div>
        </div>
    );
};

export default Education;