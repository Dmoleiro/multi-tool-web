import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {selectToolPanel} from '../redux/actions/systemActions';
import {STRING_UTILS_PANEL, CALCULATOR_PANEL, MARKDOWN_PANEL, RANDOMIZE_BOOKS_PANEL} from '../constants/NavigationConstants';
import styles from '../styles/ToolsMenu.module.css';
import stringUtilsIcon from '../icons/sbutton.svg';
import calculatorIcon from '../icons/calculator.svg';
import markupEditorIcon from '../icons/poster.svg';
import randomizeBooksIcon from '../icons/book.svg';

export const ToolsMenu = () => {
    let globalState = useSelector(state => state);
    const dispatch = useDispatch();
    const [state, setState] = useState(() => {
        return {
            menuExpanded: false,
            firstPageLoad: true,
        }
    });
    
    return (
        <div 
            className={`${state.firstPageLoad ? styles.menu : styles.menuAnimated} ${state.menuExpanded ? styles.expanded : ''}`} 
            onMouseEnter={() => toogleMenu(state, setState)}
            onMouseLeave={() => toogleMenu(state, setState)}
            >
            <div 
                className={`${styles.button} ${state.menuExpanded ? styles.expanded : ''} ${globalState.systemReducer.openToolIdx === STRING_UTILS_PANEL ? styles.selected : ''}`} 
                onClick={() => dispatch(selectToolPanel(STRING_UTILS_PANEL))}
            >
                <div className={styles.iconContainer}>
                    <img className={styles.icon} src={stringUtilsIcon} alt="String Utils" />
                </div>                    
                <div className={`${styles.buttonText} ${state.menuExpanded ? styles.expanded : ''}`}>String Utils</div>
            </div>
            <div 
                className={`${styles.button} ${state.menuExpanded ? styles.expanded : ''} ${globalState.systemReducer.openToolIdx === CALCULATOR_PANEL ? styles.selected : ''}`} 
                onClick={() => dispatch(selectToolPanel(CALCULATOR_PANEL))}
            >
                <div className={styles.iconContainer}>
                    <img className={styles.icon} src={calculatorIcon} alt="Calculator" />
                </div>
                <div className={`${styles.buttonText} ${state.menuExpanded ? styles.expanded : ''}`}>Calculator</div>
            </div>
            <div 
                className={`${styles.button} ${state.menuExpanded ? styles.expanded : ''} ${globalState.systemReducer.openToolIdx === MARKDOWN_PANEL ? styles.selected : ''}`} 
                onClick={() => dispatch(selectToolPanel(MARKDOWN_PANEL))}
            >
                <div className={styles.iconContainer}>
                    <img className={styles.icon} src={markupEditorIcon} alt="Markdown Editor" />
                </div>
                <div className={`${styles.buttonText} ${state.menuExpanded ? styles.expanded : ''}`}>Markdown Editor</div>
            </div>
            <div 
                className={`${styles.button} ${state.menuExpanded ? styles.expanded : ''} ${globalState.systemReducer.openToolIdx === RANDOMIZE_BOOKS_PANEL ? styles.selected : ''}`} 
                onClick={() => dispatch(selectToolPanel(RANDOMIZE_BOOKS_PANEL))}
            >
                <div className={styles.iconContainer}>
                    <img className={styles.icon} src={randomizeBooksIcon} alt="Randomize Books" />
                </div>
                <div className={`${styles.buttonText} ${state.menuExpanded ? styles.expanded : ''}`}>Randomize Books</div>
            </div>
        </div>
    );


}

function toogleMenu(state, setState) {
    setState(
        {
            ...state,
            menuExpanded: !state.menuExpanded,
            firstPageLoad: false,
        }
    );
}

export default ToolsMenu;