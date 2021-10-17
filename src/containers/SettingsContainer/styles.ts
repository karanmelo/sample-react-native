import { Text, TouchableHighlight, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styled from 'styled-components'

import { sg } from '../../styles/styleGuide'

export const SettingsContainer = styled(View)`
  flex: 1;
  justify-content: flex-end;
`

export const Header = styled(View)`
  flex-direction: row;
  align-items: center;
`

export const Avatar = styled(View)`
  width: 36px;
  height: 36px;

  justify-content: center;
  align-items: center;

  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.button};
`

export const AvatarLabel = styled(Text)`
  font-family: ${sg.fontFamily.primary};
  font-style: normal;
  font-weight: normal;
  font-size: ${sg.fontSize.large};
  line-height: ${sg.fontSize.xlarge};

  color: ${sg.colors.white};
`

export const Profile = styled(View)`
  width: 80%;
  margin-left: ${sg.spacing.large};

  flex-direction: column;
  align-items: flex-start;
`

export const Username = styled(Text)`
  font-family: ${sg.fontFamily.primary};
  font-style: normal;
  font-weight: bold;
  font-size: ${sg.fontSize.large};
  line-height: ${sg.fontSize.xlarge};

  color: ${({ theme }) => theme.colors.text};
`

export const SettingsContent = styled(View)`
  flex-direction: column;
`

export const SettingsOption = styled(TouchableHighlight).attrs(({ theme }) => ({
  underlayColor: theme.name === 'light' ? sg.colors.lightGray : sg.colors.dark,
}))`
  padding: 13px 0;
  text-align: center;

  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`
export const SettingsTitle = styled(Text)`
  margin-left: 32px;

  font-family: ${sg.fontFamily.primary};
  font-style: normal;
  font-weight: bold;
  font-size: ${sg.fontSize.medium};
  line-height: ${sg.fontSize.xlarge};

  color: ${({ theme }) => theme.colors.text};
`

export const ProfileIcon = styled(FontAwesome)`
  font-family: ${sg.fontFamily.primary};
  font-style: normal;
  font-weight: normal;
  font-size: ${sg.fontSize.xxlarge};

  color: ${({ theme }) => theme.colors.button};
`

export const LockPasswordIcon = styled(MaterialCommunityIcons)`
  font-family: ${sg.fontFamily.primary};
  font-style: normal;
  font-weight: normal;
  font-size: ${sg.fontSize.xlarge};

  color: ${({ theme }) => theme.colors.button};
`

export const LogoutIcon = styled(MaterialCommunityIcons)`
  font-family: ${sg.fontFamily.primary};
  font-style: normal;
  font-weight: normal;
  font-size: ${sg.fontSize.xlarge};

  color: ${({ theme }) => theme.colors.button};
`
