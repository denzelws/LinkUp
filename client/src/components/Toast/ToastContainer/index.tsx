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
          isLeaving: false
        }
      ])
    }

    toastEventManager.on('addtoast', handleAddToast)

    return () => {
      toastEventManager.removeListener('addtoast', handleAddToast)
    }
  }, [handleRemoveMessage, setMessages])

  return (
    <S.Container>
      {renderList((message, { isLeaving, animatedRef }) => (
        <ToastMessage
          id={message.id}
          key={message.id}
          type={message.type}
          text={message.text}
          duration={message.duration}
          onRemoveMessage={handleRemoveMessage}
          isLeaving={isLeaving}
          animatedRef={animatedRef}
        />
      ))}
    </S.Container>
  )
}

export default ToastContainer
