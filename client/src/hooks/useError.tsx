import { useState } from 'react'

export type ErrorProps = {
  field: string
  message: string
}

export const useError = () => {
  const [errors, setErrors] = useState<{ field: string; message: string }[]>([])

  const emailAlreadyExists = errors.find((error) => error.field === 'email')

  if (emailAlreadyExists) {
    return
  }

  const setError = ({ field, message }: ErrorProps) => {
    setErrors((prevState) => [...prevState, { field, message }])
  }

  const removeError = (fieldName: string) => {
    setErrors((prevState) =>
      prevState.filter((error) => error.field !== fieldName)
    )
  }

  const getErrorMessageByFieldName = (fieldName: string) => {
    return errors.find((error) => error.field === fieldName)?.message || ''
  }

  return { setError, removeError, getErrorMessageByFieldName }
}
