import React, { Component } from 'react';
import styles from '../styles/StringUtilsPanel.module.css';
import { replaceCRLFWithCommas, replaceCommasWithCRLF } from '../helpers/StringHelpers';

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

    replaceCRLFWithCommas() {
        let newText = replaceCRLFWithCommas(this.state.textAreaValue);
        this.setState({ textAreaValue: newText });
    }

    replaceCommasWithCRLF() {        
        let newText = replaceCommasWithCRLF(this.state.textAreaValue);
        this.setState({ textAreaValue: newText });
    }
    
    render() {
        return (
            <div className={styles.stringUtilsContainer}>
                <div className={styles.stringUtilsHeaderContainer}>
                    <label className={styles.stringUtilsTitle}>String Utils </label>
                    <div >Back to Main Menu</div>
                </div>
                
                <textarea
                className={styles.stringUtilsTextArea}
                value={this.state.textAreaValue}
                onChange={this.handleChange}
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