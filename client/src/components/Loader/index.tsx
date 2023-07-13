import { Spinner } from '../Spinner'
import ReactPortal from '../ReactPortal'

import * as S from './styles'
import { useAnimatedUnmount } from '../../hooks/useAnimatedUnmount'

type LoaderProps = {
  isLoading: boolean
}

const Loader = ({ isLoading }: LoaderProps) => {
  const { shouldRender, animatedElementRef } = useAnimatedUnmount(isLoading)

  if (!shouldRender) {
    return null
  }

  return (
    <ReactPortal containerId="loader-root">
      <S.Wrapper isLeaving={!isLoading} ref={animatedElementRef}>
        <Spinner size={90} />
      </S.Wrapper>
    </ReactPortal>
  )
}
export default Loader
