import { Validator } from '..'

export const isEqualToValidatorBuilder: (valueToCompare: any) => Validator =
  (valueToCompare: any) => (value?: any) => {
    if (value !== valueToCompare) {
      return 'Campos diferentes'
    }

    return null
  }
