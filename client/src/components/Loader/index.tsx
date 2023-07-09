import { Spinner } from '../Spinner'
import ReactPortal from '../ReactPortal'

import * as S from './styles'

type LoaderProps = {
  isLoading: boolean
}

const Loader = ({ isLoading }: LoaderProps) => {
  if (!isLoading) {
    return null
  }

  return (
    <ReactPortal containerId="loader-root">
      <S.Wrapper>
        <Spinner size={90} />
      </S.Wrapper>
    </ReactPortal>
  )
}
export default Loader
