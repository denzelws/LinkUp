import FormGroup from '../FormGroup'
import { Input, Select } from '../../templates/NewContact/styles'
import * as S from './styles'
import Button from '../Button'
import { FormEvent, useState } from 'react'

export type ContactFormProps = {
  buttonLabel: string
  error?: boolean
}

const ContactForm = ({ buttonLabel }: ContactFormProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({
      name,
      email,
      phone,
      category
    })
  }

  return (
    <S.WrapperForm onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
        />
      </FormGroup>

      <FormGroup>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
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
