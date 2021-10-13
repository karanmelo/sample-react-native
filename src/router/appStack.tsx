import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { Screens } from '.'
import { Home } from '../screens'

const Stack = createStackNavigator()

export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'transparentModal',
      }}
    >
      <Stack.Screen name={Screens.HOME} component={Home} />
    </Stack.Navigator>
  )
}
