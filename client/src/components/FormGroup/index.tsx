import { Input, Select } from '../../templates/NewContact/styles'
import * as S from './styles'

export type FormGroupProps = {
  children: React.ReactNode
}

const FormGroup = ({ children }: FormGroupProps) => (
  <S.Wrapper>{children}</S.Wrapper>
)

export default FormGroup
