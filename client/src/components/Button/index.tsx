import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  disabled?: boolean
  size?: 'small' | 'fullWidth'
}

const Button = ({
  children,
  disabled,
  size = 'small',
  ...props
}: ButtonProps) => (
  <S.Wrapper size={size} disabled={disabled} {...props}>
    {children}
  </S.Wrapper>
)

export default Button
