import React, { Component } from 'react';
import styles from '../styles/StringUtilsPanel.module.css';
import backIcon from '../icons/back.svg';
import { replaceCRLFWithCommas, replaceCommasWithCRLF } from '../helpers/StringHelpers';
import { selectToolPanel } from '../redux/actions/systemActions';
import { MAIN_MENU_PANEL } from '../constants/NavigationConstants';

class StringUtilsPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textAreaValue: 'Enter text here...',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        this.setState({ textAreaValue: evt.target.value });
    }

    handleFocus(evt) {
        evt?.target?.select()
    }

    replaceCRLFWithCommas() {
        let newText = replaceCRLFWithCommas(this.state.textAreaValue);
        this.setState({ textAreaValue: newText });
    }

    replaceCommasWithCRLF() {        
        let newText = replaceCommasWithCRLF(this.state.textAreaValue);
        this.setState({ textAreaValue: newText });
    }

    backToMainMenu() {
        let store = this.props.store;
        if (store) {
            store.dispatch(selectToolPanel(MAIN_MENU_PANEL));
        }
    }
    
    render() {
        return (
            <div className={styles.stringUtilsContainer}>
                <div className={styles.stringUtilsHeaderContainer}>
                    <label className={styles.stringUtilsTitle}>String Utils </label>
                    <div className={styles.stringUtilsBackButtonContainer}>
                        <div className={styles.iconContainer}>
                            <img className={styles.icon} onClick={() => this.backToMainMenu()} src={backIcon} alt="Back to main menu" title="Back to main menu" />
                        </div> 
                    </div>                    
                </div>
                
                <textarea
                className={styles.stringUtilsTextArea}
                value={this.state.textAreaValue}
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                />
                <div className={styles.stringUtilsToolButtonContainer}>
                    <div className={styles.stringUtilsToolButton} onClick={this.replaceCRLFWithCommas.bind(this)}>Replace CRLF with commas</div>
                    <div className={styles.stringUtilsToolButton} onClick={this.replaceCommasWithCRLF.bind(this)}>Replace commas with CRLF</div>
                </div>
            </div>
        );
    }
}

export default StringUtilsPanel;