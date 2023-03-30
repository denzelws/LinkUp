import Button from '../Button'
import * as S from './styles'

export type ModalProps = {
  danger?: boolean
}

const Modal = ({ danger }: ModalProps) => (
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
  </S.OverlayBox>
)

export default Modal
