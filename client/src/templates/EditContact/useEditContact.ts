import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

import { CardProps } from '../../components/Card'

import contactsService from '../../services/ContactsService'
import { toast } from '../../utils/toast'

import { useSafeAsyncAction } from '../../hooks/useSafeAsyncAction'

const EditContact = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [contactName, setContactName] = useState('')

  const contactFormRef = useRef<HTMLFormElement>(null)

  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const safeAsyncAction = useSafeAsyncAction()

  useEffect(() => {
    async function loadContacts() {
      try {
        const contact: CardProps = await contactsService.getContactById(
          id ?? ''
        )

        safeAsyncAction(() => {
          contactFormRef.current?.SetFieldsValue(contact)
          setIsLoading(false)
          setContactName(contact.name)
        })
      } catch {
        safeAsyncAction(() => {
          navigate('/')
          toast({
            type: 'danger',
            text: 'Contato não encontrado!'
          })
        })
      }
    }

    loadContacts()
  }, [id, navigate, safeAsyncAction])

  async function handleSubmit(contact: CardProps): Promise<void> {
    try {
      await contactsService.updateContact(id, contact)
      setContactName(contact.name)

      toast({
        type: 'success',
        text: 'Contato editado com sucesso!'
      })
    } catch {
      navigate('/')
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao editar o contato!'
      })
    }
  }
  return {
    isLoading,
    contactName,
    contactFormRef,
    handleSubmit
  }
}

export default EditContact
