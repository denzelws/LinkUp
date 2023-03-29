import * as S from './styles'

const Modal = () => (
  <S.OverlayBox>
    <S.ModalContainer>
      <S.Title>Título do modal</S.Title>
      <S.WarningText>Esta ação não poderá ser desfeita!</S.WarningText>
      <S.ButtonBox>anything</S.ButtonBox>
    </S.ModalContainer>
  </S.OverlayBox>
)

export default Modal
