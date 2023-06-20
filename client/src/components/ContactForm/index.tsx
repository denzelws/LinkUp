import { FormEvent, useEffect, useState } from 'react'

import { useError } from '../../hooks/useError'
import { Input, Select } from '../../templates/NewContact/styles'

import FormGroup from '../FormGroup'
import Button from '../Button'
import isEmailValid from '../../utils/isEmailValid'

import * as S from './styles'
import formatPhone from '../../utils/formatPhone'
import categoriesService, {
  CategoriesProps
} from '../../services/CategoriesService'

export type ContactFormProps = {
  buttonLabel: string
  error?: boolean
}

const ContactForm = ({ buttonLabel }: ContactFormProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [categories, setCategories] = useState<CategoriesProps[]>([])

  const { errors, setError, removeError, getErrorMessageByFieldName } =
    useError()

  const isFormValid = name && errors.length === 0

  useEffect(() => {
    async function loadCategories() {
      const categoriesList = await categoriesService.listCategories()
      setCategories(categoriesList)
    }

    loadCategories()
  }, [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({
      name,
      email,
      phone,
      categoryId
    })
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

  return (
    <S.WrapperForm onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          value={name}
          onChange={handleNameChange}
          placeholder="Nome"
          error={!!getErrorMessageByFieldName('name')}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          error={!!getErrorMessageByFieldName('email')}
        />
      </FormGroup>

      <FormGroup>
        <Input
          value={phone}
          onChange={handlePhoneChange}
          placeholder="Telefone"
          maxLength={15}
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option value="">Sem categoria</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
      </FormGroup>

      <S.ButtonContainer>
        <Button size="fullWidth" disabled={!isFormValid}>
          {buttonLabel}
        </Button>
      </S.ButtonContainer>
    </S.WrapperForm>
  )
}

export default ContactForm
