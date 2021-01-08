// import { render, screen } from '@testing-library/react';
// import LandingPage from '../containers/LandingPage';
import React from 'react';
import { getSelectedPanel } from '../helpers/NavigationHelpers';
import { MAIN_MENU_PANEL, STRING_UTILS_PANEL, CALCULATOR_PANEL, MARKDOWN_PANEL } from '../constants/NavigationConstants';
import MainMenu from '../components/MainMenu';
import StringUtilsPanel from '../components/StringUtilsPanel';
import CalculatorPanel from '../components/CalculatorPanel';
import MarkdownPanel from '../components/MarkdownPanel';
import { replaceCRLFWithCommas, replaceCommasWithCRLF } from '../helpers/StringHelpers';

describe ('Test Navigation Helpers', () => {
  let selectedPanel;
  it ('getSelectedPanel returns MainMenu', () => {
    selectedPanel = getSelectedPanel(MAIN_MENU_PANEL);
    expect(selectedPanel).toEqual(<MainMenu/>);
  });
  it ('getSelectedPanel returns StringUtils', () => {
    selectedPanel = getSelectedPanel(STRING_UTILS_PANEL);
    expect(selectedPanel).toEqual(<StringUtilsPanel/>);
  });
  it ('getSelectedPanel returns Calculator', () => {
    selectedPanel = getSelectedPanel(CALCULATOR_PANEL);
    expect(selectedPanel).toEqual(<CalculatorPanel/>);
  });
  it ('getSelectedPanel returns Markup', () => {
    selectedPanel = getSelectedPanel(MARKDOWN_PANEL);
    expect(selectedPanel).toEqual(<MarkdownPanel/>);
  });
  it ('getSelectedPanel returns null', () => {
    selectedPanel = getSelectedPanel('x');
    expect(selectedPanel).toEqual(null);
  });
});  

describe ('Test String Helpers', () => {
  let stringHelperReturn;
  it ('replaceCRLFWithCommas returns with no CRLF', () => {
    stringHelperReturn = replaceCRLFWithCommas('a\na\na\na\na\ra\ra\ra\ra\na');
    expect(stringHelperReturn).not.toMatch(/(\n|\r)/i);
  });
  it ('replaceCommasWithCRLF returns with no commas', () => {
    stringHelperReturn = replaceCommasWithCRLF('a,a,a,a,a,a,a,a,a,a');
    expect(stringHelperReturn).not.toMatch(/(,)/i);
  });
});