import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import CardSlider from '../CardSlider'

import * as S from './styles'
import { CardProps } from '../Card'

type ContactsListProps = {
  searchTerm: string
}

const ContactsList = ({ searchTerm }: ContactsListProps) => {
  const [contacts, setContacts] = useState<CardProps[]>([])
  const [orderBy, setOrderBy] = useState('asc')

  const filteredContacts = contacts.filter((contact: CardProps) => {
    return contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

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
          {filteredContacts.length}
          {filteredContacts.length === 1 ? ' contato' : ' contatos'}
        </S.Contacts>
        <S.Button>
          <Link to="/new">Novo Contato</Link>
        </S.Button>
      </S.Details>

      <S.CardWrapper>
        {filteredContacts.length > 0 && (
          <S.ListHeader onClick={handleToggleOrderBy}>
            Nome
            <S.ArrowIcon orderBy={orderBy} />
          </S.ListHeader>
        )}
        <CardSlider contacts={filteredContacts} />
      </S.CardWrapper>
    </S.Wrapper>
  )
}

export default ContactsList
