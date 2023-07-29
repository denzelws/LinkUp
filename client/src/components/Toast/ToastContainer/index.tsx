import { useEffect } from 'react'

import { useAnimatedList } from '../../../hooks/useAnimatedList'
import { toastEventManager } from '../../../utils/toast'
import ToastMessage from '../ToastMessage'

import * as S from './styles'

export type AddToastEventProps = {
  type: 'default' | 'success' | 'danger'
  text: string
  duration?: number
}

const ToastContainer = () => {
  const {
    handleRemoveItems: handleRemoveMessage,
    handleAnimationEnd,
    renderList,
    setItems: setMessages
  } = useAnimatedList()

  useEffect(() => {
    function handleAddToast({ type, text, duration }: AddToastEventProps) {
      setMessages((prevState) => [
        ...prevState,
        {
          id: Math.random(),
          type,
          text,
          duration,
          onRemoveMessage: handleRemoveMessage,
          onAnimationEnd: handleAnimationEnd,
          isLeaving: false
        }
      ])
    }

    toastEventManager.on('addtoast', handleAddToast)

    return () => {
      toastEventManager.removeListener('addtoast', handleAddToast)
    }
  }, [handleAnimationEnd, handleRemoveMessage, setMessages])

  return (
    <S.Container>
      {renderList((message, { isLeaving }) => (
        <ToastMessage
          id={message.id}
          key={message.id}
          type={message.type}
          text={message.text}
          duration={message.duration}
          onRemoveMessage={handleRemoveMessage}
          isLeaving={isLeaving}
          onAnimationEnd={handleAnimationEnd}
        />
      ))}
    </S.Container>
  )
}

export default ToastContainer
