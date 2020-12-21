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
  background-image: ${props=>props.theme.backgroundImage};
  transition:background-color 300ms;
}
a{
  color: white;
}
.checkbtn{
  color: #fff;
  float: right;
  cursor: pointer;
  display: none;
}
#check{
  display:none;
}
@media (max-width: 500px){
  .checkbtn{
    display: flex
  }
  #check:checked ~ .side-menu{
    padding-right: 200px;
  }
}

`
const darkTheme = {
  themeName: 'darkTheme',
  primary: 'red',
  background: '#484848',
  backgroundImage: 'url(star-night.svg)'
}
const lightTheme = {
  themeName: 'lightTheme',
  primary: 'red',
  background: '#f1f1f1',
  backgroundImage: 'url(star-light.svg)'
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
