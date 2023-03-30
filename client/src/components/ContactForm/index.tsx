import FormGroup from '../FormGroup'
import { Input, Select } from '../../templates/NewContact/styles'
import * as S from './styles'
import Button from '../Button'

export type ContactFormProps = {
  buttonLabel: string
}

const ContactForm = ({ buttonLabel }: ContactFormProps) => (
  <S.WrapperForm>
    <FormGroup>
      <Input placeholder="Nome" />
    </FormGroup>

    <FormGroup>
      <Input placeholder="Email" />
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
      <Button type="submit" size="fullWidth">
        {buttonLabel}
      </Button>
    </S.ButtonContainer>
  </S.WrapperForm>
)

export default ContactForm
