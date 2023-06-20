import { Spinner } from '../Spinner'
import * as S from './styles'

export type FormGroupProps = {
  children: React.ReactNode
  error?: string
  isLoading?: boolean
}

const FormGroup = ({ children, error, isLoading }: FormGroupProps) => (
  <S.Wrapper>
    <S.FormItem>
      {children}
      {isLoading && (
        <S.LoaderWrapper>
          <Spinner size={16} />
        </S.LoaderWrapper>
      )}
    </S.FormItem>
    {!!error && <small>{error}</small>}
  </S.Wrapper>
)

export default FormGroup
