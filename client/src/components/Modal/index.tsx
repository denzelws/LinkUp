import Button from '../Button'
import * as S from './styles'

import ReactDOM from 'react-dom'

export type ModalProps = {
  danger?: boolean
}

const modalRoot = document.getElementById('modal-root') as Element

const Modal = ({ danger }: ModalProps) =>
  ReactDOM.createPortal(
    <S.OverlayBox>
      <S.ModalContainer>
        <S.Title danger={danger}>Título do modal</S.Title>
        <S.WarningText>Esta ação não poderá ser desfeita!</S.WarningText>
        <S.ButtonBox>
          <S.CancelButton>Cancelar</S.CancelButton>
          <Button danger={danger} size="small">
            Deletar
          </Button>
        </S.ButtonBox>
      </S.ModalContainer>
    </S.OverlayBox>,
    modalRoot
  )

export default Modal
