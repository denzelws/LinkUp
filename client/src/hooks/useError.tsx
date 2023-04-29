import { useState } from 'react'

export type ErrorProps = {
  field: string
  message: string
}

export type HookProps = {
  errors: { field: string; message: string }[]
  setError: ({ field, message }: ErrorProps) => void
  removeError: (fieldName: string) => void
  getErrorMessageByFieldName: (fieldName: string) => string
}

export const useError = (): HookProps => {
  const [errors, setErrors] = useState<{ field: string; message: string }[]>([])

  function setError({ field, message }: ErrorProps) {
    const emailAlreadyExists = errors.find((error) => error.field === 'email')

    if (emailAlreadyExists) {
      return
    }

    setErrors((prevState) => [...prevState, { field, message }])
  }

  function removeError(fieldName: string) {
    setErrors((prevState) =>
      prevState.filter((error) => error.field !== fieldName)
    )
  }

  function getErrorMessageByFieldName(fieldName: string) {
    return errors.find((error) => error.field === fieldName)?.message || ''
  }

  return {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName
  }
}
