import { InputHTMLAttributes } from 'react'
import * as S from './styles'

export type TextFieldProps = {
  error?: string
  icon?: React.ReactNode
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({ error, icon, ...props }: TextFieldProps) => (
  <S.Wrapper>
    <S.InputWrapper>
      {!!icon && <S.Icon>{icon}</S.Icon>}
      <S.Input type="text" placeholder="Pesquisar contato..." {...props} />
    </S.InputWrapper>
    {!!error && <S.Error>{error}</S.Error>}
  </S.Wrapper>
)

export default TextField
