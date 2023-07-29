import * as S from './styles'

import xCircleIcon from '../../../public/img/circle-x.svg'
import checkCircleIcon from '../../../public/img/check-circle.svg'
import { useEffect, useRef } from 'react'

export type ToastMessageProps = {
  id: number
  text: string
  type?: 'default' | 'success' | 'danger'
  duration?: number
  onRemoveMessage: (id: number) => void
  onAnimationEnd: (id: number) => void
  isLeaving: boolean
}

const ToastMessage = ({
  id,
  text,
  type = 'default',
  duration,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onRemoveMessage,
  isLeaving,
  onAnimationEnd
}: ToastMessageProps) => {
  const animatedElementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleAnimationEnd() {
      onAnimationEnd(id)
    }

    const elementRef = animatedElementRef.current
    if (isLeaving) {
      elementRef?.addEventListener('animationend', handleAnimationEnd)
    }

    return () => {
      elementRef?.removeEventListener('animationend', handleAnimationEnd)
    }
  }, [id, isLeaving, onAnimationEnd])

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
      isLeaving={isLeaving}
      ref={animatedElementRef}
    >
      {type === 'danger' && <img src={xCircleIcon} />}
      {type === 'success' && <img src={checkCircleIcon} />}
      <strong>{text}</strong>
    </S.Container>
  )
}

export default ToastMessage
