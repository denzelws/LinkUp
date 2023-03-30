import FormGroup from '../FormGroup'
import { Input, Select } from '../../templates/NewContact/styles'
import * as S from './styles'
import Button from '../Button'

export type ContactFormProps = {
  buttonLabel: string
  error?: boolean
}

const ContactForm = ({ buttonLabel }: ContactFormProps) => (
  <S.WrapperForm>
    <FormGroup>
      <Input placeholder="Nome" />
    </FormGroup>

    <FormGroup error="O formato do e-mail é inválido">
      <Input placeholder="Email" error />
    </FormGroup>

    <FormGroup>
      <Input placeholder="Senha" />
    </FormGroup>

    <FormGroup>
      <Select>
        <option value="instagram">Instagram</option>
      </Select>
    </FormGroup>

    <S.ButtonContainer>
      <Button size="fullWidth">{buttonLabel}</Button>
    </S.ButtonContainer>
  </S.WrapperForm>
)

export default ContactForm
