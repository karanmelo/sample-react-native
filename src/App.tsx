import React from 'react'

import Toast from 'react-native-toast-message'

import { toastConfig } from './config/Toast'
import { Router } from './router'
import { ThemeProvider, AuthProvider } from './store/'

const App: React.FC = () => (
  <ThemeProvider>
    <AuthProvider>
      <Router />

      <Toast ref={ref => Toast.setRef(ref)} config={toastConfig} />
    </AuthProvider>
  </ThemeProvider>
)

export default App
