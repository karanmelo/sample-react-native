import { composite } from '../../../services/validation/composite'
import { schemaValidator } from '../../../services/validation/objects/schemaValidator'
import {
  passwordValidator,
  requiredValidator,
} from '../../../services/validation/validators'

export const validation = {
  user: composite([requiredValidator]),
  password: composite([requiredValidator, passwordValidator]),
}

export const validator = (data: { user: string; password: string }) =>
  schemaValidator({
    ...validation,
  })(data, { context: data })
