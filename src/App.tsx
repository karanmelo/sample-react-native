import React from 'react'

import { Router } from './router'
import { ThemeProvider } from './store/'

const App: React.FC = () => (
  <ThemeProvider>
    <Router />
  </ThemeProvider>
)

export default App
