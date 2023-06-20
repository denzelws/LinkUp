import { Link } from 'react-router-dom'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { CardProps } from '../Card'
import CardSlider from '../CardSlider'
import Loader from '../Loader'

import contactsService from '../../services/ContactsService'
import sadImage from '../../public/img/sad.svg'
import emptyBox from '../../public/img/emptybox.svg'

import * as S from './styles'
import Button from '../Button'

type ContactsListProps = {
  searchTerm: string
  onContactCountChange: (count: number) => void
}

const ContactsList = ({
  searchTerm,
  onContactCountChange
}: ContactsListProps) => {
  const [contacts, setContacts] = useState<CardProps[]>([])
  const [orderBy, setOrderBy] = useState('asc')
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact: CardProps) => {
      return contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
  }, [contacts, searchTerm])

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true)
      const contactsList = await contactsService.listContacts(orderBy)
      setHasError(false)
      setContacts(contactsList)
      onContactCountChange(contactsList.length)
    } catch (error) {
      setHasError(true)
    } finally {
      setIsLoading(false)
    }
  }, [orderBy, onContactCountChange])

  useEffect(() => {
    loadContacts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleToggleOrderBy = () => {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'))
  }

  const handleTryAgain = () => {
    loadContacts()
  }

  return (
    <S.Wrapper>
      <Loader isLoading={isLoading} />
      <S.Details hasError={hasError} contactsLength={contacts.length}>
        {!hasError && contacts.length > 0 && (
          <S.Contacts>
            {filteredContacts.length}
            {filteredContacts.length === 1 ? ' contato' : ' contatos'}
          </S.Contacts>
        )}
        <S.Button>
          <Link to="/new">Novo Contato</Link>
        </S.Button>
      </S.Details>

      {hasError && (
        <S.ErrorContainer>
          <img src={sadImage} alt="Uma imagem mostrando uma cara triste" />
          <S.InfoBox>
            <S.WarningText>
              Ocorreu um erro ao obter seus contatos
            </S.WarningText>
            <Button onClick={handleTryAgain}>Tentar novamente</Button>
          </S.InfoBox>
        </S.ErrorContainer>
      )}

      {!hasError && (
        <S.CardWrapper>
          {contacts.length < 1 && !isLoading && (
            <S.EmptyContainer>
              <img
                src={emptyBox}
                alt="Uma ilustração demonstrando uma caixa vazia"
              />
              <S.EmptyText>
                Você ainda não tem nenhum contato cadastrado! Clique <br /> no
                botão
                <strong> "Novo Contato"</strong> à cima para cadastrar o seu
                primeiro!
              </S.EmptyText>
            </S.EmptyContainer>
          )}

          {filteredContacts.length > 0 && (
            <S.ListHeader onClick={handleToggleOrderBy}>
              Nome
              <S.ArrowIcon orderby={orderBy} />
            </S.ListHeader>
          )}
          <CardSlider contacts={filteredContacts} />
        </S.CardWrapper>
      )}
    </S.Wrapper>
  )
}

export default ContactsList
