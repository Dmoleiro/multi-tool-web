import React, { Component } from 'react';
import styles from '../styles/CalculatorPanel.module.css';
import backIcon from '../icons/back.svg';
import { calculatorConstants } from '../constants/CalculatorConstants';
import { selectToolPanel } from '../redux/actions/systemActions';
import { MAIN_MENU_PANEL } from '../constants/NavigationConstants';

class CalculatorPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstParcel: undefined,
            secondParcel: undefined,
            operation: undefined,
            result: undefined,
            invalidInput: false
        };
    }

    handleButtonClick(value = undefined) {
        let currFirstParcel = this.state.firstParcel;
        let currSecondParcel = this.state.secondParcel;
        let currOperation = this.state.operation;
        let currResult = this.state.result;
        switch(value) {
            case calculatorConstants.ONE:
            case calculatorConstants.TWO:
            case calculatorConstants.THREE:
            case calculatorConstants.FOUR:
            case calculatorConstants.FIVE:
            case calculatorConstants.SIX:
            case calculatorConstants.SEVEN:
            case calculatorConstants.EIGHT:
            case calculatorConstants.NINE:
            case calculatorConstants.ZERO:
            case calculatorConstants.DOT:
                if (!currResult) {
                    if (currOperation) {
                        this.setState({
                            ...this.state,
                            secondParcel: currSecondParcel ? currSecondParcel.concat(value) : value,
                            invalidInput: false,
                        });
                    } else {
                        this.setState({
                            ...this.state,
                            firstParcel: currFirstParcel ? currFirstParcel.concat(value) : value,
                            invalidInput: false,
                        });
                    }
                }
                break;
            case calculatorConstants.SUM:
            case calculatorConstants.SUBTRACT:
            case calculatorConstants.MULTIPLICATION:
            case calculatorConstants.DIVIDE:
                if (!currResult && currFirstParcel) {
                    this.setState({
                        ...this.state,
                        operation: value,
                        invalidInput: false,
                    });
                }   
            break;
            case calculatorConstants.CLEAR:
                this.clearValues();
                break;
            case calculatorConstants.EQUALS:
                this.calculateResult();
                break;
            default:
                break;
        }
    }

    calculateResult() {
        let result;
        let firstParcel = Number(this.state.firstParcel);
        let secondParcel = Number(this.state.secondParcel);

        if (isNaN(firstParcel) || isNaN(secondParcel)) {
            this.setState({
                ...this.state,
                invalidInput: true,
            })
            return;
        }

        switch(this.state.operation) {
            case calculatorConstants.SUM:
                result = Number(this.state.firstParcel) + Number(this.state.secondParcel);
                break;
            case calculatorConstants.SUBTRACT:
                result = Number(this.state.firstParcel) - Number(this.state.secondParcel);
                break;
            case calculatorConstants.MULTIPLICATION:
                result = Number(this.state.firstParcel) * Number(this.state.secondParcel);
                break;
            case calculatorConstants.DIVIDE:
                result = Number(this.state.firstParcel) / Number(this.state.secondParcel);
                break;
            default:
                break;
        }
        this.setState({
            ...this.state,
            result,
            invalidInput: false,
        });
    }

    clearValues() {
        this.setState({
            firstParcel: undefined,
            secondParcel: undefined,
            operation: undefined,
            result: undefined,
            invalidInput: false
        })
    }

    getDisplayValues() {
        let firstParcel = this.state.firstParcel;
        let secondParcel = this.state.secondParcel;
        let operation = this.state.operation;
        let result = this.state.result;
        return `${firstParcel ? firstParcel : ''} ${operation ? operation : ''} ${secondParcel ? secondParcel : ''} ${result ? '= ' + result : ''}`
    }

    backToMainMenu() {
        let store = this.props.store;
        if (store) {
            store.dispatch(selectToolPanel(MAIN_MENU_PANEL));
        }
    }

    render() {
        return (
            <div className={styles.calculatorContainer}>
                <div className={styles.calculatorHeaderContainer}>
                    <label className={styles.calculatorTitle}>Calculator </label>
                    <div className={styles.calculatorBackButtonContainer}>
                        <div className={styles.iconContainer}>
                            <img className={styles.icon} onClick={() => this.backToMainMenu()} src={backIcon} alt="Back to main menu" title="Back to main menu" />
                        </div> 
                    </div>                    
                </div>
                <div className={styles.calculatorPanel}>
                    <div className={styles.calculatorDisplay}>
                        {this.getDisplayValues()}
                    <div className={styles.invalidInput}>
                        {`${this.state.invalidInput ? 'Invalid input' : ''}`}
                    </div>
                    </div>
                    <div className={styles.calculatorRow}>
                        <div className={styles.calculatorButton} onClick={() => this.handleButtonClick(calculatorConstants.ONE)}>
                            <div className={styles.calculatorButtonText}>1</div>
                        </div>
                        <div className={styles.calculatorButton} onClick={() => this.handleButtonClick(calculatorConstants.TWO)}>
                            <div className={styles.calculatorButtonText}>2</div>
                        </div>
                        <div className={styles.calculatorButton} onClick={() => this.handleButtonClick(calculatorConstants.THREE)}>
                            <div className={styles.calculatorButtonText}>3</div>
                        </div>
                        <div className={styles.calculatorButton} onClick={() => this.handleButtonClick(calculatorConstants.SUM)}>
                            <div className={styles.calculatorButtonText}>+</div>
                        </div>
                    </div>
                    <div className={styles.calculatorRow}>
                        <div className={styles.calculatorButton} onClick={() => this.handleButtonClick(calculatorConstants.FOUR)}>
                            <div className={styles.calculatorButtonText}>4</div>
                        </div>
                        <div className={styles.calculatorButton} onClick={() => this.handleButtonClick(calculatorConstants.FIVE)}>
                            <div className={styles.calculatorButtonText}>5</div>
                        </div>
                        <div className={styles.calculatorButton} onClick={() => this.handleButtonClick(calculatorConstants.SIX)}>
                            <div className={styles.calculatorButtonText}>6</div>
                        </div>
                        <div className={styles.calculatorButton} onClick={() => this.handleButtonClick(calculatorConstants.SUBTRACT)}>
                            <div className={styles.calculatorButtonText}>-</div>
                        </div>
                    </div>
                    <div className={styles.calculatorRow}>
                        <div className={styles.calculatorButton} onClick={() => this.handleButtonClick(calculatorConstants.SEVEN)}>
                            <div className={styles.calculatorButtonText}>7</div>
                        </div>
                        <div className={styles.calculatorButton} onClick={() => this.handleButtonClick(calculatorConstants.EIGHT)}>
                            <div className={styles.calculatorButtonText}>8</div>
                        </div>
                        <div className={styles.calculatorButton} onClick={() => this.handleButtonClick(calculatorConstants.NINE)}>
                            <div className={styles.calculatorButtonText}>9</div>
                        </div>
                        <div className={styles.calculatorButton} onClick={() => this.handleButtonClick(calculatorConstants.MULTIPLICATION)}>
                            <div className={styles.calculatorButtonText}>x</div>
                        </div>
                    </div>
                    <div className={styles.calculatorRow}>
                        <div className={styles.calculatorButton} onClick={() => this.handleButtonClick(calculatorConstants.ZERO)}>
                            <div className={styles.calculatorButtonText}>0</div>
                        </div>
                        <div className={styles.calculatorButton} onClick={() => this.handleButtonClick(calculatorConstants.CLEAR)}>
                            <div className={styles.calculatorButtonText}>C</div>
                        </div>
                        <div className={styles.calculatorButton} onClick={() => this.handleButtonClick(calculatorConstants.DOT)}>
                            <div className={styles.calculatorButtonText}>.</div>
                        </div>
                        <div className={styles.calculatorButton} onClick={() => this.handleButtonClick(calculatorConstants.DIVIDE)}>
                            <div className={styles.calculatorButtonText}>/</div>
                        </div>
                    </div>
                    <div className={styles.calculatorRow}>
                    <div className={styles.calculatorButton} onClick={() => this.handleButtonClick(calculatorConstants.EQUALS)}>
                            <div className={styles.calculatorButtonText}>=</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CalculatorPanel;