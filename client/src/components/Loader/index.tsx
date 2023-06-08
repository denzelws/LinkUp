import ReactDOM from 'react-dom'

import * as S from './styles'

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
      <S.Loading />
    </S.Wrapper>,
    loaderRoot
  )
}
export default Loader
