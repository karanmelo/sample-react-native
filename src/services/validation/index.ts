import { MapObject } from '../../types/MapObject'

export type Validator = (
  value: any,
  context?: any,
) => (string | null) | Promise<string | null>

export type ValidationResult = {
  isValid: boolean
  errors: MapObject<string | null>
}

export type ValidationSchema = MapObject<Validator>
