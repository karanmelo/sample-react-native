export const mask =
  (maskValue: string) =>
  (currentValue: string = ''): string => {
    const maxAllowedLength = (maskValue.match(/\*/g) || []).length
    let onlyNumbers = (currentValue || '').replace(/[^0-9]/g, '')

    if (onlyNumbers.length > maxAllowedLength) {
      onlyNumbers = onlyNumbers.slice(0, maxAllowedLength)
    }

    const formatedValue = []
    let valueIndex = 0
    let maskIndex = 0
    while (valueIndex < onlyNumbers.length) {
      if (maskValue[maskIndex] === '*') {
        formatedValue.push(onlyNumbers[valueIndex])
        valueIndex += 1
      } else {
        formatedValue.push(maskValue[maskIndex])
      }
      maskIndex += 1
    }
    if (
      maxAllowedLength === onlyNumbers.length &&
      maskValue[maskValue.length - 1] !== '*'
    ) {
      formatedValue.push(maskValue[maskValue.length - 1])
    }
    return formatedValue.join('')
  }
