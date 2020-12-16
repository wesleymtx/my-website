import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useState } from 'react';
import Header from '../patterns/Header';
const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: sans-serif;
}
body{
  background-color: ${props=>props.theme.background};
}
a{
  color: white;
}
`
const darkTheme = {
  themeName: 'darkTheme',
  primary: 'red',
  background: '#484848'
}
const lightTheme = {
  themeName: 'lightTheme',
  primary: 'red',
  background: '#f1f1f1'
}

export default function App({ Component, pageProps }) {  
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
        <Component {...pageProps}  theme={theme} toggleTheme={toggleTheme}/>
      </ThemeProvider>
    </>
  )
}
