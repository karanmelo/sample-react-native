import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { Screens } from '.'
import { SignIn } from '../screens'

const Stack = createStackNavigator()

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'transparentModal',
      }}
    >
      <Stack.Screen name={Screens.LOGIN} component={SignIn} />
    </Stack.Navigator>
  )
}
