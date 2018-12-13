import React, { Component } from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import styled from 'styled-components';
import Home from './pages/Home';

const theme = {
    white: '#fff',
    veryDarkGray: '#585858',
    mainlyRed: '#f59b9b',
    gray: '#f1f3f5',
};

const StyledPage = styled.div`
    background: linear-gradient(to left, #5EB3E2, #afafea);
`;

injectGlobal`
  @font-face {
    font-family: 'Ubuntu', 'Arial', sans-serif;
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    line-height: 2;
    font-family: 'Ubuntu', 'Arial', sans-serif;
    
    h1 {
        margin: 0;
        text-align: center;
        color: ${props => props.theme.white};
    }
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
            <StyledPage>
                <Home />
            </StyledPage>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
