import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'

import { MyContext } from './myContext'

import { Routes } from '../src/routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MyContext.Provider value={{ name: 'Alexandre Simões', email: 'alexsm@gmail.com' }}>
        <Routes />
      </MyContext.Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
