import { Validator } from '.'

export const composite = (validators: Validator[]): Validator => {
  return async (value: any) => {
    for (const validator of validators) {
      const error = await validator(value)

      if (error) return error
    }

    return null
  }
}
