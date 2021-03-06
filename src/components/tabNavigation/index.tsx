import React from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import { HomeContainer } from '../../containers'
import { Settings } from '../../screens'
import { useTheme } from '../../store/theme'
import { sg } from '../../styles/styleGuide'
import * as S from './styles'

const Tab = createMaterialBottomTabNavigator()

export const TabNavigation: React.FC = () => {
  const { theme } = useTheme()

  return (
    <Tab.Navigator
      initialRouteName="Settings"
      labeled={false}
      activeColor={sg.colors.white}
      inactiveColor={sg.colors.dark}
      barStyle={{ backgroundColor: theme.colors.border }}
      screenOptions={{
        tabBarTestID: 'TabNavigation',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeContainer}
        options={{
          tabBarIcon: ({ color }) => (
            <S.IconWrapper name="home" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => (
            <S.IconWrapper name="settings" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
