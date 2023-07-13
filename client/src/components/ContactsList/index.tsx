import { Link } from 'react-router-dom'

import CardSlider from '../CardSlider'
import Loader from '../Loader'

import useContactsList, {
  ContactsListProps
} from '../ContactsList/useContactsList'

import { ErrorStatus } from '../ErrorStatus'
import { EmptyList } from '../EmptyList'

import * as S from './styles'
import { SearchNotFound } from '../SearchNotFound'
import { ListHeader } from '../ListHeader'

const ContactsList = ({
  searchTerm,
  onContactCountChange
}: ContactsListProps) => {
  const {
    isLoading,
    orderBy,
    hasError,
    contacts,
    filteredContacts,
    handleDeleteContact,
    handleToggleOrderBy,
    handleTryAgain
  } = useContactsList({ searchTerm, onContactCountChange })

  const hasContacts = contacts.length > 0
  const isListEmpty = !hasError && !isLoading && !hasContacts
  const isSearchEmpty = !hasError && hasContacts && filteredContacts.length < 1

  return (
    <S.Wrapper>
      <Loader isLoading={isLoading} />
      <S.Details hasError={hasError} contactsLength={contacts.length}>
        {!hasError && hasContacts && (
          <S.Contacts>
            {filteredContacts.length}
            {filteredContacts.length === 1 ? ' contato' : ' contatos'}
          </S.Contacts>
        )}
        <S.Button>
          <Link to="/new">Novo Contato</Link>
        </S.Button>
      </S.Details>

      {hasError && <ErrorStatus onTryAgain={handleTryAgain} />}
      {isListEmpty && <EmptyList />}
      {isSearchEmpty && <SearchNotFound searchTerm={searchTerm} />}

      {hasContacts && (
        <S.CardWrapper>
          {filteredContacts.length > 0 && (
            <ListHeader
              orderBy={orderBy}
              handleToggleOrderBy={handleToggleOrderBy}
            />
          )}
          <CardSlider
            contacts={filteredContacts}
            onDeleteContact={handleDeleteContact}
          />
        </S.CardWrapper>
      )}
    </S.Wrapper>
  )
}

export default ContactsList
