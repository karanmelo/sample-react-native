/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState, createRef } from 'react'

import { KeyboardTypeOptions, TextInput as TextInputRef } from 'react-native'

import { useIsMounted } from '../../../hooks'
import { Validator } from '../../../services/validation'
import { requiredValidator } from '../../../services/validation/validators'
import * as S from './styles'

export type TextInputProps = {
  label?: string
  placeholder?: string
  value?: string
  icon?: JSX.Element
  asyncValidation?: boolean
  disabled?: boolean
  touched?: boolean | undefined
  secureTextEntry?: boolean
  multiline?: boolean
  size?: number
  keyboardType?: KeyboardTypeOptions | undefined
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined
  onChange?: (value: string) => void
  validator?: Validator
  mask?: (value: string) => string

  // Dependência para atualizar o estado de validação do input
  validationDependency?: any
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  value,
  icon,
  asyncValidation = false,
  disabled = false,
  touched,
  secureTextEntry = false,
  multiline = false,
  validationDependency,
  size = 50,
  keyboardType,
  autoCapitalize = 'none',
  onChange: onChangeValue,
  validator = requiredValidator,
  mask = (maskValue: string) => maskValue,
}): JSX.Element => {
  const [isFocused, setIsFocused] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [wasTouched, setTouched] = useState<boolean | undefined>(
    touched || undefined,
  )
  const [isDisabled, setDisabled] = useState(disabled || false)

  const inputRef = createRef<TextInputRef>()

  const controlledComponent = value !== undefined

  const isMounted = useIsMounted()

  useEffect(() => {
    if (touched !== undefined) {
      if (wasTouched !== touched) setTouched(touched)
    }
  }, [touched])

  useEffect(() => {
    if (disabled !== undefined) {
      if (isDisabled !== disabled) setDisabled(disabled)
    }
  }, [disabled])

  const checkForErrorsOnChange = useCallback(
    async (inputValue = '') => {
      if (!asyncValidation) {
        if (!inputValue) return

        const message = await validator(inputValue)
        setError(message)
      } else {
        setTouched(false)
      }
    },
    [asyncValidation, validator],
  )

  const checkForErrorsOnBlur = useCallback(
    async (inputValue = '') => {
      const errorValidator = await validator(inputValue)
      setError(errorValidator)
    },
    [validator],
  )

  useEffect(() => {
    if (!controlledComponent) return

    if (asyncValidation) {
      if (error) setError(null)
      return
    }

    checkForErrorsOnChange(value)
  }, [value, validationDependency])

  useEffect(() => {
    if (!controlledComponent) return

    if (!wasTouched) return

    checkForErrorsOnBlur(value)
  }, [wasTouched])

  async function onChange(inputValue: string) {
    if (!onChangeValue) return

    const maskedValue = mask(inputValue)

    if (controlledComponent) return onChangeValue(maskedValue)
    // @ts-ignore
    if (inputRef.current) inputRef.current.value = maskedValue

    checkForErrorsOnChange(maskedValue)
    onChangeValue(maskedValue)
  }

  function onFocus() {
    setIsFocused(true)
  }

  async function onBlur() {
    await checkForErrorsOnBlur(value)

    if (!isMounted.current) return
    setIsFocused(false)
    setTouched(true)
  }

  const InputLabel = () => {
    if (!label) return

    return (
      <S.Label
        hasValue={value !== undefined && value !== ''}
        disabled={isDisabled}
      >
        {label}
      </S.Label>
    )
  }

  const RequiredError = () => {
    if (wasTouched && error) return <S.Error>{error}</S.Error>
  }

  return (
    <S.Wrapper>
      {InputLabel()}
      <S.InputWrapper size={size}>
        <S.Input
          secureTextEntry={secureTextEntry}
          ref={inputRef}
          value={value}
          multiline={multiline}
          onChangeText={text => onChange(text)}
          onFocus={onFocus}
          onBlur={_ => onBlur()}
          placeholder={placeholder}
          placeholderTextColor="#D9D9D9"
          autoCorrect={false}
          spellCheck={false}
          focusable={isFocused}
          editable={!isDisabled}
          disabled={isDisabled}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
        />
        {icon}
      </S.InputWrapper>
      {RequiredError()}
    </S.Wrapper>
  )
}
