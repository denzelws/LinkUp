import * as S from './styles'

export type FormGroupProps = {
  children: React.ReactNode
  error?: string
}

const FormGroup = ({ children, error }: FormGroupProps) => (
  <S.Wrapper>
    {children}
    {!!error && <small>{error}</small>}
  </S.Wrapper>
)

export default FormGroup
