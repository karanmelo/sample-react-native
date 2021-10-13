import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { useAuth } from '../store/auth'
import { AppStack } from './appStack'
import { AuthStack } from './authStack'

export const Router = () => {
  const { authData } = useAuth()

  const renderNavigation = () => {
    if (!authData) return <AuthStack />
    return <AppStack />
  }

  return <NavigationContainer>{renderNavigation()}</NavigationContainer>
}
