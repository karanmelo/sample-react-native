import React from 'react'

import {
  SuccessToast,
  ErrorToast,
  BaseToastProps,
} from 'react-native-toast-message'

import { sg } from '../../styles/styleGuide'

export const toastConfig = {
  success: (rest: BaseToastProps) => (
    <SuccessToast
      {...rest}
      text1Style={{
        color: sg.colors.dark,
      }}
      text2Style={{
        color: sg.colors.dark,
      }}
    />
  ),

  error: (rest: BaseToastProps) => (
    <ErrorToast
      {...rest}
      text1Style={{
        color: sg.colors.dark,
      }}
      text2Style={{
        color: sg.colors.dark,
      }}
    />
  ),
}
