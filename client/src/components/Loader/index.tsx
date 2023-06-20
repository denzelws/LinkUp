import ReactDOM from 'react-dom'

import * as S from './styles'
import { Spinner } from '../Spinner'

type LoaderProps = {
  isLoading: boolean
}

const loaderRoot = document.getElementById('loader-root') as Element

const Loader = ({ isLoading }: LoaderProps) => {
  if (!isLoading) {
    return null
  }

  return ReactDOM.createPortal(
    <S.Wrapper>
      <Spinner size={90} />
    </S.Wrapper>,
    loaderRoot
  )
}
export default Loader
