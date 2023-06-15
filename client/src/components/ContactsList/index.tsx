import { Link } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'

import { CardProps } from '../Card'
import CardSlider from '../CardSlider'
import Loader from '../Loader'
import listContacts from '../../services/ContactsService'

import * as S from './styles'

type ContactsListProps = {
  searchTerm: string
}

const ContactsList = ({ searchTerm }: ContactsListProps) => {
  const [contacts, setContacts] = useState<CardProps[]>([])
  const [orderBy, setOrderBy] = useState('asc')
  const [isLoading, setIsLoading] = useState(true)

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact: CardProps) => {
      return contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
  }, [contacts, searchTerm])

  useEffect(() => {
    async function loadContacts() {
      try {
        setIsLoading(true)

        const contactsList = await listContacts(orderBy)
        setContacts(contactsList)
      } catch (error) {
        console.log('error', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadContacts()
  }, [orderBy])

  const handleToggleOrderBy = () => {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'))
  }

  return (
    <S.Wrapper>
      <Loader isLoading={isLoading} />
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
