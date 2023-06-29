import * as S from './styles'

import xCircleIcon from '../../../public/img/circle-x.svg'
import checkCircleIcon from '../../../public/img/check-circle.svg'

type ToastMessageProps = {
  text: string
  type?: 'default' | 'success' | 'danger'
}

const ToastMessage = ({ text, type = 'default' }: ToastMessageProps) => {
  return (
    <S.Container>
      {type === 'danger' && <img src={xCircleIcon} />}
      {type === 'success' && <img src={checkCircleIcon} />}
      <strong>{text}</strong>
    </S.Container>
  )
}

export default ToastMessage
