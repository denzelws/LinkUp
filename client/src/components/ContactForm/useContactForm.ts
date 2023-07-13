import {
  FormEvent,
  ForwardedRef,
  useEffect,
  useImperativeHandle,
  useState
} from 'react'

import { useError } from '../../hooks/useError'
import isEmailValid from '../../utils/isEmailValid'
import formatPhone from '../../utils/formatPhone'

import categoriesService, {
  CategoriesProps
} from '../../services/CategoriesService'

import { CardProps } from '../Card'
import { ContactFormProps } from '.'

export const useContactForm = (
  { onSubmit }: ContactFormProps,
  ref: ForwardedRef<unknown>
) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [categories, setCategories] = useState<CategoriesProps[]>([])
  const [isLoadingCategories, setIsLoadingCategories] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { errors, setError, removeError, getErrorMessageByFieldName } =
    useError()

  const isFormValid = name && errors.length === 0

  useImperativeHandle(
    ref,
    () => ({
      SetFieldsValue: (contact: CardProps) => {
        setName(contact.name ?? '')
        setEmail(contact.email ?? '')
        setPhone(formatPhone(contact.phone ?? ''))
        setCategoryId(contact.categoryId ?? '')
      },
      resetFields: () => {
        setName('')
        setEmail('')
        setPhone('')
        setCategoryId('')
      }
    }),
    []
  )

  useEffect(() => {
    async function loadCategories() {
      try {
        const categoriesList = await categoriesService.listCategories()
        setCategories(categoriesList)
      } catch {
      } finally {
        setIsLoadingCategories(false)
      }
    }

    loadCategories()
  }, [])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsSubmitting(true)

    await onSubmit({
      name,
      email,
      phone,
      categoryId
    })

    setIsSubmitting(false)
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)

    if (!e.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório' })
    } else {
      removeError('name')
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)

    if (e.target.value && !isEmailValid(e.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido' })
    } else {
      removeError('email')
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value))
  }

  return {
    handleSubmit,
    getErrorMessageByFieldName,
    handleNameChange,
    name,
    email,
    phone,
    handlePhoneChange,
    handleEmailChange,
    isLoadingCategories,
    categoryId,
    setCategoryId,
    categories,
    isFormValid,
    isSubmitting
  }
}
