import { Link } from 'react-router-dom'
import { CardProps } from '../Card'
import CardSlider from '../CardSlider'
import * as S from './styles'

export type ContactsListProps = {
  items: CardProps[]
}

const ContactsList = ({ items }: ContactsListProps) => (
  <S.Wrapper>
    <S.Details>
      <S.Contacts>3 contatos</S.Contacts>
      <S.Button>
        <Link to="/new">Novo Contato</Link>
      </S.Button>
    </S.Details>

    <S.CardWrapper>
      <S.Title>Nome</S.Title>
      <CardSlider items={items} />
    </S.CardWrapper>
  </S.Wrapper>
)

export default ContactsList
