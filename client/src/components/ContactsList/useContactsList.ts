import { useCallback, useEffect, useMemo, useState } from 'react'

import contactsService from '../../services/ContactsService'
import { CardProps } from '../Card'

export type ContactsListProps = {
  searchTerm: string
  onContactCountChange: (count: number) => void
}

const useContactsList = ({
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
      setContacts([])
    } finally {
      setIsLoading(false)
    }
  }, [orderBy, onContactCountChange])

  const handleDeleteContact = useCallback(
    (contactId: string) => {
      setContacts((prevContacts) =>
        prevContacts.filter((contact) => contact.id !== contactId)
      )
      onContactCountChange(contacts.length - 1)
    },
    [onContactCountChange, contacts]
  )

  useEffect(() => {
    loadContacts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleToggleOrderBy = () => {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'))
    console.log(orderBy)
  }

  const handleTryAgain = () => {
    loadContacts()
  }

  return {
    isLoading,
    orderBy,
    hasError,
    contacts,
    filteredContacts,
    handleDeleteContact,
    handleToggleOrderBy,
    handleTryAgain
  }
}

export default useContactsList
