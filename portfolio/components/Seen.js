import React from 'react';
import styles from '../styles/Seen.module.css';

const Seen = () => {
    return (
        <div className={styles.section}>
            <h1>🤖 I've talked robots at...</h1>
            <ul className={styles.talksList}>
                <li>Michigan DevFest 2024</li>
                <li>Detroit Library STEAM Event</li>
                <li>SciPol Detroit Reverse Science Fair</li>
                <li>Harper Woods College & Career Institute</li>
                <li>Wayne State Seminars</li>
                {/* Add more talks as needed */}
            </ul>
        </div>
    );
};

export default Seen;