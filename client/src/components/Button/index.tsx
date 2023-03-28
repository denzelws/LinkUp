import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  disabled?: boolean
}

const Button = ({ children, disabled }: ButtonProps) => (
  <S.Wrapper disabled={disabled}>{children}</S.Wrapper>
)

export default Button
