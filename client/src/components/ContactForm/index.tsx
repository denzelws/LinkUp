import FormGroup from '../FormGroup'
import { Input, Select } from '../../templates/NewContact/styles'
import * as S from './styles'
import Button from '../Button'
import { FormEvent, useState } from 'react'
import isEmailValid from '../../utils/isEmailValid'

export type ContactFormProps = {
  buttonLabel: string
  error?: boolean
}

const ContactForm = ({ buttonLabel }: ContactFormProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('')
  const [errors, setErrors] = useState<{ field: string; message: string }[]>([])

  console.log(errors)

  const getErrorMessageByFieldName = (fieldName: string) => {
    return errors.find((error) => error.field === fieldName)?.message || ''
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({
      name,
      email,
      phone,
      category
    })
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)

    if (!e.target.value) {
      setErrors((prevState) => [
        ...prevState,
        { field: 'name', message: 'Nome é obrigatório' }
      ])
    } else {
      setErrors((prevState) =>
        prevState.filter((error) => error.field !== 'name')
      )
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)

    if (e.target.value && !isEmailValid(e.target.value)) {
      const emailAlreadyExists = errors.find((error) => error.field === 'email')

      if (emailAlreadyExists) {
        return
      }

      setErrors((prevState) => [
        ...prevState,
        { field: 'email', message: 'E-mail inválido.' }
      ])
    } else {
      setErrors((prevState) =>
        prevState.filter((error) => error.field !== 'email')
      )
    }
  }

  return (
    <S.WrapperForm onSubmit={handleSubmit}>
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
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          error={!!getErrorMessageByFieldName('email')}
        />
      </FormGroup>

      <FormGroup>
        <Input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Telefone"
        />
      </FormGroup>

      <FormGroup>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="category">Categoria</option>
          <option value="instagram">Instagram</option>
          <option value="discord">Discord</option>
        </Select>
      </FormGroup>

      <S.ButtonContainer>
        <Button size="fullWidth">{buttonLabel}</Button>
      </S.ButtonContainer>
    </S.WrapperForm>
  )
}

export default ContactForm
