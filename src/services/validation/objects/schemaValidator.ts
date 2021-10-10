import { ValidationResult, ValidationSchema, Validator } from '..'

async function recursive(
  validateSchema: ValidationSchema,
  objectToValidate: any,
  mutableErrors: any,
  mutableIsValid: { valid: boolean },
  mutableCustomParams: any,
) {
  const validateEntries = Object.entries(validateSchema)

  for (const [key, value] of validateEntries) {
    const isValidator = typeof value === 'function'

    if (isValidator) {
      const validator: Validator = value as Validator

      const validatorError = await validator(
        objectToValidate[key],
        mutableCustomParams,
      )

      if (validatorError) {
        mutableIsValid.valid = false
      }

      mutableErrors[key] = validatorError
    } else {
      if (!mutableErrors[key]) mutableErrors[key] = {}
      await recursive(
        value as ValidationSchema,
        objectToValidate[key] || {},
        mutableErrors[key],
        mutableIsValid,
        mutableCustomParams,
      )
    }
  }
}

type SchemaValidatorDefaultParams = {
  context: any
}

export function schemaValidator<T = SchemaValidatorDefaultParams>(
  validateSchema: ValidationSchema,
) {
  return async (
    objectToValidate: any,
    customParams: T,
  ): Promise<ValidationResult> => {
    const mutableErrors = {}
    const mutableIsValid = { valid: true }
    const mutableCustomParams = { ...customParams }

    await recursive(
      validateSchema,
      objectToValidate,
      mutableErrors,
      mutableIsValid,
      mutableCustomParams,
    )

    return {
      errors: mutableErrors,
      isValid: mutableIsValid.valid,
    }
  }
}
