import React from 'react'

import { SettingsContainer } from '../../containers'
import { Navigation } from '../../types/navigation'

export type SettingsProps = {
  navigation: Navigation
}
export const Settings: React.FC<SettingsProps> = ({ navigation }) => (
  <SettingsContainer navigation={navigation} />
)
