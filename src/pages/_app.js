import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from '../patterns/Header';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
*,*:before, *:after {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  font-family: sans-serif;
  text-decoration: none;
  
}
li{
  font-size: 18px;
}
a:link, a:visited, a:active {
  color: ${props=>props.theme.color};
}


body{
  background-color: ${props=>props.theme.background};
  background-image: ${props=>props.theme.backgroundImage};
  transition:background-color 300ms;
  color: ${props=>props.theme.color};
}
html, body, #__next{
    height:100%;
    margin: 0;
    padding: 0;
    border: 0;
  }

`
const darkTheme = {
  themeName: 'darkTheme',
  primary: 'red',
  background: '#484848',
  backgroundImage: 'url(star-night.svg)',
  color: '#f1f1f1'
}
const lightTheme = {
  themeName: 'lightTheme',
  primary: 'red',
  background: '#f1f1f1',
  backgroundImage: 'url(star-light.svg)',
  color: '#232931'
}

export default function App({ Component, pageProps, children }) {  
  const [theme, setTheme] = useState(lightTheme)
  const toggleTheme = ()=>{
    if(theme==darkTheme)
      setTheme(lightTheme)
    else setTheme(darkTheme)
  }
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header theme={theme} toggleTheme={toggleTheme}></Header>      
        <Component theme={theme} toggleTheme={toggleTheme}/>
      </ThemeProvider>
    </>
  )
}
