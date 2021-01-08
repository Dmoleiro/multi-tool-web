import { MAIN_MENU_PANEL, STRING_UTILS_PANEL, CALCULATOR_PANEL, MARKDOWN_PANEL, RANDOMIZE_BOOKS_PANEL } from "../constants/NavigationConstants";
import StringUtilsPanel from '../components/StringUtilsPanel';
import CalculatorPanel from '../components/CalculatorPanel';
import MarkdownPanel from '../components/MarkdownPanel';
import RandomizeBooksPanel from '../components/RandomizeBooksPanel';
import MainMenu from '../components/MainMenu';
import React from 'react';

export const getSelectedPanel = (panelId, store) => {
        switch (panelId) {
            case MAIN_MENU_PANEL:
                return <MainMenu/>
            case STRING_UTILS_PANEL:
                return <StringUtilsPanel store={store}/>
            case CALCULATOR_PANEL:
                return <CalculatorPanel store={store}/>
            case MARKDOWN_PANEL:
                return <MarkdownPanel/>
            case RANDOMIZE_BOOKS_PANEL:
                return <RandomizeBooksPanel/>
            default:
                return null;
        }
}