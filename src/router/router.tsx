import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { AuthStack } from './authStack'

export const Router = () => {
  const renderNavigation = () => {
    return <AuthStack />
  }

  return <NavigationContainer>{renderNavigation()}</NavigationContainer>
}
