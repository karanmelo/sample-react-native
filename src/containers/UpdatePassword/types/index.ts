export enum UpdatePasswordEnum {
  PASSWORD = 'password',
  CONFIRM_PASSWORD = 'confirmPassword',
}

export type UpdatePasswordType = {
  password: string
  confirmPassword: string
}
