import { ModalProps } from '../Modal'
import { Spinner } from '../Spinner'
import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  disabled?: boolean
  size?: 'small' | 'fullWidth'
  isLoading?: boolean
  onClick?: () => void
} & ModalProps

const Button = ({
  children,
  disabled = false,
  size = 'small',
  isLoading = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper size={size} disabled={disabled || isLoading} {...props}>
    {!isLoading && children}
    {isLoading && <Spinner size={16} />}
  </S.Wrapper>
)

export default Button
