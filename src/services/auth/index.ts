import { appConfig } from '../../config/app.config'
import * as mock from './mock'

const selectedModule = appConfig.RN_APP_USE_MOCKS ? mock : mock

export const signIn: SignIn = selectedModule.signIn
export const recoveryPassword: RecoveryPassword =
  selectedModule.recoveryPassword
export const codeValidation: CodeValidation = selectedModule.codeValidation
export const resetPassword: ResetPassword = selectedModule.resetPassword

export type AuthData = {
  access_token: string
  refresh_token: string
  username: string
  email: string
}

export type SignIn = (params: {
  user: string
  password: string
}) => Promise<AuthData>

export type RecoveryPassword = (phone: string) => Promise<void>

export type CodeValidation = (code: string) => Promise<void>

export type ResetPassword = (
  params: {
    password: string
    confirmPassword: string
  },
  code: string,
) => Promise<void>
