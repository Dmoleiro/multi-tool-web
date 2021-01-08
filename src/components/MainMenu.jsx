import React from 'react';
import styles from '../styles/MainMenu.module.css';
import mtLogo from '../icons/mt-logo.png';

function MainMenu() {
    return (
        <div className={styles.mainContainer}>
            <img className={styles.logo} src={mtLogo} alt="Randomize Books" />
            <div className={styles.welcomeText}>Welcome to Multi Tool Web, please select a tool from the left menu.</div>
        </div>
    );
}

export default MainMenu;