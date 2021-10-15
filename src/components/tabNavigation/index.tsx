import React from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import { HomeContainer, SettingsContainer } from '../../containers'
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
      // sceneAnimationEnabled={true}
      barStyle={{ backgroundColor: theme.colors.border }}
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
        component={SettingsContainer}
        options={{
          tabBarIcon: ({ color }) => (
            <S.IconWrapper name="settings" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
