import Config from 'react-native-config'

type AppConfigType = {
  RN_APP_ENV: 'production' | 'development'
  RN_APP_USE_MOCKS: boolean
  RN_APP_BASE_URL: string
}

export const appConfig = {
  RN_APP_ENV: Config.RN_APP_ENV || 'development',
  RN_APP_USE_MOCKS: Config.RN_APP_USE_MOCKS === 'true',
  RN_APP_BASE_URL: Config.RN_APP_BASE_URL || 'http://localhost:8081/',
} as AppConfigType
