import React from 'react';
import { useSelector } from "react-redux";
import styles from '../styles/LandingPage.module.css'
import { getSelectedPanel } from '../helpers/NavigationHelpers';
import ToolsMenu from '../components/ToolsMenu';

function LandingPage() {
    let globalState = useSelector(state => state);
    let panel = getSelectedPanel(globalState.systemReducer.openToolIdx)
    return (
        <div className={styles.menuContainer}>
            <ToolsMenu/>
            <div className={styles.openToolContainer}>
                {panel}
            </div>            
        </div>
    );
}

export default LandingPage;