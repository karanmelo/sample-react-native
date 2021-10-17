import { composite } from '../../../services/validation/composite'
import { schemaValidator } from '../../../services/validation/objects/schemaValidator'
import {
  requiredValidator,
  passwordValidator,
  isEqualToValidatorBuilder,
} from '../../../services/validation/validators'
import { UpdatePasswordType } from '../types'

export const updatePasswordValidation = {
  password: composite([requiredValidator, passwordValidator]),
  confirmPassword: (
    confirmPassword: string,
    { context }: { context: { password: string } },
  ) =>
    composite([
      requiredValidator,
      passwordValidator,
      isEqualToValidatorBuilder(context.password),
    ])(confirmPassword),
}

export const validateUpdatePasswordForm = (data: UpdatePasswordType) =>
  schemaValidator({
    ...updatePasswordValidation,
  })(data, { context: data })
