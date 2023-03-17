import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { theme } from 'theme'
import './App.css'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px;
  height: 100vh;
  width: 100vw;
`

const App = () => (
  <ThemeProvider theme={theme.default}>
    <Container>UIKit Playground</Container>
  </ThemeProvider>
)

export default App
