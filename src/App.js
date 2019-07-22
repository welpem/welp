import React from 'react';
import './App.css';
import routes from './routes'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'

//styled components//
import {white, black, grey, aqua, purple} from './styles/Theme/Colors'
import {Page} from './styles/Styled-Components/Layout/Box'
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`
    body {
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






function App() {



  return (
   
    <main className="App">
    {/* <GlobalStyle/> */}
    {/* <ThemeProvider theme={theme}> */}
      
      {/* <Page> */}
        
        {/* <Nav/> */}
          {routes}
        
        {/* <Footer/> */}
      {/* </Page> */}
      
    
    {/* </ThemeProvider> */}
    </main>

  );
}

export default App;