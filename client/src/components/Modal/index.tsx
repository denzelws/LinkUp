import Button from '../Button'
import * as S from './styles'

export type ModalProps = {
  title: string
  description: string
}

const Modal = () => (
  <S.OverlayBox>
    <S.ModalContainer>
      <S.Title>Título do modal</S.Title>
      <S.WarningText>Esta ação não poderá ser desfeita!</S.WarningText>
      <S.ButtonBox>
        <S.CancelButton>Cancelar</S.CancelButton>
        <Button size="small">Deletar</Button>
      </S.ButtonBox>
    </S.ModalContainer>
  </S.OverlayBox>
)

export default Modal
