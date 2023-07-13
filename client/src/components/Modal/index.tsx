import React, { useEffect, useState } from 'react'
import Button from '../Button'
import ReactPortal from '../ReactPortal'

import { useAnimatedUnmount } from '../../hooks/useAnimatedUnmount'

import * as S from './styles'

export type ModalProps = {
  danger?: boolean
  visible: boolean
  isLoading?: boolean
  title: string
  cancelLabel?: string
  confirmLabel?: string
  children: React.ReactNode
  onCancel: () => void
  onConfirm: () => void
}

const Modal = ({
  danger,
  visible,
  isLoading = false,
  title,
  children,
  cancelLabel = 'Cancelar',
  confirmLabel = 'Confirmar',
  onCancel,
  onConfirm
}: ModalProps) => {
  const { shouldRender, animatedElementRef } = useAnimatedUnmount(visible)
  const [isLeaving, setIsLeaving] = useState(false)

  useEffect(() => {
    if (visible) {
      setIsLeaving(false)
    }
  }, [visible])

  const handleCancel = () => {
    setIsLeaving(true)
    setTimeout(() => {
      onCancel()
    }, 20)
  }

  if (!shouldRender) {
    return null
  }

  let container = document.getElementById('modal-root')

  if (!container) {
    container = document.createElement('div')
    container.setAttribute('id', 'modal-root')
    document.body.appendChild(container)
  }

  return (
    <ReactPortal containerId="modal-root">
      <S.OverlayBox isLeaving={isLeaving} ref={animatedElementRef}>
        <S.ModalContainer isLeaving={isLeaving}>
          <S.Title danger={danger}>{title}</S.Title>
          <S.WarningText>{children}</S.WarningText>
          <S.ButtonBox>
            <S.CancelButton onClick={handleCancel} disabled={isLoading}>
              {cancelLabel}
            </S.CancelButton>
            <Button
              danger={danger}
              isLoading={isLoading}
              size="small"
              onClick={onConfirm}
            >
              {confirmLabel}
            </Button>
          </S.ButtonBox>
        </S.ModalContainer>
      </S.OverlayBox>
    </ReactPortal>
  )
}

export default Modal
