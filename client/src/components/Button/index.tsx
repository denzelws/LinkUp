import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children: React.ReactNode
  disabled?: boolean
} & ButtonTypes

const Button = ({ children, disabled }: ButtonProps) => (
  <S.Wrapper disabled={disabled}>{children}</S.Wrapper>
)

export default Button
