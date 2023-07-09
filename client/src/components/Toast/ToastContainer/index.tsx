import { useCallback, useEffect, useState } from 'react'
import ToastMessage, { ToastMessageProps } from '../ToastMessage'
import * as S from './styles'
import { toastEventManager } from '../../../utils/toast'

export type AddToastEventProps = {
  type: 'default' | 'success' | 'danger'
  text: string
  duration?: number
}

const ToastContainer = () => {
  const [messages, setMessages] = useState<ToastMessageProps[]>([])

  useEffect(() => {
    function handleAddToast({ type, text, duration }: AddToastEventProps) {
      setMessages((prevState) => [
        ...prevState,
        { id: Math.random(), type, text, duration }
      ])
    }

    toastEventManager.on('addtoast', handleAddToast)

    return () => {
      toastEventManager.removeListener('addtoast', handleAddToast)
    }
  }, [])

  const handleRemoveMessage = useCallback((id: number) => {
    setMessages((prevState) => prevState.filter((message) => message.id !== id))
  }, [])

  return (
    <S.Container>
      {messages.map((message) => (
        <ToastMessage
          id={message.id}
          key={message.id}
          type={message.type}
          text={message.text}
          duration={message.duration}
          onRemoveMessage={handleRemoveMessage}
        />
      ))}
    </S.Container>
  )
}

export default ToastContainer
