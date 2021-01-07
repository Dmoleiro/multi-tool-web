import { MAIN_MENU_PANEL, STRING_UTILS_PANEL, CALCULATOR_PANEL, MARKUP_PANEL, RANDOMIZE_BOOKS_PANEL } from "../constants/NavigationConstants";
import StringUtilsPanel from '../components/StringUtilsPanel';
import CalculatorPanel from '../components/CalculatorPanel';
import MarkupPanel from '../components/MarkupPanel';
import RandomizeBooksPanel from '../components/RandomizeBooksPanel';
import MainMenu from '../components/MainMenu';
import React from 'react';

export const getSelectedPanel = (panelId) => {
        switch (panelId) {
            case MAIN_MENU_PANEL:
                return <MainMenu/>
            case STRING_UTILS_PANEL:
                return <StringUtilsPanel/>
            case CALCULATOR_PANEL:
                return <CalculatorPanel/>
            case MARKUP_PANEL:
                return <MarkupPanel/>
            case RANDOMIZE_BOOKS_PANEL:
                return <RandomizeBooksPanel/>
            default:
                return null;
        }
}