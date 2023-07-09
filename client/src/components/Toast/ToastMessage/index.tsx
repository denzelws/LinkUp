import * as S from './styles'

import xCircleIcon from '../../../public/img/circle-x.svg'
import checkCircleIcon from '../../../public/img/check-circle.svg'
import { useEffect } from 'react'

export type ToastMessageProps = {
  id: number
  text: string
  type?: 'default' | 'success' | 'danger'
  duration?: number
  onRemoveMessage: (id: number) => void
}

const ToastMessage = ({
  id,
  text,
  type = 'default',
  duration,
  onRemoveMessage
}: ToastMessageProps) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemoveMessage(id)
    }, duration || 7000)

    return () => {
      clearTimeout(timeoutId)
    }
  })

  function handleRemoveToast() {
    onRemoveMessage(id)
  }

  return (
    <S.Container
      type={type}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
    >
      {type === 'danger' && <img src={xCircleIcon} />}
      {type === 'success' && <img src={checkCircleIcon} />}
      <strong>{text}</strong>
    </S.Container>
  )
}

export default ToastMessage
