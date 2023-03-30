import ReactDOM from 'react-dom'

import * as S from './styles'

const loaderRoot = document.getElementById('loader-root') as Element

const Loader = () =>
  ReactDOM.createPortal(
    <S.Wrapper>
      <S.Loading />
    </S.Wrapper>,
    loaderRoot
  )

export default Loader
