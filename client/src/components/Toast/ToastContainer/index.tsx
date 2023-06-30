import { useEffect, useState } from 'react'
import ToastMessage, { ToastMessageProps } from '../ToastMessage'
import * as S from './styles'

export interface AddToastEvent extends Event {
  detail: {
    type: 'default' | 'success' | 'danger'
    text: string
  }
}

const ToastContainer = () => {
  const [messages, setMessages] = useState<ToastMessageProps[]>([])

  useEffect(() => {
    function handleAddToast(event: AddToastEvent) {
      console.log(event)
      const { type, text } = event.detail

      setMessages((prevState) => [
        ...prevState,
        { id: Math.random(), type, text }
      ])
    }
    document.addEventListener('addtoast', handleAddToast as EventListener)

    return () => {
      document.removeEventListener('addtoast', handleAddToast as EventListener)
    }
  }, [])

  return (
    <S.Container>
      {messages.map((message) => (
        <ToastMessage
          id={message.id}
          key={message.id}
          type={message.type}
          text={message.text}
        />
      ))}
    </S.Container>
  )
}

export default ToastContainer
