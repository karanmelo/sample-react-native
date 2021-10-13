import React from 'react'

import { Router } from './router'
import { ThemeProvider, AuthProvider } from './store/'

const App: React.FC = () => (
  <ThemeProvider>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </ThemeProvider>
)

export default App
