import styled from 'styled-components'
import Header from '../patterns/Header'

export default function Home({toggleTheme, theme}) {
  return (
    <div>
    <Header toggleTheme={toggleTheme} theme={theme}></Header>
  </div>
  )
}
