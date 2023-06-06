import { Link } from 'react-router-dom'
import CardSlider from '../CardSlider'
import * as S from './styles'
import { useEffect, useState } from 'react'

const ContactsList = () => {
  const [contacts, setContacts] = useState([])
  const [orderBy, setOrderBy] = useState('asc')

  useEffect(() => {
    fetch(`http://localhost:3333/contact?orderBy=${orderBy}`)
      .then(async (response) => {
        const json = await response.json()
        setContacts(json)
      })
      .catch((error) => {
        console.log('error', error)
      })
  }, [orderBy])

  const handleToggleOrderBy = () => {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'))
  }

  return (
    <S.Wrapper>
      <S.Details>
        <S.Contacts>
          {contacts.length}
          {contacts.length === 1 ? ' contato' : ' contatos'}
        </S.Contacts>
        <S.Button>
          <Link to="/new">Novo Contato</Link>
        </S.Button>
      </S.Details>

      <S.CardWrapper>
        <S.ListHeader onClick={handleToggleOrderBy}>
          Nome
          <S.ArrowIcon orderBy={orderBy} />
        </S.ListHeader>
        <CardSlider contacts={contacts} />
      </S.CardWrapper>
    </S.Wrapper>
  )
}

export default ContactsList
