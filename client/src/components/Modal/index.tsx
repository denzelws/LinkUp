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

  if (!shouldRender) {
    return null
  }

  return (
    <ReactPortal containerId="modal-root">
      <S.OverlayBox isLeaving={!visible} ref={animatedElementRef}>
        <S.ModalContainer isLeaving={!visible}>
          <S.Title danger={danger}>{title}</S.Title>
          <S.WarningText>{children}</S.WarningText>
          <S.ButtonBox>
            <S.CancelButton onClick={onCancel} disabled={isLoading}>
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
