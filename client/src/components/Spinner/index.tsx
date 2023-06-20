import * as S from './styles'

export type SpinnerProps = {
  size?: number
}

export const Spinner = ({ size = 32 }: SpinnerProps) => {
  return <S.StyledSpinner size={size} />
}
