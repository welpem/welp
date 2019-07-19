import {ThemeProvider, createGlobalStyle} from 'styled-components';
import {white, black, grey, aqua, purple} from './Colors'
import React from 'react'


const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => 
        props.theme.mode === 'dark' ? black[500] : white[500]};
        color: ${props => 
        props.theme.mode === 'dark' ? white[500] : black[500]};
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        @import url('https://rsms.me/inter/inter.css');
        html { font-family: 'Inter', sans-serif; }
        @supports (font-variation-settings: normal) {
        html { font-family: 'Inter var', sans-serif; }
}
    }`;

    export default GlobalStyle;