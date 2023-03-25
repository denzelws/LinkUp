import * as S from './styles'

const ContactsList = () => (
  <S.Wrapper>
    <S.Details>
      <S.Contacts>3 contatos</S.Contacts>
      <S.Button>Novo Contato</S.Button>
    </S.Details>

    <S.CardWrapper>
      <S.Title>Nome</S.Title>
      <S.CardBox>
        <S.Card>1</S.Card>
        <S.Card>2</S.Card>
        <S.Card>3</S.Card>
      </S.CardBox>
    </S.CardWrapper>
  </S.Wrapper>
)

export default ContactsList
