import { SignIn, RecoveryPassword, ResetPassword, CodeValidation } from '.'
import { freeze } from '../../utils/freeze'

export const signIn: SignIn = async ({ user }) => {
  await freeze()

  if (user !== 'admin') throw new Error('Invalid authentication')

  return {
    access_token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMDgxYTNiMC1kZDAzLTQ0NTAtODhlOC02Y2ZiYTRlZDlmMWMiLCJ1c2VyQWNjZXNzSWQiOiI2MjE3MTBlYS03ZTFjLTRiMGEtODRiZi1iZDQwZGU5ZTAxOTQiLCJyb2xlIjoiZHJpdmVyIiwiaWF0IjoxNjMyMjI0NjcxLCJleHAiOjE2MzIzMTEwNzF9.XTpak02nrhKhqrxJa5wc2cdm_riXpZe41lDrKdTK70Q',
    refresh_token: 'refresh_token',
    username: 'Usuário Teste',
    email: 'admin@email.com',
  }
}

export const recoveryPassword: RecoveryPassword = async () => {
  await freeze()
}

export const codeValidation: CodeValidation = async () => {
  await freeze()
}

export const resetPassword: ResetPassword = async () => {
  await freeze()
}
